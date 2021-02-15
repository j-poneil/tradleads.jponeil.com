import React, { useState, useEffect } from 'react'

/*
! Won't see any of the SQL data in live reload dev env because it doesn't run any of the PHP code, duh
*/

import { testJSON }  from './JSONtableExample';

export const List = () => {
    const [ data, setData ] = useState('no data yet');

    useEffect(() => {
        //effect

        // //  This works for getting SQL Query result via PHP, returning as JSON, and updating DOM
        // let oReq = new XMLHttpRequest(); //New request object
		// oReq.onload = function(){
        //     //This is where you handle what to do with the response.
        //     //The actual data is found on this.responseText
        //     //this.responseText will be json_encode($result)
        //     setData(this.responseText);
        // };
        // // true... true here makes it so that it doesn't block the rest of the execution
        // oReq.open("get", "../../getJSONtable.php", true);
        // oReq.send();

        // return () => {
        //     //cleanup
        // }




        
    }, [])




    return (
        <div>
            List of leads...<br/>
            {/* data */}
            {/* { JSON.stringify(testJSON) } */}
            <table>
                <thead>
                    <tr>
                        <th scope='col' >#</th>
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
                        <th scope='col' >notes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // ! Swap testJSON for data
                        testJSON.map( route => {
                            return (
                                <tr key={route['#']} >
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
                                    <td>{ route['link'] }</td>
                                    <td>{ route['notes'] }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
