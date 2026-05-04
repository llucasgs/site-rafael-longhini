"use client";

import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { Group, Mesh, MeshStandardMaterial } from "three";

const MODEL_PATH = "/Models/3DPrinter/printer-optimized.glb";

type PrinterModelProps = {
  scale?: number;
};

export function PrinterModel({ scale = 2.8 }: PrinterModelProps) {
  const groupRef = useRef<Group>(null);
  const gltf = useGLTF(MODEL_PATH);

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
    <group
      ref={groupRef}
      scale={scale}
      position={[0, -1.05, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
