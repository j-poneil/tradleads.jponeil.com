import React from 'react'

export const Graph = () => {
    /*
    ! -  - - - - -- - -- - - - - - --  -- - - - - - - - -- - - - - - - - - - - - --
    copy pasted in google charts stuff from OLD app.js
    */

    /* ------- Charts ------------ */
    // Manual update for the data currently
    // SELECT rock, COUNT(rock) FROM `TABLE 1` GROUP BY rock;
    function drawRockRoutesChart(){
        var data = google.visualization.arrayToDataTable([
            ['Rock', 'Routes'],
            ['Granite', 51],
            ['Limestone', 3],
            ['Sandstone', 31],
            ['Conglomerate Sandstone', 2]
        ]);

        var options = {
            title: 'Rock by Routes',
            pieHole: 0.4,
            legend: {position: 'labeled'},
            pieSliceText: 'value',
            width: 400,
            height: 250,
            chartArea: {width: "80%", height: "80%"}

        };

        var chart = new google.visualization.PieChart(document.getElementById('rock-routes-chart'));
        chart.draw(data, options);
    }

    // - rock by pitches ################
    // SELECT rock, SUM(pitches) FROM `TABLE 1` GROUP BY rock;
    function drawRockPitchesChart(){
        var data = google.visualization.arrayToDataTable([
            ['Rock', 'Pitches'],
            ['Granite', 56],
            ['Limestone', 3],
            ['Sandstone', 47],
            ['Conglomerate Sandstone', 7]
        ]);

        var options = {
            title: 'Rock by Pitches',
            pieHole: 0.4,
            legend: {position: 'labeled'},
            pieSliceText: 'value',
            width: 400,
            height: 250,
            chartArea: {width: "80%", height: "80%"}

        };

        var chart = new google.visualization.PieChart(document.getElementById('rock-pitches-chart'));
        chart.draw(data, options);
    }

    // Bar / Column may be better
    // SELECT diff_sort, COUNT(diff_sort) FROM `TABLE 1` GROUP BY diff_sort;
    function drawDiffChart(){
        var data = google.visualization.arrayToDataTable([
            ['Difficulty', 'Routes'],
            ['5.5', 8],
            ['5.6', 13],
            ['5.7', 26],
            ['5.8', 15],
            ['5.9', 14],
            ['5.10', 9],
            ['5.11', 2]
        ]);

        var options = {
            title: 'Difficulty by Routes',
            pieHole: 0.4,
            legend: {position: 'labeled'},
            pieSliceText: 'value',
            width: 400,
            height: 250,
            chartArea: {width: "80%", height: "80%"}
        };

        var chart = new google.visualization.PieChart(document.getElementById('diff-chart'));
        chart.draw(data, options);
    }


    //
    // SELECT grade, COUNT(grade) FROM `TABLE 1` GROUP BY grade;
    function drawGradeChart(){
        var data = google.visualization.arrayToDataTable([
            ['Grade', 'Total'],
            ['Grade I', 79],
            ['Grade II', 5],
            ['Grade III', 3]
        ]);

        var options = {
            title: 'Grade by Total',
            pieHole: 0.4,
            legend: {position: 'labeled'},
            pieSliceText: 'value',
            width: 400,
            height: 250,
            chartArea: {width: "80%", height: "80%"}

        };

        var chart = new google.visualization.PieChart(document.getElementById('grade-chart'));
        chart.draw(data, options);
    }


    // SELECT pitches, COUNT(pitches) FROM `TABLE 1` GROUP BY pitches;
    function drawPitchesChart(){
        var data = google.visualization.arrayToDataTable([
            ['Pitches', 'Routes'],
            ['1p', 77],
            ['2p', 5],
            ['3p', 0],
            ['4p', 1],
            ['5p', 2],
            ['6p', 2]
        ]);

        var options = {
            title: 'Pitches',
            pieHole: 0.4,
            legend: {position: 'labeled'},
            pieSliceText: 'value',
            width: 400,
            height: 250,
            chartArea: {width: "80%", height: "80%"}


        };

        var chart = new google.visualization.PieChart(document.getElementById('pitches-chart'));
        chart.draw(data, options);
    }


    // SELECT area, SUM(pitches) FROM `TABLE 1` WHERE area LIKE 'TX%';
    function drawStatePitchesChart(){
        var data = google.visualization.arrayToDataTable([
            ['State', 'Pitches'],
            ['Arkansas', 23],
            ['Nevada', 24],
            ['Texas', 41],
            ['Oklahoma', 6]
        ]);

        var options = {
            title: 'Pitches per State',
            pieHole: 0.4,
            legend: {position: 'labeled'},
            pieSliceText: 'value',
            width: 400,
            height: 250,
            chartArea: {width: "80%", height: "80%"}


        };

        var chart = new google.visualization.PieChart(document.getElementById('state-pitches-chart'));
        chart.draw(data, options);
    }


    // -- WORK HERE --
    // This needs to be updated when the spreadsheet is imported next
    // SELECT diff_sort, rock, SUM(pitches) FROM `TABLE 1` GROUP BY diff_sort, rock;
    function drawDiffRockPitchesChart(){
        var data = google.visualization.arrayToDataTable([
            ['Difficulty', 'Granite', 'Sandstone', 'Limestone', 'Conglomerate Sandstone'],
            ['5.5', 3, 0, 0, 0],
            ['5.6', 4, 7, 0, 0],
            ['5.7', 8, 21, 1, 5],
            ['5.8', 4, 3, 0, 0],
            ['5.9', 3, 6, 0, 0],
            ['5.10', 1, 0, 0, 2]
        ]);

        var options = {
            title: 'Pitches per Difficulty & Rock',
            isStacked: true,
            legend: {position: 'none'},
            hAxis: {minValue: 0},
            width: 400,
            height: 250,
            chartArea: {width: "80%", height: "80%"}


        };

        var chart = new google.visualization.BarChart(document.getElementById('diff-rock-pitches-chart'));
        chart.draw(data, options);
    }


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
    ! - ------------------------------------------------------------------------------

    From statistics and graphs
    <div class="chart-container"><div id="rock-routes-chart" class="google-chart"></div></div>
    <div class="chart-container"><div id="rock-pitches-chart" class="google-chart"></div></div>
    <div class="chart-container"><div id="diff-chart" class="google-chart"></div></div>
    <div class="chart-container"><div id="grade-chart" class="google-chart"></div></div>
    <div class="chart-container"><div id="pitches-chart" class="google-chart"></div></div>
    <div class="chart-container"><div id="state-pitches-chart" class="google-chart"></div></div>
    <div class="chart-container"><div id="diff-rock-pitches-chart" class="google-chart"></div></div>


    Google charts stuff I can probably only load in <Graph />, maybe lazy load
    ... is there benefit in having it accessible from <List /> ?

    ! What if...
    ... What if, once the arrow of objects of trad leads is loaded, a global variable copy is made, and the counts and charts are populated directly from that instead of the current hard coded way?


    <!-- Google Charts -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {packages: ['corechart']});
      google.charts.setOnLoadCallback(drawRockRoutesChart);
      google.charts.setOnLoadCallback(drawRockPitchesChart);
      google.charts.setOnLoadCallback(drawDiffChart);
      google.charts.setOnLoadCallback(drawGradeChart);
      google.charts.setOnLoadCallback(drawPitchesChart);
      google.charts.setOnLoadCallback(drawStatePitchesChart);
      google.charts.setOnLoadCallback(drawDiffRockPitchesChart);
    </script>














    */



    return (
        <div>
            Graphs...
        </div>
    )
}
