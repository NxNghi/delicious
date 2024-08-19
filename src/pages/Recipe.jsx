import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Recipe() {
    const params = useParams();
    const [details, setDetails] = useState({});
    const fetchDetails = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?&query=${params.name}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };
    useEffect(() => {
        fetchDetails();
    }, [params.name]);
  return (
    <div>{details.title}</div>
  )
}
export default Recipe;