import { CgHello } from "react-icons/cg";
import MainCanvas from "./MainCanvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router";

export default function Home() {
  const hello = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".hello", {
        rotation: "+=360",
        x: 100,
        duration: 10,
        repeat: -1,
        ease: "back.inOut",
      });
    },
    { dependencies: [], scope: container }
  );

  return (
    <div className="flex items-center justify-center w-screen mt-4 sm:mt-20">
      <div className="items-center sm:basis-1/4 rounded p-3">
        <div ref={container} className="container flex flex-col gap-4 mt-40">
          <h2 className=" flex items-center gap-2 text-3xl">
            <span>Hi</span>{" "}
            <span ref={hello} className="hello">
              <CgHello />
            </span>
          </h2>
          <h1 className="homepage-name text-5xl">I'm Shyam Bisht,</h1>
          <p>
            A Software Developer and DevOps Enthusiast, who loves intuitive,
            clean and modern technologies.
          </p>
          <div className="flex gap-4">
            <Link to="/contact">
              <button className="border-1 p-2 rounded-2xl cursor-pointer">
                Get in Touch
              </button>
            </Link>

            <a href="/ShyamBisht.pdf" target="_blank">
              <button className="border-1 p-2 rounded-2xl cursor-pointer">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center">
        <MainCanvas />
      </div>
    </div>
  );
}
