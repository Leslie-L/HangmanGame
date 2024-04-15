import { useNavigate } from "react-router-dom"


function ButtonPlay() {
    const navigate = useNavigate();

    const handlerNavigation =()=>{
        navigate('/category')
    }
    return(
        <button 
            onClick={handlerNavigation}
            className="h-24 w-24 my-5 rounded-full border-solid border-4 shadow-xl border-gray-800 bg-pink-600 text-white grid place-content-center hover:bg-white hover:text-pink-600"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" stroke="currentColor"  d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z" />
            </svg>
        </button>
    )
}
export default ButtonPlay