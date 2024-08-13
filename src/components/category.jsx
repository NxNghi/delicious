import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks } from "react-icons/gi";
import {NavLink} from "react-router-dom";


function Category() {
    return (
        <div className="flex justify-center items-center w-screen py-20 mx-auto">
            <NavLink to={"/cuisine/Italian"} className="cate__menu">
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={"/cuisine/American"} className="cate__menu">
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={"/cuisine/Thai"} className="cate__menu">
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={"/cuisine/Japanese"} className="cate__menu">
                <GiChopsticks/>
                <h4>Japanese</h4>
            </NavLink>
        </div>
    );
}

export default Category;