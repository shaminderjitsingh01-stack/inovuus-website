import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Solutions from "@/components/sections/Solutions";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Solutions />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
