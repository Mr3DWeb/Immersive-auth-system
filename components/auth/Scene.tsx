'use client';

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { WebGPURenderer } from "three/webgpu";
import { ACESFilmicToneMapping,SRGBColorSpace } from "three/webgpu";


function Scene(){
  return(
    <>

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
        <Suspense fallback={null}>
            <color attach="background" args={['#fd0505']} /> 

            
        </Suspense>
    </Canvas>


    </>
  )
}

export default Scene;