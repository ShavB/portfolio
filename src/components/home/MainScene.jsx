import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Center, Text, Text3D } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/Addons.js";
// import Home3DButton from "./geometry/Home3DButton";
import Buttons3D from "./geometry/Buttons3D";
// import { useLoader } from "@react-three/fiber";

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
