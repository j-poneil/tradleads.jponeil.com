// inspiration from: https://jsramblings.com/how-to-use-media-queries-with-styled-components/
// the breakpoints im targetting
const size = {
    mobile_S: '320px',
    mobile_L: '425px',
    tablet: '768px',
    laptop: '1920px',
    laptop_L: '1440px',
    desktop: '2560px'
};

export const device = {
    mobile_S: `(min-width: ${size.mobile_S})`,
    mobile_L: `(min-width: ${size.mobile_L})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptop_L: `(min-width: ${size.laptop_L})`,
    desktop: `(min-width: ${size.desktop})`
};

// to use in components
// import { device } from '..whereever../breakpoints'
// in the css-in-js backticks do, for instance
// @media ${device.desktop} {
//   max-width: 1400px
// }

// for easy copy/paste:
/*
@media ${device.mobile_S} {};
@media ${device.mobile_L} {};
@media ${device.tablet} {};
@media ${device.laptop} {};
@media ${device.laptop_L} {};
@media ${device.desktop} {};
*/
