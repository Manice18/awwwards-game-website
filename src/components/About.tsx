import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollToPlugin);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center", // triggers after it passed 800px from the center
        scrub: 0.5, // how we are moving through the animation through scroll
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's l<b>a</b>rgest  <br />shared adventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Gmes begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
