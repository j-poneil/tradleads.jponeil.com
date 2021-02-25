import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
    const StyledLogo = styled.div`
        line {
            display: block !important;
        }
    `;

    // fn to switch out the logo image with a svg one, called if there is an error with the img source
    // I kinda want to put a bad source path on purpose in production to force the fallback to this SVG
    // ! The svg is not currently displaying correctly for some reason at one point I got it to show up while messing with the code in chrome, but i have no idea why i can't get it to work again.
    const swapSvgForLogoImg = () => {
        let placeholder = document.getElementById('placeholder');

        let svg = document.createElement('svg');
        svg.setAttribute('width', 250);
        svg.setAttribute('height', 250);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // child of svg
        // ! but why? why not have everything a direct child of svg???
        let g = document.createElement('g');
        svg.appendChild(g);

        // child of g
        let svgTitle = document.createElement('title');
        let titleText = document.createTextNode('My Logo: a slightly tilted hourglass');
        svgTitle.appendChild(titleText);

        // more children of g
        let lineOne = document.createElement('line');
        lineOne.setAttribute('stroke-width', 26);
        lineOne.setAttribute('id', 'svg_1');
        lineOne.setAttribute('y2', 16.5);
        lineOne.setAttribute('x2', 125);
        lineOne.setAttribute('y1', 90.5);
        lineOne.setAttribute('x1', 26);
        lineOne.setAttribute('stroke', '#FFF');
        lineOne.setAttribute('style', 'display: block; visibility: visible;');

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

        // append all children to g
        //...
        g.appendChild(svgTitle);
        g.appendChild(lineOne);
        g.appendChild(lineTwo);
        g.appendChild(lineThree);
        g.appendChild(lineFour);

        placeholder.insertAdjacentElement('afterend', svg);

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