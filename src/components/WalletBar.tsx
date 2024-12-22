import { useConnect, useDisconnect, useAccount } from '@starknet-react/core';

const WalletBar: React.FC = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  return (
    <div className="flex flex-col items-center space-y-4 ">
      {!address ? (
        <div className="flex flex-wrap justify-center gap-2 ">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              className="border border-none text-black font-regular py-2 px-4 bg-yellow-300 hover:bg-yellow-500 rounded-full"
            >
              Connect {connector.id}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-sm bg-gray-200 px-4 py-2 text-black rounded-md">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </div>
          <button
            onClick={() => disconnect()}
            className="border border-none text-black font-regular rounded-full py-2 px-4 bg-red-500 hover:bg-red-900 hover:text-white"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletBar;