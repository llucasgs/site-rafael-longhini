"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import {
  ACESFilmicToneMapping,
  MOUSE,
  SRGBColorSpace,
  TOUCH,
  type Mesh,
  type MeshStandardMaterial,
} from "three";

type Vector3Tuple = [number, number, number];

type ModelProps = {
  modelPath: string;
  rotation?: Vector3Tuple;
  fitMargin?: number;
};

type ModelCanvasProps = {
  modelPath: string;
  rotation?: Vector3Tuple;
  cameraPosition?: Vector3Tuple;
  fitMargin?: number;
  minDistance?: number;
  maxDistance?: number;
};

function Model({
  modelPath,
  rotation = [0, 0, 0],
  fitMargin = 0.85,
}: ModelProps) {
  const gltf = useGLTF(modelPath);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      const mesh = child as Mesh;

      if (!mesh.isMesh) return;

      mesh.castShadow = false;
      mesh.receiveShadow = false;

      const material = mesh.material as
        | MeshStandardMaterial
        | MeshStandardMaterial[];

      if (Array.isArray(material)) {
        material.forEach((item) => {
          item.needsUpdate = true;
        });

        return;
      }

      if (material) {
        material.needsUpdate = true;
      }
    });
  }, [gltf]);

  return (
    <Bounds fit clip margin={fitMargin}>
      <Center>
        <primitive object={gltf.scene} rotation={rotation} />
      </Center>
    </Bounds>
  );
}

export function ModelCanvas({
  modelPath,
  rotation = [0, -Math.PI / 5, 0],
  cameraPosition = [0, 1.2, 4.5],
  fitMargin = 0.85,
  minDistance = 0.35,
  maxDistance = 10,
}: ModelCanvasProps) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.25]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = ACESFilmicToneMapping;
        gl.outputColorSpace = SRGBColorSpace;
      }}
      className="h-full w-full"
      style={{
        touchAction: "none",
      }}
    >
      <PerspectiveCamera makeDefault position={cameraPosition} fov={38} />

      <ambientLight intensity={1.25} />
      <directionalLight position={[4, 5, 4]} intensity={2.1} />
      <pointLight position={[-3, 2, 3]} intensity={1} color="#f97316" />
      <pointLight position={[3, 2, -2]} intensity={1} color="#38bdf8" />

      <Suspense fallback={null}>
        <Model
          modelPath={modelPath}
          rotation={rotation}
          fitMargin={fitMargin}
        />

        <Environment preset="city" background={false} />
      </Suspense>

      <OrbitControls
        makeDefault
        enableRotate
        enableZoom
        enablePan
        enableDamping={false}
        screenSpacePanning
        rotateSpeed={0.7}
        zoomSpeed={1}
        panSpeed={0.65}
        minDistance={minDistance}
        maxDistance={maxDistance}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 1.08}
        mouseButtons={{
          LEFT: MOUSE.ROTATE,
          MIDDLE: MOUSE.DOLLY,
          RIGHT: MOUSE.PAN,
        }}
        touches={{
          ONE: TOUCH.ROTATE,
          TWO: TOUCH.DOLLY_PAN,
        }}
      />
    </Canvas>
  );
}
