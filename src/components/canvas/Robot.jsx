import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./robot/scene.gltf");
  const mixer = useRef();

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

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.8 : 2.5}
      position={isMobile ? [0, -1.8, -2.2] : [0, -3.7, 0]}
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
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [10, 3, 5] : [20, 3, 5],
        fov: isMobile ? 35 : 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ touchAction: "none" }} // Prevent touch from capturing scroll events
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false} // Disable zoom and pan on mobile
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 0, 0]} // Make sure camera focuses on the center
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
