import React from "react";

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
            <div className="rounded-full bg-sky-500 truncate w-14 h-14">
                <img src={logo} alt="img-logo" />
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