/* eslint-disable */
// @ts-nocheck

import { abs, color, cos, distance, float, Fn, mix, sin, smoothstep, time, uniform, uv, vec3 } from 'three/tsl';



const drawLine = Fn(([uvNode, pos, width, intensity])=>{
  const distance = abs(uvNode.y.sub(pos));
  const glow = width.div(distance).mul(intensity);
  return smoothstep(0.0, 1.0, glow);
})


const createBGShader = (uMouse, uStatus)=>{
  return Fn(()=>{
    const uvNode = uv();

    const finalColor = vec3(0.0, 0.0, 0.0).toVar();

    const neonColor = vec3(0.3, 0.4, 1.0);

    const timeVar = time.mul(0.5);

    //Wave 1
    const wave1 = sin(uvNode.x.mul(3).add(timeVar)).mul(0.1).add(0.5);
    const line1 = drawLine(uvNode, wave1, float(0.05), float(0.05));

    // Wave 2
    const wave2 = cos(uvNode.x.mul(5).sub(timeVar.mul(1.5))).mul(0.15).add(0.3);
    const line2 = drawLine(uvNode, wave2, float(0.01), float(0.03));

    // Wave 3
    const wave3 = sin(uvNode.x.mul(4).add(timeVar.mul(0.8))).mul(0.08).add(0.7);
    const line3 = drawLine(uvNode, wave3, float(0.03), float(0.04));

    const totalLight = line1.add(line2).add(line3);

    finalColor.assign(neonColor.mul(totalLight));
    return finalColor;
  })();
}

export default createBGShader;