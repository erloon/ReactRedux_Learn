import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Start</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">O nas</Link>
             {" | "}
            <Link to="/courses" activeClassName="active">Kursy</Link>
             {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;