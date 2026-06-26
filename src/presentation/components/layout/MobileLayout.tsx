

import { useScrollToBottom } from "../../hooks/useScrollToBottom";
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
  const showFooter = useScrollToBottom();


  return (
    <>
      <Navbar onMenuClick={() => setIsOpen(true)} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main
        style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "16px",
          paddingBottom: "80px",
          width: "100%",
        }}
      >
        {children}
        {showFooter && <Footer />}
      </main>
      <Footer/>
      <WhatsAppButton />
    </>
  );
};

export default MobileLayout;