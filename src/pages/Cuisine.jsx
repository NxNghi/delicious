import React, { useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?&cuisine=${name}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    useEffect(
        () => {
            getCuisine(params.type);
            console.log(params.type);
        },[params.type]
    );
    return <div className="grid grid-cols-4 gap-2">
        {cuisine.map((item) => {
            return (
                <div key={item.id} className="">
                    <Link to={'/recipe/'+ item.id}>
                    <img src={item.image} alt={item.title} className="w-full rounded-2xl"/>
                    <h4 className="mx-auto text-center my-0">{item.title}</h4>
                    </Link>
                </div>
            )
        })}
    </div>
}
export default Cuisine;