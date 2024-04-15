function ButtonGeneral({text, click}) {
    return(
        <button onClick={click} className="w-full h-8  text-white rounded-lg bg-blueButton shadow-xl font-semibold text-lg hover:bg-white hover:text-blue-500">
            {text}
        </button>
    )
}
export default ButtonGeneral;