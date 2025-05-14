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
      <group ref={hexCubeRef} position={initialPosition} rotation={[0, 0, 0]}>
        <group ref={hexCubeSpinRef}>
          <mesh>
            <icosahedronGeometry args={[4, 0]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <Buttons3D />
          {/* <Home3DButton /> */}
        </group>
      </group>
    </>
  );
}

{
  /* <mesh
    onClick={() => {
      console.log("home......");
    }}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
  >
    <Text3D
      position={[-1.5, 0.5, 2.9]}
      curveSegments={20}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.1}
      height={0.5}
      lineHeight={0.5}
      letterSpacing={-0.06}
      size={0.8}
      font="/Inter_Bold.json"
    >
      {`hello\nworld`}
      <meshNormalMaterial />
    </Text3D>
  </mesh> */
}
