import Card from "./components/Card";
import Category from "./components/Category";

export default function App() {
  return (
    <div className="p-12 h-screen bg-gradient-to-b from-cyan-500 to-cyan-300">
      <div className="h-1/3">
        <div className="pb-4 flex flex-row justify-between">
          <div className="p-2 text-3xl h-16 rounded-md w-40">
            Score: <strong>100</strong>
          </div>
            <p className="p-4 text-5xl font-bold text-center text-neutral-100 ">Animals</p>
          <button className="p-2 h-16 rounded-full text-neutral-200 w-40 bg-cyan-700 hover:bg-cyan-900">
            Finish
          </button>
        </div>
        <div className="grid grid-cols-3 grid-flow-row gap-8">
          <Card text={"test"} categoryId={0}/>
          <Card text={"test"} categoryId={0}/>
          <Card text={"test"} categoryId={0}/>
          <Card text={"test"} categoryId={0}/>
        </div>
      </div>
      <div className="p-2 h-2/3 grid grid-cols-3 grid-flow-row gap-8">
          <Category text={"test2"} id={0}/>
          <Category text={"test2"} id={0}/>
          <Category text={"test2"} id={0}/>
      </div>
    </div>
  )
}