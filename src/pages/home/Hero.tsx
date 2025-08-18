import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Particles } from "../../components/magicui/particles";
import Adobe from "../../components/icon/Adobe";
import Microsoft from "../../components/icon/Microsoft";
import Windows from "../../components/icon/Windows";

export default function Hero() {
  const handleScrollTo = () => {
    const element = document.getElementById("collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[70vh] min-h-120 flex flex-col items-center justify-center gap-6">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />

      <h1 className="relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto px-4 md:py-2 text-balance text-center font-semibold tracking-tighter md:text-center text-5xl sm:text-7xl md:text-7xl lg:text-7xl">
        Everything Is A Gift
      </h1>

      <p className="px-2 max-w-xl text-balance text-center text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
        I'm so bored, then I made a website just for sharing some things that
        you are looking for
      </p>

      <RainbowButton className="mb-4" size={"lg"} onClick={handleScrollTo}>
        Discover free things :3
      </RainbowButton>

      <div className="flex gap-6">
        <Adobe className="size-8" />
        <Microsoft className="size-8" />
        <Windows className="size-8" />
      </div>
    </div>
  );
}
