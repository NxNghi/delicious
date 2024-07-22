import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);
    
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?&number=9&apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        setPopular(data.recipes);
    };    
    return(
        <div className="my-16 mx-0">
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
                {popular.map((recipe) => {
                    return(
                        <SplideSlide>
                            <div className="min-h-96 rounded-3xl overflow-hidden relative">
                                <p className="absolute left-1/2 bottom-0 translate-x-(-50%) translate-y-0">{recipe.title}</p>
                                <img className="rounded-3xl absolute w-full h-auto object-cover" src={recipe.image} alt={recipe.title} />
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
};
export default Popular;