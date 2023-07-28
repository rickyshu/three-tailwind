import {
  Color,
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight,
  Vector3, //타입을 적용하려고 했는데 잘 안 되네? 추가적으로 더 찾아봐야 할 것 같다
} from "three";
//. leva는 Three.js와 같은 라이브러리에서 주로 사용하는 시각적인 인터페이스(GUI)를 제공하여 오브젝트
// 카메라, 조명 등의 속성값을 쉽게 조작할 수 있도록 돕는 라이브러리이다.
// hook은 시각적 UI의 형태로 간단하게 설정을 변경하고 그 결과 값을 가져올 수 있게 해줍니다
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

function Lights() {
  const ambientRef = useRef<AmbientLight>(null!);
  const directionalRef = useRef<DirectionalLight>(null!);
  const pointRef = useRef<PointLight>(null!);
  const spotRef = useRef<SpotLight>(null!);

  useControls("Ambient Light", {
    visible: {
      value: false,
      onChange: (v: boolean) => {
        ambientRef.current.visible = v;
      },
    },
    color: {
      value: "white",
      onChange: (v: string) => {
        if (ambientRef.current) {
          ambientRef.current.color = new Color(v);
        }
      },
    },
  });

  useControls("Directional Light", {
    visible: {
      value: true,
      onChange: (v: boolean) => {
        directionalRef.current.visible = v;
      },
    },
    color: {
      value: "white",
      onChange: (v: string) => {
        directionalRef.current.color = new THREE.Color(v);
      },
    },
  });

  useControls("Point Light", {
    visible: {
      value: false,
      onChange: (v: boolean) => {
        pointRef.current.visible = v;
      },
    },
    color: {
      value: "white",
      onChange: (v: string) => {
        pointRef.current.color = new THREE.Color(v);
      },
    },
  });

  useControls("Spot Light", {
    visible: {
      value: false,
      onChange: (v: boolean) => {
        spotRef.current.visible = v;
      },
    },
    color: {
      value: "white",
      onChange: (v: string) => {
        spotRef.current.color = new THREE.Color(v);
      },
    },
  });

  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
      <pointLight ref={pointRef} />
      <spotLight ref={spotRef} />
    </>
  );
}

export default Lights;
