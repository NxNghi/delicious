import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className='flex justify-around items-start p-8'>
      <div>
        <h2 className='text-3xl my-4'>{details.title}</h2>
        <img src={details.image} alt={details.title}/>
      </div>
      <div className='w-1/2'>
        <div>
          <button onClick={() => setActiveTab('instructions')} id={activeTab === 'instructions' ? 'active' : ''} className='mx-2 bg-slate-400 active:bg-slate-800 focus:bg-slate-800 p-4'>intructions</button>
          <button onClick={() => setActiveTab('ingredients')} id={activeTab === 'ingredients' ? 'active' : ''} className='mx-2 bg-slate-400 active:bg-slate-800 focus:bg-slate-800 p-4'>ingredients</button>
        </div>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Recipe;