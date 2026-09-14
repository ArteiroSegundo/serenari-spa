import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AosInit from "@/components/AosInit";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Serenari Spa | Massoterapia Humanizada em Suzano/SP",
    template: "%s | Serenari Spa",
  },
  description:
    "Espaço de massoterapia humanizada em Suzano/SP. Oferecemos experiências de bem-estar com acolhimento, presença e cuidado para transformar o toque em saúde e equilíbrio.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Serenari Spa",
    locale: "pt_BR",
    type: "website",
    images: ["/logo-serenari-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo-serenari-preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={montserrat.variable}>
      <body>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <AosInit />
        {children}
      </body>
    </html>
  );
}
