'use client';

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { WebGPURenderer } from "three/webgpu";
import { ACESFilmicToneMapping,SRGBColorSpace } from "three";
import { OrbitControls, Html } from "@react-three/drei";

import useResponsiveData from "./hooks/useResponsiveData";
import Background from "./background/Background";
import Login from "./ui/Login";
import SignUp from "./ui/SignUp";

function Scene(){
  const responsiveData = useResponsiveData();
  return(
    <>
    <Suspense fallback={null}>
      <Canvas 
      gl={async(props)=>{
        // @ts-expect-error WebGPU renderer is experimental and not typed yet
        const renderer = new WebGPURenderer(props);
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.toneMapping = ACESFilmicToneMapping;
        await renderer.init();
        return renderer
      }}
      camera={{ position: [0, 0, responsiveData.cameraZ], fov: 50}}
      >
        <OrbitControls />
      <Html occlude  scale={0.1} transform center position={[0, 0, 0.05]} zIndexRange={[100, 0]}>
        <Login />
      </Html>

      <Html occlude transform scale={0.1} center position={[0, 0, -0.05]} rotation={[0, Math.PI, 0]} zIndexRange={[100, 0]}>
        <SignUp />
      </Html>

        <Background />
      </Canvas>
    </Suspense>


    </>
  )
}

export default Scene;