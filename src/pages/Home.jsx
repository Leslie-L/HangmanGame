import { useState } from "react";
import ButtonGeneral from "../components/ButtonGeneral";
import ButtonPlay from "../components/ButtonPlay";
import ModalHowToPlay from "../components/ModalHowToPlay";

function Home() {
    const [modal,setModal] = useState(false)
    const handlerModal = ()=>{
        setModal(modal=>!modal)
    }
  return (
    <section className="w-72 h-80 rounded-lg px-3 py-1 bg-blueModal">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl text-center text-white">
          The Hangman Game
        </h1>
        <ButtonPlay />
        <ButtonGeneral text={"How to play?"}  click={handlerModal}/>
      </div>
        {
            modal &&
            <ModalHowToPlay click={handlerModal}/>
        }
        
    </section>
  );
}
export default Home;
