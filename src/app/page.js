import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import GameDisplay from "./components/GameDisplay";
import MainSection from "./components/MainSection";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <main className={`bg-[#202020FF]`}>
      <div className={`flex flex-col w-full mt-24`}>
        <MainSection />
        <GameDisplay />
        <AboutSection />
        <SocialLinks />
        <ContactForm />
      </div>
    </main>
  );
}
