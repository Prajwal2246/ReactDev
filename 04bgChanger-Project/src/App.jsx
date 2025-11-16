import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl text-black ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-2 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red", borderRadius: "12px" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-2 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green", borderRadius: "12px" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-2 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue", borderRadius: "12px" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-2 py-1 text-black rounded-full  shadow-sm"
            style={{ backgroundColor: "yellow", borderRadius: "12px" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="px-2 py-1 rounded-[12px] bg-purple-500 text-white shadow-sm"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("pink")}
            className="px-2 py-1 rounded-[12px] bg-pink-500 text-black shadow-sm"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("indigo")}
            className="px-2 py-1 rounded-[12px] bg-indigo-500 text-white shadow-sm"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
            onClick={() => setColor("gray")}
            className="px-2 py-1 rounded-[12px] bg-gray-500 text-white shadow-sm"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("white")}
            className="px-2 py-1 rounded-[12px] bg-gray-500 text-black shadow-sm"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
