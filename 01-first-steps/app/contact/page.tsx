import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Its a page about Contact",
  keywords: ["Contact Page", "Manolo", "Next.js"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact page</span>
    </>
  );
}
