import Object from "./components/Object";
import TestObj from "./components/TestObject/TestObj";
import PolyHedronCanvas from "./components/PolyHedron/PolyHedronCanvas";
import WireFrame from "./components/WireFrame/WireFrame";
function App() {
  return (
    <main className="bg-transparent	w-full	h-full border-8">
      <Object />
      <TestObj />
      <PolyHedronCanvas />
      <WireFrame />
    </main>
  );
}

export default App;
