"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { ACESFilmicToneMapping, MOUSE, SRGBColorSpace, TOUCH } from "three";

import { PrinterModel } from "./PrinterModel";

export function PrinterCanvas() {
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
    >
      <PerspectiveCamera makeDefault position={[0, 1.3, 3.7]} fov={35} />

      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 5, 4]} intensity={2.4} />

      <pointLight position={[-3, 2, 3]} intensity={1.1} color="#f97316" />
      <pointLight position={[3, 1.8, -2]} intensity={1.1} color="#38bdf8" />

      <Suspense fallback={null}>
        <PrinterModel />
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
        zoomSpeed={0.9}
        panSpeed={0.7}
        minDistance={1.8}
        maxDistance={9}
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
