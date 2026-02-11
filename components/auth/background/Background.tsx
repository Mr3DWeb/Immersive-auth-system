import { useMemo } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { Vector2 } from "three";
import { MeshBasicNodeMaterial } from "three/webgpu";
import { uniform } from "three/tsl";
import createBGShader from "./Logic";

extend ({MeshBasicNodeMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meshBasicNodeMaterial: any;
  }
}


function Background(){
  const {viewport} = useThree();

  const uMouse = useMemo (() => uniform(new Vector2(0,0)),[]);

  const shaderNode = useMemo(()=> createBGShader(uMouse) ,[uMouse]);

  useFrame(({pointer})=>{
    uMouse.value.lerp(new Vector2(pointer.x,pointer.y),0.01);
  })

  return (
    <mesh>
      <planeGeometry args={[5, 5, 32, 32]} />
      <meshBasicNodeMaterial colorNode={shaderNode} />
    </mesh>
  )

}

export default Background;