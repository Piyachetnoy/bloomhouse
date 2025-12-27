import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloomhouse",
  description: "Solve your business pains with digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
