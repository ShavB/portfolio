import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function EyesModel(props) {
  const gltf = useGLTF("/models/eyes.glb");
  const { scene, animations } = gltf;
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions[Object.keys(actions)[0]]?.play();
  }, [actions]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/eyes.glb");
