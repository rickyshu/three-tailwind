import { Canvas } from "@react-three/fiber";

// useRef를 사용하지 않고 rotation-x={1}을 사용해보기
const TestOb = () => {
  return (
    <Canvas>
      <mesh rotation-x={1}></mesh>
    </Canvas>
  );
};

export default TestOb;
