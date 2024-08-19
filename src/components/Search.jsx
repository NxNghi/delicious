import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom";


function Search() {
    const [input,setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+ input);
    };
    return (
        <form onSubmit={submitHandler} >
            <div className="flex w-1/2 h-10 rounded-lg mx-auto my-0 border-2 border-solid border-black bg-slate-800 items-center overflow-hidden">
                <FaSearch className="text-slate-100 mx-2"/>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter keyword ..." className="px-2 w-full text-slate-100 h-full border-none bg-slate-800"/>
            </div>
        </form>
    );
}
export default Search;