import React, { useState, useEffect } from 'react';
import '../styles/list.css'

/*
! Won't see any of the SQL data in live reload dev env because it doesn't run any of the PHP code...
... or so I thought?

! - Path to the php must be the same... hmm... I'm kinda assuming that the build process fixes it... but does it actually?

TODO - Table sorting...
    Previously how I was just querying the SQL DB and returning the results is by far the least code to write

    Sorting with JS is complicated. Seems like may cause a ton of re-renders if I'm not careful
        https://www.w3schools.com/howto/howto_js_sort_table.asp
TODO - Cursor change / color on mouse over on sortable table headers
TODO - Up/Down arrow symbol on sortable table headers

! Test mode
import testJSON
swap listOfLeads for testJSON for what to map over
! Real mode
comment out -- import testJSON from JSONtableExample
swamp testJSON for listOfLeads for what to map over
! BOTH -- look at the actual get request, and setListOfLeads stuff



TODO -- I think i might know how to tackle the issue with the PHP
'whatever.map is not a function' keeps popping up, so maybe it tries to run before 'whatever' is an array...
SO... maybe I should do this mapping inside the GET request response... then it is definitely an array, if successful...
I say 'whatever' because it gets a random variable name like 'c' once its production bundled



*/

// import { testJSON }  from './JSONtableExample';

export const List = () => {
    // first state will start with an example route?
    const firstData = [{
        "#": "1",
        "date": "2013-04-02",
        "name": "Peaches",
        "difficulty": "5.6",
        "diff_sort": "6",
        "pitches": "1",
        "grade": "1",
        "area": "NV> RR> Willow Spring> Children's Crag",
        "rock": "Sandstone",
        "partner": "Ward Opfer",
        "on_mp": "yes",
        "link": "http://www.mountainproject.com/v/peaches/105732950",
        "notes": "First Trad lead, easy climbing. I traversed to the right late. Need 70m or doubles to rap?"
    },
    {
        "#": "2",
        "date": "2013-04-02",
        "name": "Peaches",
        "difficulty": "5.6",
        "diff_sort": "6",
        "pitches": "1",
        "grade": "1",
        "area": "NV> RR> Willow Spring> Children's Crag",
        "rock": "Sandstone",
        "partner": "Ward Opfer",
        "on_mp": "yes",
        "link": "http://www.mountainproject.com/v/peaches/105732950",
        "notes": "First Trad lead, easy climbing. I traversed to the right late. Need 70m or doubles to rap?"
    }];


    const [ listOfLeads, setListOfLeads ] = useState(firstData);
    const [ whichTable, setWhichTable ] = useState('default');
    const [ caption, setCaption ] = useState('List of my trad leads sorted by oldest first');

    let temp;

    useEffect(() => {
        //effect

        // getJSONtable.php options
        // 'default', 'default_rev', 'pitches', 'pitches_rev', 'area', 'area_rev', 'difficulty', 'difficulty_rev', 'other'
        // name, grade, grade_rev -- other possible good options to sort by

        //  This works for getting SQL Query result via PHP, returning as JSON, and updating DOM
        let oReq = new XMLHttpRequest(); //New request object
		oReq.onload = function(){
            //This is where you handle what to do with the response.
            //The actual data is found on this.responseText
            //this.responseText will be json_encode($result)
            // setListOfLeads(this.responseText);
            temp = this.responseText;
            setListOfLeads(...this.responseText);
        };
        // true... true here makes it so that it doesn't block the rest of the execution
        // oReq.open("get", "../../getJSONtable.php?q=" + whichTable, true);
        oReq.open("get", "getJSONtable.php?q=" + whichTable, true);
        oReq.send();


        // copy/pasted from chrome
        // fetch("http://tradleads.jponeil.com/getJSONtable.php?q=default", {
        //     "headers": {
        //         "accept": "*/*",
        //         "accept-language": "en-US,en;q=0.9"
        //     },
        //     "referrer": "http://tradleads.jponeil.com/list",
        //     "referrerPolicy": "strict-origin-when-cross-origin",
        //     "body": null,
        //     "method": "GET",
        //     "mode": "cors",
        //     "credentials": "omit"
        // });



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
    }, [ whichTable, listOfLeads ]);

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
            <caption>{ caption }</caption>
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

                    <th scope='col' onClick={() => sortTable( whichTable === 'default' ? 'default_rev' : 'default' )} >#</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'default' ? 'default_rev' : 'default' )} >date</th>
                    <th scope='col' onClick={() => sortTable('name')} >name</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'difficulty' ? 'difficulty_rev' : 'difficulty' )} >difficulty</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'difficulty' ? 'difficulty_rev' : 'difficulty' )} >diff_sort</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'pitches' ? 'pitches_rev' : 'pitches' )} >pitches</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'grade' ? 'grade_rev' : 'grade' )} >grade</th>
                    <th scope='col' onClick={() => sortTable( whichTable === 'area' ? 'area_rev' : 'area' )} >area</th>
                    <th scope='col' >rock</th>
                    <th scope='col' >partner</th>
                    <th scope='col' >on_mp</th>
                    <th scope='col' >link</th>
                    <th scope='col' >notes</th>
                </tr>
            </thead>
            <tbody>
                { console.log('listOfLeads:', listOfLeads) }
                { console.log('typeof listOfLeads', typeof listOfLeads) }
                { console.log('temp', temp) }
                { console.log('typeof temp', typeof temp)}
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
                    listOfLeads.map( (route, index) => {
                        return (
                            <tr key={ route['#'] } >
                                <th scope='row'>{ route['#'] }</th>
                                <td>{ route['date'] }</td>
                                <td>{ route['name'] }</td>
                                <td>{ route['difficulty'] }</td>
                                <td>{ route['diff_sort'] }</td>
                                <td>{ route['pitches'] }</td>
                                <td>{ route['grade'] }</td>
                                <td>{ route['area'] }</td>
                                <td>{ route['rock'] }</td>
                                <td>{ route['partner'] }</td>
                                <td>{ route['on_mp'] }</td>
                                <td><a href={ route['link'] }>Link</a></td>
                                <td>{ route['notes'] }</td>
                            </tr>
                        )
                    })
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
