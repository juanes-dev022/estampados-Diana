

import WhatsAppButton from "../common/WhatsAppButton";
import type { ReactNode } from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const MobileLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar onMenuClick={() => setIsOpen(true)} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main
        style={{
          flex: 1,
          maxWidth: 480,
          margin: "0 auto",
          padding: "16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MobileLayout;