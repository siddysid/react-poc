import React from "react";
import logo from '../../../assets/images/acme.png';

const Logo = ({width, height}) =>  {
    return (
      <>
        <img width={width} height={height} src={logo} alt="logo" />
      </>

    );
};

export default Logo;
