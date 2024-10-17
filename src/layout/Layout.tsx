import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
