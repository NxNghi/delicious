import { useEffect, useState } from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);
    
    const getVeggie = async () => {
        const check = localStorage.getItem("veggie");
        if(check){
            setVeggie(JSON.parse(check));
        }else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?&number=9&apiKey=${process.env.REACT_APP_API_KEY}`);
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    };    
    return(
        <div className="my-16 mx-0">
            <h3 className="font-bold text-sky-900 text-4xl p-5 ">Our Veggie Pick</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
                {veggie.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <div className="min-h-96 rounded-3xl overflow-hidden relative">
                                <Link to={'/recipe/' + recipe.id}>
                                    <p className="absolute z-10 w-full h-1/2 flex justify-center items-center left-1/2 bottom-0 -translate-x-1/2 text-xl text-center text-medium text-white translate-y-0 ">{recipe.title}</p>
                                    <img className="rounded-3xl absolute w-full h-full object-cover" src={recipe.image} alt={recipe.title} />
                                    <div className="z-3 absolute w-full h-full bg-gradient-to-t from-black "></div>
                                </Link>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}
export default Veggie;