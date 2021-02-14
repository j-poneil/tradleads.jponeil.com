$(document).foundation();

$(document).ready(function(){
	// Passing data from PHP to Javascript
	// https://stackoverflow.com/questions/23740548/how-to-pass-variables-and-data-from-php-to-javascript
	// function reqListener(){
	// 	console.log(this.responseText);
	// }
	var oReq = new XMLHttpRequest(); //New request object
		oReq.onload = function(){
		//This is where you handle what to do with the response.
		//The actual data is found on this.responseText
		//this.responseText will be json_encode($result)

		//Log out for testing only, once its working make sure this is commented out
		//console.log(this.responseText);


		// ------------ WORK HERE ----------
		// How can I still enable sorting?

		// One of the main reasons I wanted to have this table data available in javascript
		// was to enable the charts to be up to date with the latest information...
		// so I should be able to do that at the least...
		// ----- 
		// THAT data is below in this same file...
		// SOOOO... can just call functions after I have this JSON as a callback ... right?
	};
	oReq.open("get", "getJSONtable.php", true);
	// true... true here makes it so that it doesn't block the rest of the execution
	oReq.send();
});

const JSONtable; // can I do it like this, and set it = something in the stuff above? Just an idea.

// unobtrusive javascript
// add onclick functions to HTML
// window.onload = function(){
// 	document.getElementById('date-btn').onclick = getTable('default');
// 	document.getElementById('pitches-btn').onclick = getTable('pitches');
// 	document.getElementById('area-btn').onclick = getTable('area');
// 	document.getElementById('diff-btn').onclick = getTable('difficulty');
// 	document.getElementById('other-btn').onclick = getTable('other');
//
//	document.getElementById('date-btn').onclick = startLoadingIcon();
//	document.getElementById('pitches-btn').onclick = startLoadingIcon();
//	document.getElementById('area-btn').onclick = startLoadingIcon();
//	document.getElementById('diff-btn').onclick = startLoadingIcon();
//	document.getElementById('other-btn').onclick = startLoadingIcon();
// }
//
// OR...
// Have jQuery click monitor for .click for all the buttons...
// This way can do both the getTable() and the startLoadingIcon() functions at the same time...
// and just have the endLoadingIcon function as a callback once connected to DB ?



// Vanilla JS

//console.log("MP sort, Area, then Difficulty... MP sort, Difficulty, then stars...");













// PHP connection
// modified from example here:
// http://www.w3schools.com/php/php_ajax_database.asp

// Code before PHP connection is determining if a button has been pressed before, but forgetting any given button when a separate button is pressed
// if that makes sense...
var flip = false;
var previousBtn = '';
function getTable(whichTable){


	if(previousBtn === whichTable){flip = true;}
	else{flip = false;}


	switch(whichTable){
		case 'default':
			if(flip){whichTable = 'default_rev';}
			previousBtn = whichTable;
			break;

		case 'default_rev':
			if(flip){whichTable = 'default';}
			previousBtn = whichTable;
			break;

		case 'pitches':
			if(flip){whichTable = 'pitches_rev';}
			previousBtn = whichTable;
			break;

		case 'pitches_rev':
			if(flip){whichTable = 'pitches';}
			previousBtn = whichTable;
			break;

		case 'area':
			if(flip){whichTable = 'area_rev';}
			previousBtn = whichTable;
			break;

		case 'area_rev':
			if(flip){whichTable = 'area';}
			previousBtn = whichTable;
			break;

		case 'difficulty':
			if(flip){whichTable = 'difficulty_rev';}
			previousBtn = whichTable;
			break;

		case 'difficulty_rev':
			if(flip){whichTable = 'difficulty';}
			previousBtn = whichTable;
			break;

		case 'other':
			if(flip){whichTable = 'other_rev';}
			previousBtn = whichTable;
			break;

		case 'other_rev':
			if(flip){whichTable = 'other';}
			previousBtn = whichTable;
			break;

		default:
			whichTable = 'default';
			previousBtn = whichTable;
	}



	if(window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else{
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("trad-table").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET", "getTable.php?q="+whichTable,true); // true, false would make it synchronous
	xmlhttp.send();



	// Quick fix to overwrite foundation table data padding default CSS
	// CSS for td element doesn't have enough specificity, and I'm too lazy to add this to every <td> in the php code... for now
	$('td').addClass('paddingfix');
}

// to make sure default sorted table is loaded before accordion can be opened
getTable('default');









/*
{
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
*/

// I guess I could use a promise to not draw charts until all the data for populating them exists???


// Get totals for rock routes -- extreme prototype -- not functional, probably bad syntax / vars
// future proof this later for additional unexpected rock-types
function rockTypeTotals(){
	let total_granite = 0;
	let total_limestone = 0;
	let total_sandstone = 0;
	for(const route of routes){
		switch(route['Rock']){
			case 'Granite':
				total_granite += 1;
				break;
			case 'Limestone':
				total_limestone += 1;
				break;
			case 'Sandstone':
				total_sandstone += 1;
				break;
			default:
				break;
		}
	}
	return [total_granite, total_limestone, total_sandstone];
}
//
// Could get...
// Array of route numbers
// Array of dates
// Array of names
// Array of ... etc...
// But that wouldn't get sorting easily either...
// What it WOULD do would be to allow me to know all the difficulties, numbers of pitches, grades, rock-types, that are there...
// THEN from that data I can generate the charts?
// That way if a new rock type gets added to the DB it will show up here on the chart automatically

// could even generate multi-dimensional arrays that are the perfect input for the google charts...
// Since ES6 "sets" have all unique values, it should automatically remove duplicate entires for rock type
// but how do I make it so that I don't have to update the code of the function for new rock types?

// OOHHHHHHH
// Sets are iterated in certain ways, probably not this particular for...of loop style...

function makeRockTypeData(){
	let rockSet = new Set();
	for(const route of routes){
		mySet.add(route.rock);
	}
	console.log(rockSet);

	// what if I used rockSet here
	// ie as the reference for what rock types exist and in what order they appeared
	// yeah... should be work able... maybe not most efficient
	let rockNumArr = new Array();
	for(const rock of rockSet){
		let total = 0;
		for(const route of routes){
			// tallying up each route that matches the rock type
			if(route[rock] === rockSet[rock]){
				total++;
			}
		}
		rockNumArr[rock] = total;
	}
	console.log(rockNumArr);

	// now make the final array of arrays?
	let finalArr = new Array();
	// not sure what to put here... getting late too...

}







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



