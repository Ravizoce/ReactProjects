import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ navigation }
) {
    return (
        <>
            {navigation.map((item, index) => (
                // <NavLink to={item.link} className="text-black" key={index}  href={item.link}>{item.name}</NavLink>
                <NavLink to={item.link}
                    className={({isActive}) => {
                       return `text-black ${ isActive  ? "text-blue-600" :"text-black"}`
                    }}
                    key={index} href={item.link}>{item.name}</NavLink>
            ))}
            
        </>
    );
}

export default Nav;

