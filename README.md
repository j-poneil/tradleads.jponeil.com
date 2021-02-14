# My Trad Lead Statistics

Traditional Climbing (trad for short) is a style of rock climbing where one places pieces of protection such as nuts and camming devices. There is a whole lot more that could be explained, but it isn't important _here_.

This site is maybe my first full stack independent project. Not based off some tutorial project, fully my idea. I wanted to have _something_ that I could show for a portfolio project. List of leads which is sortable by different criteria, some nice charts which could be a bit interesting, a photo gallery, and dynamic progress bars to show how close I am to meeting American Mountain Guide Association (AMGA) criteria to be eligible to take various advanced rock guiding courses and exams.

First _OK_ draft first went live around October 2016. It used PHP, MySQL, jQuery, Foundation, JS, Google Charts. It is now Feb 2021 and it is completely broken. I'm starting fresh. Ditching jQuery, Foundation, possibly Google Charts. Used create-react-app. Will be copy/pasting some code over, and reconfiguring a ton over time.

I had not previously put it on Github. I'm doing so now because it is somewhat broken and I want fix it and use it as an opportunity to practice git in the process, and version control features in general in the editor I usually use, VS Code. I made a few minor changes before getting it on github, the most important of which was moving DB login credentials to a file that wouldn't be tracked on github and setting up the .gitignore file properly.

### Technologies

#### Originally:
Foundation 6, jQuery, JS, CSS, Google Charts, PHP, MySQL, Google Sheets... kinda

#### Now:
React, JS, PHP, MySQL, ( some graphing library ), Google Sheets... kinda

#### Dev environment:
At the time I was using Sublime Text and just uploading things to my host to test them. The data and backend code are not very extensive, so this seemed pretty reasonable at the time. I could develope locally using dummy data instead of the server response data if I wanted to. A whole lot of the project is just taming the display of the data.

Now I'm using VS Code. I may use XAMPP or some other local development environment this time around. Not sure yet. I shouldn't need to change the original PHP much at all, so using the built in hot reload dev environment that comes with create-react-app may be sufficient.

### Why did I make this stack choice?
The backend I was/am most familiar with is Node.js, which required more expensive dedicated hosting. Considering the limited backend needed for this project I decided to just learn how to use a small amount of PHP which could accomplish my goals with cheaper hosting. At the time I used jQuery enough that I was fine using it, now I can't even remember how to use it... so back to JS.

### This isn't CRUD
There is no create, read, update, delete here... which is a bit unfourtunate from a resume project perspective as these are usually considered essential parts of a good full stack project... However, the way I keep track of my traditional climbing leads is in a google spreadsheet which I can have an offline copy of on my laptop and cell phone. I don't need service to access and update it. This project is simply a nice way to display my leads for others with some possibily interesting statistics highlighted through charts, though it does require some manual updating ocassionally to do so. I'm OK with that. ( depending on what I use for graphing, it may not require manual updating )

There isn't much point in making this too advanced with offline editing, etc... as Mountain Project as a site and app already does that and so much more... with slight downsides like limited notes and not great options for sorting, not able to set goals and see progress towards them... Hence Google Sheets and this project.

#### To update list of trad leads:
* Export .csv of google spreadsheet
* Import .csv into SQL DB, make sure first row data becomes column headers (checkbox near bottom)
* Change "diff_sort" column data type to "tinyint"

#### To update charts:
* Manual in code update until I get data pass though ironed out

### What else?
Most of what I have been coding with these days is either ES6/7 or React JSX. So this whole thing feels very weird and old, but I guess its good to revisit old projects sometimes and update them to what I'm currently using.

There are more notes, particularly old ones going through more of how my process evolved and such, some of them are in: 'old notes on the project.txt'. Other notes are interspersed in the main files of the project and may be cleaned up or removed entirely over time... Especially now that I'm starting fresh.