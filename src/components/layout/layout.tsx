// src/components/layout/layout.tsx
import { ReactNode } from "react";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

interface layoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
export default Layout;
