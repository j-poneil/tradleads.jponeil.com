import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
    svg {
        // height: 250px;
        // width: 250px;
        // width: 100%;
        // height: 100%;
        border: 2px solid white;
        padding: 10px;
    }
    line {
        // display: block !important;
        // visibility: visible;
    }
`;

export const Logo = () => {
    // fn to switch out the logo image with a svg one, called if there is an error with the img source
    // I kinda want to put a bad source path on purpose in production to force the fallback to this SVG
    // ! The svg is not currently displaying correctly for some reason at one point I got it to show up while messing with the code in chrome, but i have no idea why i can't get it to work again.
    // <rect x="0" y="0" width="100%" height="100%"/>
    // ... If I put the svg inside of this, it shows up... well did once.
    const swapSvgForLogoImg = () => {
        let placeholder = document.getElementById('placeholder');

        let rectEl = document.createElement('rect');
        rectEl.setAttribute('x', 0);
        rectEl.setAttribute('y', 0);
        // rectEl.setAttribute('width', `100%`);
        // rectEl.setAttribute('height', `100%`);
        rectEl.setAttribute('width', 250);
        rectEl.setAttribute('height', 250);
        

        let svgEl = document.createElement('svg');
        // svg.setAttribute('width', 250);
        // viewBox="0 0 100 100"
        svgEl.setAttribute('viewBox', `0 0 250 250`);
        // svgEl.setAttribute('width', `100%`);
        // svgEl.setAttribute('height', `100%`);
        svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // child of svgEl
        let svgTitle = document.createElement('title');
        let titleText = document.createTextNode('My Logo: a slightly tilted hourglass');
        svgTitle.appendChild(titleText);

        // more children of svgEl
        let lineOne = document.createElement('line');
        lineOne.setAttribute('stroke-width', 26);
        lineOne.setAttribute('id', 'svg_1');
        lineOne.setAttribute('y2', 16.5);
        lineOne.setAttribute('x2', 125);
        lineOne.setAttribute('y1', 90.5);
        lineOne.setAttribute('x1', 26);
        lineOne.setAttribute('stroke', '#FFF');
        // lineOne.setAttribute('style', 'display: block; visibility: visible;');

        let lineTwo = document.createElement('line');
        lineTwo.setAttribute('stroke-width', 26);
        lineTwo.setAttribute('id', 'svg_2');
        lineTwo.setAttribute('y2', 20.5);
        lineTwo.setAttribute('x2', 120.5);
        lineTwo.setAttribute('y1', 214.5);
        lineTwo.setAttribute('x1', 50.5);
        lineTwo.setAttribute('stroke', '#FFF');

        let lineThree = document.createElement('line');
        lineThree.setAttribute('stroke-width', 26);
        lineThree.setAttribute('id', 'svg_3');
        lineThree.setAttribute('y2', 172.5);
        lineThree.setAttribute('x2', 244.5);
        lineThree.setAttribute('y1', 205.5);
        lineThree.setAttribute('x1', 60.5);
        lineThree.setAttribute('stroke', '#FFF');

        let lineFour = document.createElement('line');
        lineFour.setAttribute('stroke-width', 26);
        lineFour.setAttribute('id', 'svg_4');
        lineFour.setAttribute('y2', 165.5);
        lineFour.setAttribute('x2', 240.5);
        lineFour.setAttribute('y1', 94.5);
        lineFour.setAttribute('x1', 13.5);
        lineFour.setAttribute('stroke', '#FFF');
        lineFour.setAttribute('transform', 'rotate(3 127 130)');

        // append all children to svgEl
        svgEl.appendChild(svgTitle);
        svgEl.appendChild(lineOne);
        svgEl.appendChild(lineTwo);
        svgEl.appendChild(lineThree);
        svgEl.appendChild(lineFour);

        // append svgEl to rectEl
        // rectEl.appendChild(svgEl);
        

        placeholder.insertAdjacentElement('afterend', svgEl);
        // placeholder.insertAdjacentElement('beforeEnd', rectEl);

        // remove the image, which is now replaced with a logo
        let imgRef = document.getElementById('logo-img');
        imgRef.remove();
    };

    return (
        <StyledLogo>
            <span id='placeholder'/>
            <img
                alt="alt text"
                id="logo-img"
                src='./../someImgThatDoesntExist.jpg'
                onError={
                    (e) => {
                        e.target.onerror = null;
                        // logo img couldn't load, so can swap with an SVG logo:
                        swapSvgForLogoImg();
                        
                        // or alternatively, switch the image path to some default image... which doesn't make sense to do with a logo, where the path shouldn't change anyways...
                        // e.target.src = 'img/path/here';
                    }
                }
            />
        </StyledLogo>
    )
}

/*
From a simple 4 line 250x250 design I made at: https://editor.method.ac/
<svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">

 <g>
  <title>Layer 1</title>
  <line stroke-width="26" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1" y2="16.5" x2="125" y1="90.5" x1="26" opacity="undefined" stroke="#000" fill="none"/>
  <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="20.5" x2="120.5" y1="214.5" x1="50.5" opacity="NaN" stroke-opacity="null" stroke-dasharray="null" stroke-width="26" stroke="#000" fill="none"/>
  <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="172.5" x2="244.5" y1="205.5" x1="60.5" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="26" stroke="#000" fill="none"/>
  <line transform="rotate(3 127.0000000000009,129.9999999999999) " stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="165.5" x2="240.5" y1="94.5" x1="13.5" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="26" stroke="#000" fill="none"/>
 </g>
</svg>
*/