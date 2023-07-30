//ThreeElements는 props의 타입이 position three의 Element의 경우 사용하면 될듯!
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./TestObjMesh";

const TestObj = () => {
  //** Metarial 종류 설명 */
  //1. MeshBasicMaterial : 단순 음영(Shader)로 그림 (평면, 와이어프레임)
  //2. MeshDepthMaterial : 음영으로 깊이를 표현 재질(원근을 이용한 깊이 표현 뒤에 있을 수록 어둡다)
  //3. MeshLambertMaterial : 반사광, 하이라이트가 없는 재질(비물리적 기반의 Lambertian 모델을 사용함!)
  //4. MeshNormalMaterial: 백터를 RGB 색상으로 매핑하는 재질이다.
  //5. MeshPhongMaterial : 반사 하이라이트가 있는 광택있는 표면 재질 (반사광과 괕액을 시뮬레이션 가능)
  //6. MeshStandardMatarial:-Shading은 Phong음영 모델을 사용 MeshPhongMaterial과 동일 ( 픽셀마다 음영 계산 )
  //7. MeshPhysicalMaterial : 반사성을 더 조절할 수 있는 MeshStandardMaterial의 확장,

  //여러 광원을 혼합해서 사용하는 것도 보인다(이유를 모르겠음) => 혼합함에 다양한 음영을 만들 수 있다.

  //1.AmbientLight: 빛의 시작점이 없이 물체의 모든 면을 골고루 비춰주는 빛이다. (color, intensity(빛의 강도))
  //2.DirectionalLight: 태양과 같이 무한대의 먼 거리에서 모든 물체에 같은 각도로 비추는 빛이다.
  //3.PointLight: 전구처럼 모든 방향으로 방출하는 빛을 제공한다.(color, intensity, distance:방출 거리, decay:빛이 거리에 따라 어두워지는 정도)
  //4.SpotLight: 한 시점에서 한 방향으로 원뽈형으로 방출하는 빛을 의미한다. THREE.SpotLight(color, intensity, distance, angle:빛이 퍼지는 각도, penumbra:빛의 가장자리 선명도, decay);
  //5.RectAreaLight: 사각 평면에서 균일하게 방출되는 빛이다.매개변수로 width와 height는 각각 광원의 가로/세로 크기 의미 RectAreaLight(color, intensity, width, height)
  return (
    <Canvas className="border-red-100 bg-slate-300">
      {/* pointLight 단순히 물체에만 적용이 되고 배경에는 상관이 없는듯(아마 추가 설정으로 할 수 있을 것이다.) */}
      {/* light를 두 개로 하니까 조금 더 밝아 진다. */}
      <pointLight position={[1, 1, 1]} />
      <ambientLight />
      {/* 아래 Box mesh는 보통 따로 component로 빼는듯 하다.*/}
      {/* 좌표값을 다르게 해야 다른 위치로 보이는 데 공식문서는 왜 그럼? */}
      <Box position={[-1.2, 1, 1]} />
      <Box position={[-1.2, 0, 3]} />
      {/* x,y,z 축을 표시해준다. 조금 더 쉽게 작업할 수 있도록 해준다 */}
      {/* args는 one units으로서 axes의 길이를 지정할 수 있다. */}
      <OrbitControls />
      <gridHelper />
      <axesHelper args={[5]} />
    </Canvas>
  );
};

export default TestObj;
