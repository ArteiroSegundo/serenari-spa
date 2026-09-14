import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import ConsentBanner from "@/components/ConsentBanner";

export default function LegalPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header variant="legal" />
      <main className="legal-page-content">{children}</main>
      <SocialBar />
      <Footer />
      <ConsentBanner />
    </>
  );
}
