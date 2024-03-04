import React from "react";
import Wrapper from "./wrapper";
import Toggle from "./toggle";
import Navigation from "./navigation";

const SideBar = () => {
    return (
        <Wrapper>
            <Toggle />
            <Navigation />
        </Wrapper>
    );
};

export default SideBar;
