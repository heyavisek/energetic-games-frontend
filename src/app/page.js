import Image from "next/image";
import Navbar from "@/components/navbar";
import MainSection from "@/components/mainSection";
import GameDisplay from "@/components/gameDisplay";
import Footer from "@/components/footer";
import AboutSection from "@/components/aboutSection";
import SocialLinks from "@/components/socialLinks";

export default function Home() {
  return (
    <main className={`bg-[#202020FF]`}>
        <Navbar />
        <div className={`flex flex-col w-full mt-24`}>
            <MainSection />
            <GameDisplay />
            <AboutSection />
            <SocialLinks />
        </div>
        <Footer />
    </main>
  );
}
