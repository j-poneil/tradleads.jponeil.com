import React from 'react'
import styled from 'styled-components';
import { device } from '../breakpoints/breakpoints';

// What I want
// I want the nav items to the right of the screen, with a decent amount of padding around them.
// I thought I wanted them to have a button look, but I don't like it as much as I first thought.
// I want the color have good contrast to the dark background and get bright white with :hover, :focus
// I want underline for :hover, :focus
// I want no special color for :visited

// :hover is easy, change doesn't have to be much, as the user knows they moused over it
// :focus needs to be more drastic to be very clear at a glance what is focused for keyboard accessibility
// * If later on I try to style focus on buttons I need to be mindful that it works differently with different browsers


export const NavMenuItem = (props) => {
    const StyledLi = styled.li`
        @media ${device.mobile_S} {};
        @media ${device.mobile_L} {};
        @media ${device.tablet} {};
        @media ${device.laptop} {};
        @media ${device.laptop_L} {};
        @media ${device.desktop} {};
        display: inline-block;
        margin: 1rem;
        font-family: Helvetica, sans-serif;
        font-size: 2rem;
        color: #AAA;
        a {
            color: #AAA;
            text-decoration: none;
            :hover {
                text-decoration: underline;
                color: #FFF !important;
            }
            :active {
                color: #FFF;
            }
            :visited {
                color: #AAA;
            }
            :focus {
                outline: 2px solid #FFF;
                /* outline-offset: 1px; */
                text-decoration: none;
                color: #FFF;
            }
            transition: all 0.3s ease-in-out;
        };
    `;

    return (
        <StyledLi>
            { props.children }
        </StyledLi>
    )
}
