import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

import ButtonGeneral from "../components/ButtonGeneral";


function Category() {
    const [categories, setCategories] = useState([])
    const navigation = useNavigate()
    useEffect(()=>{
        
         fetch('./lib/categories.json')
            .then(data=>data.json())
            .then(res=>setCategories(res))
        
    },[])
    const handleCategory =(name)=>{
        const newRoute = `/game/${name}`;
        navigation(newRoute)
    }
    const handleBack =()=>{
        
        navigation('/')
    }
    
  return (
    <section className="w-72 h-96 rounded-lg px-3 py-1 bg-blueModal">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between">
            <button onClick={handleBack} className="h-8 w-8 rounded-full bg-rose-500 border-gray-800 border-2 shadow-lg  text-white grid place-content-center hover:bg-white hover:text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 9.059V6.5a1.001 1.001 0 0 0-1.707-.708L4 12l6.293 6.207a.997.997 0 0 0 1.414 0A.999.999 0 0 0 12 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941" />
                </svg>
            </button>
            <h1 className="font-bold text-xl text-center text-white">
                Pick a Category
            </h1>
        </div>
            {
                categories.map(({id,category})=>{
                    return <ButtonGeneral key={id} text={category} click={()=>{handleCategory(id)}}/>
                })
            }
      </div>
    </section>
  );
}
export default Category;
