import { Center, Environment, OrbitControls, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";

export default function MainCanvas() {
  return (
    <div className="w-[70vh] h-[70vh]">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 33, position: [0, 0, 10] }}>
        <Environment files="/backs.jpg" />
        <ambientLight intensity={0} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <MainScene />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
