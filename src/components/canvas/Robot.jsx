import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AnimationMixer } from 'three';
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./robot/scene.gltf");
  const mixer = useRef();

  // Initialize mixer when the component mounts
  useEffect(() => {
    mixer.current = new AnimationMixer(computer.scene);
    if (computer.animations.length) {
      const action = mixer.current.clipAction(computer.animations[0]);
      action.play();
    }
    return () => {
      mixer.current.stopAllAction(); // Cleanup on unmount
    };
  }, [computer]);

  // Update the animation on each frame
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta); // Update mixer with delta time
    }
  });

  return (
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.6 : 2.5}
      position={isMobile ? [0, -2.5, -2.2] : [0, -3.7, 0]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always' // Continuous rendering
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
