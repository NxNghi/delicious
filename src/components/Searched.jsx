import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Searched() {
    const [searchRecipes,setSearchedRecipes] = useState([]);
    const params = useParams();
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?&query=${name}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
    return (
        <div className="grid grid-cols-4 gap-2">
            {searchRecipes.map((item) => {
                return (
                    <div key={item.id} className="">
                        <img src={item.image} alt={item.title} className="w-full rounded-2xl"/>
                        <h4 className="mx-auto text-center my-0">{item.title}</h4>
                    </div>
                );
            })}
        </div>
    );
}
export default Searched;