// generate about section for energetic games

import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      className={`flex flex-col items-center justify-center w-full h-[700px] bg-[#00000066]`}
    >
      <div className={`flex flex-col items-center justify-center`}>
        <h1 className={`text-white text-5xl font-bold`}>About Us</h1>
        <p className={`text-justify max-w-[900px] text-white text-lg p-5`}>
          Energetic Games is a game development company that focuses on creating
          games that are fun and engaging. Our team of developers are passionate
          about creating games that are not only entertaining but also
          challenging. We believe that games should be more than just a way to
          pass the time, they should be an experience that leaves a lasting
          impression. Our goal is to create games that are memorable and
          enjoyable for players of all ages.
        </p>
      </div>
      <Image
        src={`/image/logo.svg`}
        alt={`about image`}
        width={200}
        height={200}
        className={`rounded-lg`}
      />
    </section>
  );
};

export default AboutSection;
