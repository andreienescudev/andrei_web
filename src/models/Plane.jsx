import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

export function Plane(props) {
  const ref = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Always play the animation when the component mounts
  useEffect(() => {
    actions["Take 001"].play();

    return () => {
      actions["Take 001"].stop(); // Stop the animation when the component unmounts
    };
  }, [actions]); // Depend on 'actions' to ensure this effect runs once actions are available

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
