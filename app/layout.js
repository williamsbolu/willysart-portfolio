import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Footer from "@/app/_components/ui/Footer";
import Header from "@/app/_components/ui/Header";
import { DisplayProvider } from "./_context/display-context";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: { default: "WillysArt | Digital Artist", template: "%s | WillysArt" },
  description:
    "WillysArt is a multidisciplinary creative whose practice spans art direction, 2D art, digital illustration, Graphic Design, 3D, animation and branding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white dark:bg-gray-900`}>
        <DisplayProvider>
          <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto] mx-auto max-w-6xl">
            <Header />
            <main className="px-5 xl:px-0">{children}</main>
            <Footer />
          </div>
        </DisplayProvider>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 4000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "14px",
              maxWidth: "500px",
              padding: "10px 20px",
              backgroundColor: "#fff",
              color: "#374151",
            },
          }}
        />
      </body>
    </html>
  );
}
