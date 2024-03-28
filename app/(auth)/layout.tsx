import type { Metadata } from "next";
import { Logo } from "./_components/logo";

export const metadata: Metadata = {
  title: "DPPPA",
  description: "DPPPA Page",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center mt-8 gap-4">
      <Logo />
      {children}
    </div>
  );
}
