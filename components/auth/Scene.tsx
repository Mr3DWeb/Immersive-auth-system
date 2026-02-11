'use client';

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { WebGPURenderer } from "three/webgpu";
import { ACESFilmicToneMapping,SRGBColorSpace } from "three";
import { OrbitControls, Html } from "@react-three/drei";
import Background from "./background/Background";

import Login from "./ui/Login";
import SignUp from "./ui/SignUp";

function Scene(){
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
      >
        <OrbitControls />
      <Html center>
        <Login />
      </Html>

        <Background />
      </Canvas>
    </Suspense>


    </>
  )
}

export default Scene;