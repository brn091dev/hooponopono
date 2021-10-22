import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(1)
  const msgs = ['Lo siento', 'Perdóname', 'Gracias', 'Te amo']
  const [msgToShow, setMsgToShow] = useState('')
  const [state, setState] = useState(false)

  useEffect(() => {
    console.log(state);
    if (state) {
      for (let idx = 1; idx <= 180; idx++) {
        setTimeout(() => {
          setNumber(idx)
          setMsgToShow('')
          for (const [i, msg] of msgs.entries()) {
            setTimeout(() => {
              setMsgToShow(msg)
            }, (i + 1) * 1000);
          }
        }, idx * 5000);
      }
    }
  }, [state])

  return (
    // <section className="App">
    <section class="w-screen h-screen p-16 flex flex-col justify-between items-center bg-primary">
      <div class="divide-y divide-gray-400">
        <p class="text-6xl font-black text-red-500 mb-5 text-center">HO'OPONOPONO</p>
        <h1 class="text-4xl pt-10 text-indigo-100 text-center">{number}</h1>
      </div>
      <div className="h-40">
        <p class="text-5xl font-black  text-indigo-100">{msgToShow}</p>
      </div>
      <svg class="animate-bounce w-6 h-6 text-white mt-4 mb-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
      <button
        class="p-2 pl-5 pr-5 bg-transparent border-2 border-red-500 text-red-500 text-lg rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300"
        onClick={() => {
          setState(!state)
        }}
      >
        Iniciar
      </button>
    </section>
  );
}

export default App;
