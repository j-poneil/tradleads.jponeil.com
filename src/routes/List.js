import React, { useState, useEffect } from 'react'

/*
! Probably wont see anything...
! because this is local live reload, which doesn't use PHP at all! Doh!
*/

export const List = () => {
    const [ data, setData ] = useState('no data yet');
    let phpFormattedResponse = 'none';

    useEffect(() => {
        //effect

        // TODO - This works for getting result as JSON and updating DOM
        let oReq = new XMLHttpRequest(); //New request object
		oReq.onload = function(){
            //This is where you handle what to do with the response.
            //The actual data is found on this.responseText
            //this.responseText will be json_encode($result)
            setData(this.responseText);
        };
        // true... true here makes it so that it doesn't block the rest of the execution
        oReq.open("get", "../../getJSONtable.php", true);
        oReq.send();

        return () => {
            //cleanup
        }
    }, [])




    return (
        <div>
            List of leads...<br/>
            { data }
        </div>
    )
}
