import React from "react";
import {Link, IndexLink} from "react-router";

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Start</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">O nas</Link>
             {" | "}
            <Link to="/courses" activeClassName="active">Kursy</Link>
        </nav>
    );
}

export default Header;