"use client";
import AnimatedText from "./_components/AnimatedText";
import NameLogo from "./_components/NameLogo";
import MenuButton from "./_components/MenuButton";

export default function Home() {
  return (
    <main className="relative w-full h-screen font-pretendard">
      <section>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={"/video/background2.mp4"}
          loop
          autoPlay
          muted
        />

        <div className="flex justify-center items-center w-full min-h-screen">
          <AnimatedText />
        </div>
        <MenuButton />
        <div className="absolute p-2 pb-16 transform -translate-x-1/2 bottom-10 right-10">
          <NameLogo />
        </div>
      </section>
    </main>
  );
}
