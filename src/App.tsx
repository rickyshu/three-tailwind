import Object from "./components/Object";
import TestObj from "./components/TestObject/TestObj";
import PolyHedronCanvas from "./components/PolyHedron/PolyHedronCanvas";
function App() {
  return (
    <main className="bg-transparent	w-full	h-full border-8">
      <Object />
      <TestObj />
      <PolyHedronCanvas/>
    </main>
  );
}

export default App;
