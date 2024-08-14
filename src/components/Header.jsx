import React from "react";
import logo from './logo.png';

function Header() {
    const listNav = [
        {
            title: "Home",
            url: "/home"
        },
        {
            title: "Product",
            url: "/product"
        },
        {
            title:"About Us",
            url: "/about"
        },
        {
            title: "Contact",
            url: "/contact"
        }
    ];
    return (
        <div>
            <div>
                <img src={logo} alt="img-logo" />
            </div>
            <nav>
                <ul>
                    {listNav.map((item) => {
                        return(
                            <li><a src={item.url} >{item.title}</a></li>
                        );
                    })}
                </ul>
            </nav>

        </div>
    );
}
export default Header;