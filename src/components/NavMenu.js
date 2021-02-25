import React from 'react';
import styled from 'styled-components';
import { device } from './../breakpoints/breakpoints';

// What am I trying to do with this?
// OK... So... This component is the styled <nav></nav> with styled <ul></ul> inside it, which will be used to wrap the children list elements, which will also be a styled component, <NavMenuItem/>. In my use case I will not need anything else here. This is just a place to do styling instead of in CSS.
// I'm thinking of the overall positioning

export const NavMenu = (props) => {
    const StyledNav = styled.nav`
        /* temp border*/
        border: 2px solid white; 
    `;

    const StyledUl = styled.ul`
        /* temp border*/
        border: 2px solid pink;
    `;

    return (
        <StyledNav>
            <StyledUl>
                { props.children }
            </StyledUl>
        </StyledNav>
    )
}
