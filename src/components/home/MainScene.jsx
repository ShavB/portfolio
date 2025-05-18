import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Buttons3D from "./geometry/Buttons3D";
import EyesModel from "./models/Eyes";

gsap.registerPlugin(ScrollTrigger);

export default function MainScene() {
  const hexCubeRef = useRef();
  const hexCubeSpinRef = useRef();
  const initialPosition = [0, -0.4, 0];

  useEffect(() => {
    gsap.fromTo(
      hexCubeSpinRef.current.rotation,
      {
        y: 10,
      },
      { y: 0, duration: 5, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <group ref={hexCubeRef} position={initialPosition} rotation={[0, 0, 0]}>
        <group ref={hexCubeSpinRef}>
          <mesh>
            {/* <icosahedronGeometry args={[4, 0]} /> */}
            <EyesModel position={[0, 0, 0]} />
            <meshStandardMaterial color="#90a4ae" />
          </mesh>
          {/* <Buttons3D /> */}
        </group>
      </group>
    </>
  );
}
