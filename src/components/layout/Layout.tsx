import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/254712345678" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <img 
            src="/assets/whatsapp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8" 
          />
        </a>
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;