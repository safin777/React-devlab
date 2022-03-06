import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="font-bold text-lg bg-black text-center fixed border-gray border-b-2 text-white w-full ">
            <ul>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/" className="pl-6 pr-8">
                        Home
                    </Link>
                </li>

                <li className="inline-block pt-4 pb-4">
                    <Link to="about" className="pl-6 pr-8">
                        About
                    </Link>
                </li>

                <li className="inline-block pt-4 pb-4">
                    <Link to="article" className="pl-6 pr-8">
                        Article
                    </Link>
                </li>

                <li className="inline-block pt-4 pb-4">
                    <Link to="article_list" className="pl-6 pr-8">
                        Article List
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
