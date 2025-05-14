import { Text3D, useCursor } from "@react-three/drei";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Buttons3D() {
  const tabName = [
    {
      id: 0,
      label: "Hello\nworld",
      path: "/",
      position: [-1.5, 0.5, 2.9],
    },
    {
      id: 1,
      label: "Home",
      path: "/",
      position: [0.7, 2.9, 1.9],
    },
    {
      id: 2,
      label: "Blog",
      path: "/blog",
      position: [0.7, 2.9, 1.9],
    },
    {
      id: 3,
      label: "Projects",
      path: "/projects",
      position: [0.7, 2.9, 1.9],
    },
    {
      id: 4,
      label: "Misc",
      path: "/misc",
      position: [0.7, 2.9, 1.9],
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
            console.log("home......");
            navigate(tabs.path);
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Text3D
            position={tabs.position}
            rotation={[-Math.PI / 2.3, 19, 2]}
            curveSegments={20}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={0.4}
            font="/Inter_Bold.json"
          >
            {`${tabs.label.toUpperCase()}`}
            <meshNormalMaterial />
          </Text3D>
        </mesh>
      ))}
    </>
  );
}
