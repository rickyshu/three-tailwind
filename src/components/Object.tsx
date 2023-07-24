import { Canvas } from "@react-three/fiber";
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
        {/* meshMetarial에 따라서 원하는 색이 안 나올 수도 있음 아마 light와 관련된듯! */}
        <meshPhysicalMaterial color={"blue"} />
      </mesh>
      <OrbitControls />
      <Stars />
    </Canvas>
  );
};

export default Object;
