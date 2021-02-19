import React from 'react'
// react-google-charts.com
import { Chart } from "react-google-charts";



export const Graph = () => {
    /*
    TODO - It would be nice to use the google charts since I already kinda have the skeleton of them...
        but kinda think it may be better to just use D3 or C3
        I'll use this react-google-charts for now, just a wrapper for Google Charts so it plays (better) with React.
    TODO - Data for charts coming from the DB instead of hard coded.

    ! ------------------
    copy pasted in google charts stuff from OLD app.js
    */


    // - to get a list of date and pitches, with duplicate dates
    // SELECT date, pitches FROM `TABLE 1`;
    // - date by pitches #########
    // SELECT date, SUM(pitches) FROM `TABLE 1` GROUP BY date;

    // - to get a list of the climbs i have done, with tallys of how many times I have done each, large to small
    // SELECT name, COUNT(name) FROM `TABLE 1` GROUP BY name ORDER BY COUNT(name) DESC;
    // - count, THEN alphabetical
    // SELECT name, COUNT(name) FROM `TABLE 1` GROUP BY name ORDER BY COUNT(name) DESC, name;

    // - diff_sort by pitches
    // SELECT diff_sort, SUM(pitches) FROM `TABLE 1` GROUP BY diff_sort;
    // - diff_sort by routes
    // SELECT diff_sort, COUNT(diff_sort) FROM `TABLE 1` GROUP BY diff_sort;


    /*
    ! - -----------------------------------------------------------------------------
    */

    return (
        <div>
            {/* SELECT rock, COUNT(rock) FROM `TABLE 1` GROUP BY rock; */}
            <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Rock', 'Routes'],
                    ['Granite', 51],
                    ['Limestone', 3],
                    ['Sandstone', 31],
                    ['Conglomerate Sandstone', 3]
                ]}
                options={{
                    title: 'Rock by Routes',
                    pieHole: 0.4,
                }}
                // rootProps={{ 'data-testid': '3' }}
            />
            


            {/* SELECT rock, SUM(pitches) FROM `TABLE 1` GROUP BY rock; */}
            <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Rock', 'Pitches'],
                    ['Granite', 56],
                    ['Limestone', 3],
                    ['Sandstone', 47],
                    ['Conglomerate Sandstone', 7]
                ]}
                options={{
                    title: 'Rock by Pitches',
                    pieHole: 0.4,
                }}
                // rootProps={{ 'data-testid': '3' }}
            />


            {/* SELECT diff_sort, COUNT(diff_sort) FROM `TABLE 1` GROUP BY diff_sort; */}
            <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Difficulty', 'Routes'],
                    ['5.5', 8],
                    ['5.6', 13],
                    ['5.7', 26],
                    ['5.8', 15],
                    ['5.9', 14],
                    ['5.10', 9],
                    ['5.11', 2]
                ]}
                options={{
                    title: 'Difficulty by Routes',
                    pieHole: 0.4,
                }}
                // rootProps={{ 'data-testid': '3' }}
            />


            {/* SELECT grade, COUNT(grade) FROM `TABLE 1` GROUP BY grade; */}
            <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Grade', 'Total'],
                    ['Grade I', 79],
                    ['Grade II', 5],
                    ['Grade III', 3]
                ]}
                options={{
                    title: 'Grade by Total',
                    pieHole: 0.4,
                }}
                // rootProps={{ 'data-testid': '3' }}
            />


            {/* SELECT pitches, COUNT(pitches) FROM `TABLE 1` GROUP BY pitches; */}
            <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Pitches', 'Routes'],
                    ['1p', 77],
                    ['2p', 5],
                    ['3p', 0],
                    ['4p', 1],
                    ['5p', 2],
                    ['6p', 2]
                ]}
                options={{
                    title: 'Pitches',
                    pieHole: 0.4,
                }}
                // rootProps={{ 'data-testid': '3' }}
            />

            {/* SELECT area, SUM(pitches) FROM `TABLE 1` WHERE area LIKE 'TX%'; */}
            <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['State', 'Pitches'],
                    ['Arkansas', 23],
                    ['Nevada', 24],
                    ['Texas', 41],
                    ['Oklahoma', 6]
                ]}
                options={{
                    title: 'Pitches per State',
                    pieHole: 0.4,
                }}
                // rootProps={{ 'data-testid': '3' }}
            />


            {/* SELECT diff_sort, rock, SUM(pitches) FROM `TABLE 1` GROUP BY diff_sort, rock; */}
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Difficulty', 'Granite', 'Sandstone', 'Limestone', 'Conglomerate Sandstone'],
                    ['5.5', 3, 0, 0, 0],
                    ['5.6', 4, 7, 0, 0],
                    ['5.7', 8, 21, 1, 5],
                    ['5.8', 4, 3, 0, 0],
                    ['5.9', 3, 6, 0, 0],
                    ['5.10', 1, 0, 0, 2]
                ]}
                options={{
                    // Material design options
                    chart: {
                    title: 'Pitches per Difficulty & Rock'
                    },
                }}
                // For tests
                // rootProps={{ 'data-testid': '2' }}
            />


        </div>
    )
}
