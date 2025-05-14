import { Text3D, useCursor } from "@react-three/drei";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Buttons3D() {
  const tabName = [
    {
      id: 0,
      label: "Hello\nworld",
      path: "/",
      rotation: [0, 0, 0],
      position: [-0.9, 0, 4],
    },
    {
      id: 1,
      label: "Home",
      path: "/",
      rotation: [-0.75, -0.5, 1.1],
      position: [-1.8, 1, 2],
    },
    {
      id: 2,
      label: "Blog",
      path: "/blog",
      rotation: [-1.3, -0, 0],
      position: [-0.8, 2.4, 1.3],
    },
    {
      id: 3,
      label: "Projects",
      path: "/projects",
      rotation: [-1, 0.81, -0.99],
      position: [1.14, 2.74, 0.9],
    },
    {
      id: 4,
      label: "Misc",
      path: "/misc",
      rotation: [-3, 2.65, -4.7],
      position: [1.65, -1.2, 1.85],
    },
  ];

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const navigate = useNavigate();

  return (
    <>
      {tabName.map((tabs) => (
        <mesh
          onClick={() => {
            navigate(tabs.path);
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Text3D
            position={tabs.position}
            rotation={tabs.rotation}
            curveSegments={20}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.65}
            letterSpacing={0}
            size={0.4}
            font="/JetBrainsMono.json"
          >
            {`${tabs.label.toUpperCase()}`}
            <meshToonMaterial color="white" />
          </Text3D>
        </mesh>
      ))}
    </>
  );
}
