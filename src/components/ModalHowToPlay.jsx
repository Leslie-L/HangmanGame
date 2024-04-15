function ModalHowToPlay({click}) {
    const handlerClick=(e)=>{
        e.stopPropagation();
        click()
    }
    return(
        <section onClick={handlerClick} className="fixed w-full h-full top-0 left-0 bg-opacity-{#2d2b57c9} flex justify-center items-center">
            <div className=" max-w-screen-md h-[570px] md:w-[400px] md:p-5 rounded-lg p-2 bg-blueModal flex flex-col gap-y-2 text-white">
            <div className="w-full flex justify-end">
                <button onClick={handlerClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                        <path fill="white" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" />
                    </svg>
                </button>
            </div>
            <h2 className="font-bold text-xl text-center text-white">How to Play</h2>

            <ul className="list-disc px-5">
                <li>The game selects a random word that the player must guess.</li>
                <li>
                The player attempts to guess the word by typing letters one by
                one.
                </li>
                <li>
                Each correct letter reveals all instances of that letter in the
                hidden word.
                </li>
                <li>
                Each incorrect letter reduces the number of remaining attempts.
                </li>
            </ul>
            <h3 className="font-bold text-lg">Number of Attempts:</h3>
            <p>Players have a total of 5 attempts to guess the word correctly.</p>
            <h3 className="font-bold text-lg">End of the Game:</h3>
            <ul className="list-disc px-5">
                <li>
                The game ends when the player guesses the word correctly (victory)
                </li>
                <li>
                The game also ends if the player exhausts all available attempts
                without guessing the word (defeat)
                </li>
            </ul>
            </div>
        </section>
        
    )
}
export default ModalHowToPlay;