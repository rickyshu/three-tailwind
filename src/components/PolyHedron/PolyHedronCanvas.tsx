import { Canvas } from "@react-three/fiber";
import PolyHedron from "./PolyHedron";
import * as THREE from "three";
import { Stats, OrbitControls } from "@react-three/drei";
import Lights from "./Light";

//. leva는 Three.js와 같은 라이브러리에서 주로 사용하는 시각적인 인터페이스(GUI)를 제공하여 오브젝트
// 카메라, 조명 등의 속성값을 쉽게 조작할 수 있도록 돕는 라이브러리이다.
// hook은 시각적 UI의 형태로 간단하게 설정을 변경하고 그 결과 값을 가져올 수 있게 해줍니다
import { useControls } from "leva";
import { useRef } from "react";

function PolyHedronCanvas() {
  return <div>PolyHedronCanvas</div>;
}

export default PolyHedronCanvas;
