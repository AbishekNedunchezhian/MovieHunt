### MovieHunt - A Movie Discovery App ###
MovieHunt is a web application built using Vite, React, and Bootstrap that allows users to explore movies. The app fetches movie data from the The Movie Database (TMDb) API and displays top-rated, upcoming, and popular movies in a user-friendly interface. The application is component-based, integrated through React Router, and styled using Bootstrap.

### Features ###
Top Rated Movies: View a list of the highest-rated movies on the platform.

Upcoming Movies: Get a preview of upcoming movie releases.

Popular Movies: Discover popular movies currently trending.

Search Feature: Search for specific movies using the integrated search bar.

Movie Details: View additional information about each movie, such as its plot, release date, and ratings.

Responsive Design: The app is built with Bootstrap, ensuring a fully responsive layout that works across various devices.

### Technologies Used ###
Vite: A next-generation, fast bundler for modern web projects.

React: A JavaScript library for building user interfaces.

React Router: For handling navigation between different components/pages.

Bootstrap: A popular CSS framework for building responsive and mobile-first websites.

TMDb API: Provides movie data (top-rated, popular, and upcoming movies).

### Components ###
App.jsx: The main component that integrates all the routes and other components.

Card.jsx: Displays individual movie information like title, poster, and rating.

MovieList.jsx: Renders lists of movies based on the category (Top Rated, Popular, Upcoming).

MovieDetails.jsx: Shows detailed information about a selected movie.

Footer.jsx: A footer with some basic information about the app.

### Setup & Installation ###
Clone the repository:github.com/AbishekNedunchezhian/MovieHunt.git

Install dependencies: If you haven't installed Node.js yet, make sure you have it installed.

run the command:npm install.

API Key:

Sign up for a free account on The Movie Database (TMDb).

Go to the API section and generate an API key.

Create a .env file in the root directory of the project and add your API key:

VITE_API_kEY=your_api_key_here

Run the app:npm run dev

The app will run on http://localhost:3000.

### Screen Shots of the project ###
![image alt](https://github.com/AbishekNedunchezhian/MovieHunt/blob/2559c513a564b2f541e75324784244bbc9055ff5/Screenshot%202025-04-03%20113845.png)
![image alt](https://github.com/AbishekNedunchezhian/MovieHunt/blob/4bb5e1e58ea65a61f659652c37a1b0b8df9bd508/Screenshot%202025-04-03%20113944.png)

### Future Improvements ###
Pagination: Implement pagination to load more movies in each category.

Error Handling: Improve error handling for API calls and display user-friendly error messages.
