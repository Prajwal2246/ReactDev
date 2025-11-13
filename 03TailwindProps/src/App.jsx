import "./App.css";
import Card from "./components/Card";

function App() {
  const zoro = {
    name: "Zoro",
    info: "Zoro originally used two swords instead of three,[4] and was originally planned to be part of Buggy the Clown's pirate crew and would have been recruited by Luffy away from Buggy. Zoro's surname, Roronoa, is based on the Japanese pronunciation of French pirate François l'Olonnais's name. In several Western adaptations, his name was spelled as Zolo.",
  };

  return (
    <>
      <h1 className="bg-orange-500 text-brown p-3 rounded-xl mb-3 ">Luffy Pirates</h1>
      <div className="flex flex-wrap">
        <Card name={zoro.name} info={zoro.info} />
        <Card name={zoro.name} info={zoro.info} />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
