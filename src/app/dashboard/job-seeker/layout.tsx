import DashBoardContextProvider from "@/app/useContext/dashboardContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashBoardContextProvider>
        <main className="grow">{children}</main>
      </DashBoardContextProvider>
    </>
  );
};

export default Layout;
