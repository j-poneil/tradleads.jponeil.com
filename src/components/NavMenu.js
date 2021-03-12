import React from 'react';
import styled from 'styled-components';
import { device } from './../breakpoints/breakpoints';

// What am I trying to do with this?
// OK... So... This component is the styled <nav></nav> with styled <ul></ul> inside it, which will be used to wrap the children list elements, which will also be a styled component, <NavMenuItem/>. In my use case I will not need anything else here. This is just a place to do styling instead of in CSS.
// I'm thinking of the overall positioning
// TODO - normal top nav on large devices, hamburger / expandable menu on smaller
// TODO - use mobileNavOpen variable inside NavMenuItem
// ! Something about the breakpoints is messing things up I think. 

const StyledNav = styled.nav``;

const StyledUl = styled.ul`
    /* ------ Devices which get the compact expand / collapse (ie hamburger) nav ------ */
    @media ${device.mobile_S} {
        .normal-nav { display: none; };
        background-color: white; // ! temp testing
    };
    @media ${device.mobile_L} {
        .normal-nav { display: none; };
        background-color: blue; // ! temp testing
    };

    /* ------ Devices which get the normal nav ------ */
    @media ${device.tablet} {
        .mobile-nav { display: none; };
        background-color: cyan; // ! temp testing
    };
    @media ${device.laptop} {
        .mobile-nav { display: none; };
        background-color: yellow; //! temp testing
    };
    @media ${device.laptop_L} {
        .mobile-nav { display: none; };
        background-color: pink; //! temp testing
    };
    @media ${device.desktop} {
        .mobile-nav { display: none; };
        background-color: brown; //! temp testing
    };

    /* ------- -------- */
    .mobile-nav {};
    .normal-nav {};
    #icon {
        display: inline-block;
        color: black;
        background: white;
    };
    #icon:hover {
        color: white;
        background: black;
    };
`;

export const NavMenu = (props) => {
    let mobileNavOpen = false;

    const handleClick = (e) => {
        e.preventDefault();
        mobileNavOpen = !mobileNavOpen;
    };

    return (
        <StyledNav>
            <div className='mobile-nav'>
                <StyledUl className='' mobileNav={ mobileNavOpen } >
                    { props.children }
                </StyledUl>
                <div id='icon' className='' onClick={ () => handleClick }>#</div>
            </div>

            <StyledUl className='normal-nav'>
                { props.children }
            </StyledUl>
        </StyledNav>
    )
}
