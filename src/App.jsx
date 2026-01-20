import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ArniaDigitale } from "./components/Arnia";
import { useState } from "react";

function App() {
  const capitolo = "La rinascita";
  const [salvati,setSalvati]= useState(0);

  function handleClick(){   
    setSalvati(salvati +1);
  }
  return (
    <div className="mx-auto max-w-7xl p-8 text-center">
      <div className="flex justify-center">
        <a
          href="https://vite.dev"
          target="_blank"
          className="p-6 transition hover:drop-shadow-[0_0_2em_#646cffaa]"
        >
          <img src={"obeso.jpg"} alt="Vite logo" className="h-24" />
        </a>
      </div>

      {/*<ArniaDigitale apiario={"Umbertide"} identificativo={1} dataInstallazione={"21/10/2024"} piena={"false"} macAddress={"dyvguergvurgergvrvg"}/>*/}

      <h1 className="my-6 text-4xl font-bold">Vite al limite</h1>
      <h2>{capitolo}</h2>

      <div className="p-8">
        <button onClick = {()=>handleClick()} className="rounded-lg border border-gray-300 px-4 py-2 font-medium transition hover:border-indigo-500 hover:text-indigo-500">
          SALVA LA TUA VITA
          
        </button>
      </div>

      <p className="text-gray-400">
        Persone che abbiamo salvato: {salvati}
      </p>

      <p className="text-gray-400">
        Contatta il dottor Nowzaradan per salvarti la vita FALLO
      </p>

      <div className="flex justify-center">
        <a
          href="https://vite.dev"
          target="_blank"
          className="p-6 transition hover:drop-shadow-[0_0_2em_#646cffaa]"
        >
          <img src={"dottore.jfif"} alt="Vite logo" className="h-24" />
        </a>
      </div>

    </div>

    
  );
}

export default App;
