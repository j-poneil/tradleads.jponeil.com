import React, { useState, useEffect } from 'react';

/*
* The problem I was having, well, the main problem... is that the data I get back from the GET request to the PHP to the SQL server... ends up on this.responseText... AS A STRING. All I needed to do was wrap it with JSON.parse()
... .map wasn't working on it, because it was a string!
* Another problem was with useEffect I set whichTable and listOfLeads as dependencies...
... when it should re-render only when whichTable changes

// TODO - some change on hover on table rows
TODO - CSS - Make it more obvious that you can click on some of the table headers to change the sorting method
    * Hand pointer
    * OUT THERE - Animate the up/down arrow thing, or maybe have it change color or grow in size w/o affecting the layout
TODO - CSS - Make the table caption more prominant
    ... temp fix make it a H3
TODO - SQL/PHP - Fully implement the sorting on things it makes sense to do so on (new SQL queries, associated switch statements)
// TODO - Make links open a new tab
TODO - CSS/JSX - Make table header stay at top of screen while the rest of the table scrolls down
// TODO - Date nowrap
TODO - JSX - Don't show diff_sort
TODO - JSX - remove on_mp, change link th to MP ?... if it has a link its on MP, period
TODO - Google Sheets/SQL - update list on SQL server so more data to work with...
    ! Out there - Don't use SQL server side at all, just use Google Sheets... apparently this is a thing... It would make sense for my use case... but also removes the PHP and SQL queries... so can't show those technologies as part of the project... but I guess that might be fine too.

! Out there
TODO - CSS/JSX - Click on a table row to get a pop up modal and darken/blur the background, All text larger and more readable, more digestable formatting, maybe even some pictures if they exist. If I do something like this, should probably have a "has pics" symbol or something in the table



*/

// import { testJSON }  from './JSONtableExample';

export const List = () => {
    const [ listOfLeads, setListOfLeads ] = useState('');
    const [ whichTable, setWhichTable ] = useState('default');
    const [ caption, setCaption ] = useState('List of my trad leads sorted by oldest first');

    useEffect(() => {
        //effect

        //  This works for getting SQL Query result via PHP, returning as JSON, and updating DOM
        let oReq = new XMLHttpRequest(); //New request object
		oReq.onload = function(){
            //This is where you handle what to do with the response. The actual data is found on this.responseText
            //this.responseText will be json_encode($result)
            // setListOfLeads(this.responseText);
            // console.log(typeof this.responseText);
            // typeof string !!! A-Ha! lets try to use JSON.parse() on it...
            // console.log(typeof JSON.parse(this.responseText));
            setListOfLeads(JSON.parse(this.responseText));
        };
        // true... true here makes it so that it doesn't block the rest of the execution
        // oReq.open("get", "../../getJSONtable.php?q=" + whichTable, true);
        oReq.open("get", "getJSONtable.php?q=" + whichTable, true);
        oReq.send();


        // using fetch
        // fetch('../../getJSONtable.php?=' + whichTable)
        //     .then(response => {
        //         // call successful
        //         if(response.ok){
        //             console.log(response);
        //             console.log(response.json);
        //             setListOfLeads(response.json());
        //         }
        //         else{
        //             // return Promise.reject(response);
        //             console.log("failure to get an ok response from getJSONtable.php operation");
        //         }
        //     })
        //     .then(data => {
        //         // this is the data from our response
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.warn("something went wrong", err);
        //     });


        return () => {
            //cleanup
        }
    }, [ whichTable ]);


    const upArrow = '\u2191';
    const downArrow = '\u2193';
    const revArrow = '\u21C5';

    const sortTable = (howToSort) => {
        switch(howToSort){
            case 'default':
                setCaption('List of my trad leads sorted by oldest first');
                setWhichTable('default');
                break;
            case 'default_rev':
                setCaption('List of my trad leads sorted by newest first');
                setWhichTable('default_rev');
                break;
            case 'pitches':
                setCaption('List of my trad leads sorted by highest number of pitchs first');
                setWhichTable('pitches');
                break;
            case 'pitches_rev':
                setCaption('List of my trad leads sorted by lowest number of pitches first');
                setWhichTable('pitches_rev');
                break;
            case 'area':
                setCaption('List of my trad leads sorted by area, alphabetical');
                setWhichTable('area');
                break;
            case 'area_rev':
                // no reason to have this, really
                setCaption('List of my trad leads sorted by area, reverse alphabetical');
                setWhichTable('area_rev');
                break;
            case 'difficulty':
                setCaption('List of my trad leads sorted by YDS difficulty, hardest first');
                setWhichTable('difficulty');
                break;
            case 'difficulty_rev':
                setCaption('List of my trad leads sorted by YDS difficulty, easiest first');
                setWhichTable('difficulty_rev');
                break;
            case 'other':
                setCaption('List of my trad leads... sorted some other way');
                setWhichTable('other');
                break;
            case 'name':
                // not implemented yet, reverse alphabetical shouldn't matter here either
                setCaption('List of my trad leads sorted by name, alphabetical');
                setWhichTable('name');
                break;
            case 'grade':
                // not implemented yet
                setCaption('List of my trad leads sorted by grade (commitment rating) highest commitment first');
                setWhichTable('grade');
                break;
            case 'grade_rev':
                // not implemented yet
                setCaption('List of my trad leads sorted by grade, reversed. Lowest commitment level first');
                setWhichTable('grade_rev');
                break;
            default:
                setCaption('List of my trad leads sorted by oldest first');
                setWhichTable('default');
        }
    };

    const completeTable = (
        <table>
            <caption><h3>{ caption }</h3></caption>
            <thead>
                <tr>
                    {/* <th scope='col' >#</th>
                    <th scope='col' >date</th>
                    <th scope='col' >name</th>
                    <th scope='col' >difficulty</th>
                    <th scope='col' >diff_sort</th>
                    <th scope='col' >pitches</th>
                    <th scope='col' >grade</th>
                    <th scope='col' >area</th>
                    <th scope='col' >rock</th>
                    <th scope='col' >partner</th>
                    <th scope='col' >on_mp</th>
                    <th scope='col' >link</th>
                    <th scope='col' >notes</th> */}

                    <th scope='col' onClick={() => sortTable( whichTable === 'default' ? 'default_rev' : 'default' )} >{'# ' + revArrow}</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'default' ? 'default_rev' : 'default' )} >{'date ' + revArrow}</th>
                    <th scope='col' onClick={() => sortTable('name')} >{'name ' + revArrow}</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'difficulty' ? 'difficulty_rev' : 'difficulty' )} >{'difficulty ' + revArrow}</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'difficulty' ? 'difficulty_rev' : 'difficulty' )} >{'diff_sort ' + revArrow}</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'pitches' ? 'pitches_rev' : 'pitches' )} >{'pitches ' + revArrow}</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'grade' ? 'grade_rev' : 'grade' )} >{'grade ' + revArrow}</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'area' ? 'area_rev' : 'area' )} >{'area ' + revArrow}</th>
                    <th scope='col' >rock</th>
                    <th scope='col' >partner</th>
                    <th scope='col' >on_mp</th>
                    <th scope='col' >link</th>
                    <th scope='col' >notes</th>
                </tr>
            </thead>
            <tbody>
                {
                    // ! Swap testJSON for listOfLeads before deploy
                    // listOfLeads.map( (route, index) => {
                    //     return (
                    //         <tr key={ route['#'] } >
                    //             <th scope='row'>{ route['#'] }</th>
                    //             <td>{ route['date'] }</td>
                    //             <td>{ route['name'] }</td>
                    //             <td>{ route['difficulty'] }</td>
                    //             <td>{ route['diff_sort'] }</td>
                    //             <td>{ route['pitches'] }</td>
                    //             <td>{ route['grade'] }</td>
                    //             <td>{ route['area'] }</td>
                    //             <td>{ route['rock'] }</td>
                    //             <td>{ route['partner'] }</td>
                    //             <td>{ route['on_mp'] }</td>
                    //             <td><a href={ route['link'] }>Link</a></td>
                    //             <td>{ route['notes'] }</td>
                    //         </tr>
                    //     )
                    // })
                }
                {/* { listOfLeads !== ''
                    ? listOfLeads
                    : 'loading...'} */}
                {/* target='_blank' w/o rel='noreferrer' is a security risk, so don't do it */}
                {
                    listOfLeads !== ''
                        ? listOfLeads.map( (route, index) => (
                            <tr key={ route['#'] } >
                                <th scope='row'>{ route['#'] }</th>
                                <td style={{whiteSpace: 'nowrap'}}>{ route['date'] }</td>
                                <td style={{whiteSpace: 'nowrap'}}>{ route['name'] }</td>
                                <td>{ route['difficulty'] }</td>
                                <td>{ route['diff_sort'] }</td>
                                <td>{ route['pitches'] }</td>
                                <td>{ route['grade'] }</td>
                                <td>{ route['area'] }</td>
                                <td>{ route['rock'] }</td>
                                <td>{ route['partner'] }</td>
                                <td>{ route['on_mp'] }</td>
                                <td><a target="_blank" rel="noreferrer" href={ route['link'] }>Link</a></td>
                                <td>{ route['notes'] }</td>
                            </tr>
                        ))
                        : 'loading...'
                }
            </tbody>
        </table>
    );



    return (
        <div>
            { completeTable }
        </div>
    )
}
