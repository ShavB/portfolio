import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Buttons3D from "./geometry/Buttons3D";

gsap.registerPlugin(ScrollTrigger);

export default function MainScene() {
  const hexCubeRef = useRef();
  const hexCubeSpinRef = useRef();
  const initialPosition = [0, -0.4, 0];

  return (
    <>
      <group
        ref={hexCubeRef}
        position={initialPosition}
        rotation={[0.58, 0.7, -0.1]}
      >
        <group ref={hexCubeSpinRef}>
          <mesh>
            <icosahedronGeometry args={[4, 0]} />
            <meshStandardMaterial color="#EA580C" />
          </mesh>
          <Buttons3D />
        </group>
      </group>
    </>
  );
}
