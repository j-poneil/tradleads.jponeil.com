import React from 'react';
import styled from 'styled-components';
import { device } from './../breakpoints/breakpoints';

// What am I trying to do with this?
// OK... So... This component is the styled <nav></nav> with styled <ul></ul> inside it, which will be used to wrap the children list elements, which will also be a styled component, <NavMenuItem/>. In my use case I will not need anything else here. This is just a place to do styling instead of in CSS.
// I'm thinking of the overall positioning
// TODO - normal top nav on large devices, hamburger / expandable menu on smaller

export const NavMenu = (props) => {
    
    const StyledNav = styled.nav`
        
    `;

    const StyledUl = styled.ul`
        /* ------ Devices which get the compact expand / collapse (ie hamburger) nav ------ */
        @media ${device.mobile_S} {
            .normal-nav { display: none; };
        };
        @media ${device.mobile_L} {
            .normal-nav { display: none; };
        };

        /* ------ Devices which get the normal nav ------ */
        @media ${device.tablet} {
            .mobile-nav { display: none; };
        };
        @media ${device.laptop} {
            .mobile-nav { display: none; };
        };
        @media ${device.laptop_L} {
            .mobile-nav { display: none; };
        };
        @media ${device.desktop} {
            .mobile-nav { display: none; };
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

    let mobileNavOpen = false;

    const handleClick = (e) => {
        e.preventDefault();
        mobileNavOpen = !mobileNavOpen;
    };

    return (
        <StyledNav>
            <StyledUl className='mobile-nav' mobileNav={ mobileNavOpen } >
                { props.children }
            </StyledUl>
            <div id='icon' className='mobile-nav' onClick={ () => handleClick }>#</div>

            <StyledUl className='normal-nav'>
                { props.children }
            </StyledUl>
        </StyledNav>
    )
}
