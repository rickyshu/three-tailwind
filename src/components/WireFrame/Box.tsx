function Box() {
  return (
    <mesh>
      <boxGeometry />
      {/* wireframe: display the wireframe of the object */}
      <meshBasicMaterial color={0x00ff00} wireframe />{" "}
    </mesh>
  );
}

export default Box;
