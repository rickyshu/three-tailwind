import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
function WireFrame() {
  return (
    <Canvas className="bg-black">
      <Box />
      <OrbitControls />
    </Canvas>
  );
}

export default WireFrame;
