import { Center, Environment, OrbitControls, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";

export default function MainCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 55, position: [0, 0, 10] }}>
        <Environment files="/backs.jpg" />
        <MainScene />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
