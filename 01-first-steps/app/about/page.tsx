import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Its a page about Manolo",
  keywords: ["About Page", "Manolo", "Next.js"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About page</span>
    </>
  );
}
