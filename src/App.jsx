import Card from "./components/Card";
import array from "./assets/data";
import { useState } from "react";

function random(num) {
  return Math.floor(Math.random() * num);
}

export default function App() {
  const [number, setNumber] = useState(0);

  const [flip, setFlip] = useState(false);


  function handleNumber() {
    setNumber(random(9));
    setFlip(false)
  }

  function changeFLip(){
    setFlip(!flip)
  }
  return (
    <div className="h-screen flex flex-col" style={{backgroundImage: `url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/nigeria-flag-nomonkey-b.jpg)`,

    }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center justify-center gap-3 text-white">
        <h1 className="text-xl">Get to know Nigeria</h1>
        <p className="text-lg">Learn about the giant of Africa in a fun and interactive manner</p>
        <p>Number of Cards: 10</p>
      </div>
      <br />
      <br />
      <div className="flex justify-center text-3xl">
        <Card
          content = {flip ?array[number]["answer"]: array[number]["question"]}
          changeCard = {changeFLip}
          handleClick={changeFLip}
          color = {array[number]["color"]}
        />
      </div>
      <br />
      <br />
      <div className="flex justify-center"> 
        <button className="w-20 h-10 px-4 bg-orange-600 rounded-md" onClick={handleNumber}>Next</button>
      </div>
    </div>
  );
}
