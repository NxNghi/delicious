import React from "react";
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function Header() {
    const listNav = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },
        {
            id: 2,
            title: "Product",
            url: "/product"
        },
        {
            id: 3,
            title:"About Us",
            url: "/about"
        },
        {
            id: 4,
            title: "Contact",
            url: "/contact"
        }
    ];
    const logo = '../logo.png';
    
    return (
        <div className="flex justify-between items-center w-full h-16 px-8 bg-gray-100/50 sticky z-10 top-0 mb-8 shadow-xl">
            <div>
                <Link to={"/"} className='flex text-cyan-50 items-center justify-center'>
                    <GiKnifeFork className='w-10 h-10'/>
                    <h3 className='ml-4 font-serif text-inherit'>Delicious</h3>
                </Link>
            </div>
            <div className="flex">
                <nav>
                    <ul className="flex justify-center items-center gap-8">
                        {listNav.map((item) => {
                            return(
                                <li key={item.id} className="cursor-pointer"><a src={item.url} >{item.title}</a></li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="ml-32">
                    <h4>
                        username
                    </h4>
                </div>
            </div>
        </div> 
    );
}
export default Header;