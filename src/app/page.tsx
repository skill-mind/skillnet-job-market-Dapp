"use client";
import { FC, useRef, useMemo, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Abi, useBlockNumber, useProvider } from "@starknet-react/core";
import { useSendTransaction, useAccount } from "@starknet-react/core";
import { useBalance } from "@starknet-react/core";
import { useReadContract, useNetwork } from "@starknet-react/core";
import { ABI } from "@/abi/abi";
import { useContract } from "@starknet-react/core";
import { useTransactionReceipt } from "@starknet-react/core";
import { RpcProvider } from "starknet";
import { formatAmount } from "@/lib/utils";

const WalletBar = dynamic(() => import("../components/WalletBar"), {
  ssr: false,
});
const Page: FC = () => {
  // Step 1 --> Read the latest block -- Start
  const {
    data: blockNumberData,
    isLoading: blockNumberLoading,
    isError: blockNumberError,
  } = useBlockNumber({ blockIdentifier: "latest" });
  const workShopEnd = 450000;
  // Step 1 --> Read the latest block -- End

  // Step 2 --> Read your balance -- Start
  const { address: userAddress } = useAccount();
  const {
    data: balanceData,
    error: balanceError,
    isError: balanceIsError,
  } = useBalance({
    address: userAddress,
    watch: true,
  });
  // Step 2 --> Read your balance -- End

  // Step 3 --> Read counter from contract -- Start
  const contractAddress =
    "0x07fc0ba508a9c5a95d0db5b97093071ba13f4b64af9bddf3087b4717262a47eb";
  // const {data: contractData, error: contractError, isError: contractIsError, isLoading: contractIsLoading}
  const { chain } = useNetwork();
  const {
    data: readData,
    isError: readIsError,
    isLoading: readIsLoading,
    refetch: dataRefetch,
  } = useReadContract({
    functionName: "get_counter",
    args: undefined,
    abi: ABI as Abi,
    watch: true,
    address: contractAddress,
    refetchInterval: 1000,
  });
  // Step 3 --> Read counter from contract -- End

  // Step 4 --> Increase counter on contract -- Start
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await writeAsync();
  };
  const typedABI = ABI as Abi;
  const { contract } = useContract({
    abi: typedABI,
    address: contractAddress,
  });

  const calls = useMemo(() => {
    if (!userAddress || !contract) return [];

    return [contract.populate("increase_counter")];
  }, [userAddress, contract]);

  const {
    send: writeAsync,
    data: writeData,
    isPending: writeIsPending,
  } = useSendTransaction({
    calls,
  });

  const {
    data: waitData,
    status: waitStatus,
    isLoading: waitIsLoading,
    error: waitError,
    isError: waitIsError,
  } = useTransactionReceipt({
    watch: true,
    hash: writeData?.transaction_hash,
  });

  const LoadingState = ({ message }: { message: string }) => (
    <div className="flex items-center space-x-2">
      {" "}
      <div className="animate-spin">
        {" "}
        <svg
          className="h-5 w-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />{" "}
        </svg>{" "}
      </div>{" "}
      <span>{message}</span>{" "}
    </div>
  );
  const buttonContent = () => {
    if (writeIsPending) {
      return <LoadingState message="Send..." />;
    }
    if (waitIsLoading) {
      return <LoadingState message="Waiting for confirmation..." />;
    }
    if (waitStatus === "error") {
      return <LoadingState message="Transaction rejected..." />;
    }
    if (waitStatus === "success") {
      return "Transaction confirmed";
    }
    return "Send";
  };
  // Step 4 --> Increase counter on contract -- End

  // Step 5 --> Reset balance -- Start
  // Step 5 --> Reset balance -- End

  // Step 6 --> Get events from a contract -- Start
  type contractEvent = {
    from_address: string;
    keys: string[];
    data: string[];
  };

  const provider = useMemo(
    () =>
      new RpcProvider({
        nodeUrl: process.env.NEXT_PUBLIC_RPC_URL,
      }),
    []
  );

  const [events, setEvents] = useState<contractEvent[]>([]);
  const lastCheckedBlockRef = useRef(0);
  const { data: blockNumber } = useBlockNumber({ refetchInterval: 1000 });
  const checkForEvents = useCallback(
    async (contracts: any, currentBlockNumber: number) => {
      if (currentBlockNumber <= lastCheckedBlockRef.current) return;
      try {
        const formBlock = lastCheckedBlockRef.current + 1;
        const fetchedEvents = await provider.getEvents({
          address: contract.address,
          from_block: { block_number: formBlock },
          to_block: { block_number: currentBlockNumber },
          chunk_size: 500,
        });
        if (fetchedEvents && fetchedEvents.events) {
          setEvents((prevEvents) => [...prevEvents, ...fetchedEvents.events]);
        }
        lastCheckedBlockRef.current = currentBlockNumber;
      } catch (error) {
        console.error("error checking for events:", error);
      }
    },
    [provider]
  );
  useEffect(() => {
    if (contract && blockNumber) {
      checkForEvents(contract, blockNumber);
    }
  }, [contract, blockNumber, checkForEvents]);
  const lastFiveEvents = useMemo(() => {
    return [...events].reverse().slice(0, 5);
  }, [events]);

  // Step 6 --> Get events from a contract -- End

  return (
    <div className="min-h-screen bg-gray-300 p-4 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Starknet Frontend Workshop
      </h1>
      <h2 className="text-blue-950 text-center text-xl uppercase mb-10 font-bold">
        counter web app
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-full max-w-md space-y-4">
          <div className="bg-white p-4 border-none border rounded-lg">
            <h2 className="text-xl font-bold  text-blue-500 text-center mb-5">
              Wallet Connection
            </h2>
            <WalletBar />
          </div>

          {/* Step 1 --> Read the latest block -- Start */}
          <div
            className={`p-4 border-none border rounded-lg ${
              blockNumberData! < workShopEnd ? "bg-green-700" : "bg-red-500"
            }`}
          >
            <h3 className="text-lg font-bold mb-2 text-center text-blue-500">Read the lastest Block</h3>
            <p>Current Block: {blockNumberData}</p>
            <p>
              {blockNumberData! < workShopEnd
                ? "Workshop is live "
                : "Workshop has ended"}
            </p>
          </div>
          {/* Step 1 --> Read the latest block -- End */}

          {/* Step 2 --> Read your balance -- Start */}
          <div className="p-4  border-none border bg-white text-black rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-center text-blue-500">Wallet Balance</h3>
            <p className="text-black">Symbol: {balanceData?.symbol}</p>
            <p className="text-black">Balance: {Number(balanceData?.formatted).toFixed(5)}</p>
          </div>
          {/* Step 2 --> Read your balance -- End */}

          {/* Step 5 --> Reset balance by owner only -- Start */}
          {/* <div className="p-4 bg-white border-black border">
            <h3 className="text-lg font-bold mb-2">Reset Balance</h3>
            <button
              onClick={() => console.log("Resetting...")}
              disabled={false}
              className="mt-2 border border-black text-black font-regular py-2 px-4 bg-yellow-300 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Reset Balance
            </button>
            <p className="mt-2 text-sm">
              Transaction sent: url
            </p>
          </div> */}
          {/* Step 5 --> Reset balance by owner only -- End */}
        </div>

        <div className="w-full max-w-md space-y-4">
          {/* Step 3 --> Read from a contract -- Start */}
          <div className="p-4  border-none bg-white rounded-lg border text-black">
            <h3 className="text-lg font-bold mb-2 text-blue-500 text-center">Contract Balance</h3>
            <p className="text-black">Balance: {readData?.toString()}</p>
            <button
              onClick={() => dataRefetch()}
              className="mt-2 border rounded-full text-white  font-regular py-2 px-7 bg-green-500 hover:bg-green-700"
            >
              Refresh
            </button>
          </div>
          {/* Step 3 --> Read from a contract -- End */}

          {/* Step 4 --> Write to a contract -- Start */}
          <form
            onSubmit={handleSubmit}
            className=" p-4 border-none bg-white border"
          >
            <h3 className="text-lg font-bold mb-2 text-blue-500 text-center">Increase Counter</h3>
            <button
              type="submit"
              disabled={!userAddress || writeIsPending}
              className="mt-3 border border-none rounded-full text-black font-regular py-2 px-4 bg-yellow-300 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {buttonContent()}
            </button>
            {writeData?.transaction_hash && (
              <a
                href={`https://sepolia.voyager.online/tx/${writeData?.transaction_hash}`}
                target="_blank"
                className="block mt-2 text-blue-500 hover:text-blue-700 underline"
                rel="noreferrer"
              >
                Check TX on Sepolia
              </a>
            )}
          </form>
          {/* Step 4 --> Write to a contract -- End */}

          {/* Step 6 --> Get events from a contract -- Start */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-black">
              <thead>
                <tr>
                  <th className="border-b border-gray-300 text-left p-2 font-semibold">
                    #
                  </th>
                  <th className="border-b border-gray-300 text-right p-2 font-semibold">
                    New Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {lastFiveEvents.map((event, index) => (
                  <tr key={index} className={"bg-gray-50"}>
                    <td className="border-b border-gray-200 p-2">
                      {lastFiveEvents.length - index}
                    </td>
                    <td className="border-b border-gray-200 p-2 text-right">
                      {event.data.length > 0 ? formatAmount(event.data[0]) : "value 0"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Step 6 --> Get events from a contract -- End */}
        </div>
      </div>
    </div>
  );
};

export default Page;
