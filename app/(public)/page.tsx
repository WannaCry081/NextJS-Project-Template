import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
    </div>
  );
}
