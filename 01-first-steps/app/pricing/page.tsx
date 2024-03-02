import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Its a page about Pricing of my service",
  keywords: ["Pricing Page", "Manolo", "Next.js"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  );
}
