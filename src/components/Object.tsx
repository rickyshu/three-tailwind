import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Stars, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

//한 컴포넌트 내에서 canvas보다
// antialias=true

const Object = () => {
  const mesh = useRef<Mesh>(null!);

  // useFrame((state, delta) => (mesh.current.rotation.x += delta));

  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.1} />
      <mesh ref={mesh}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <OrbitControls />
      <Stars />
    </Canvas>
  );
};

export default Object;
