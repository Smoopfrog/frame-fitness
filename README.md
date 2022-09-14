# Frame Fitness

A one page user-friendly workout app built with ReactJS, Material UI, and Express. Can be viewed on mobile, tablet, and desktop screens!

## Summary

Signup or login to choose from a library of 1300+ exercises categorized by chest, arms, legs, forearms, lower legs, back, shoulders, neck, and waist! This web application was built by Jeff Stinson and Jeandre Visser as the final project for the [Lighthouse Labs](https://www.lighthouselabs.ca/) full stack development program. 

## Quick Glimpse

### Home page
!["home-page"](https://github.com/Smoopfrog/frame-fitness/blob/main/docs/homepage-still.png)

### Exercises Catalogue
!["exercises"](https://github.com/Smoopfrog/frame-fitness/blob/main/docs/exercises-still.png)

## Project Walkthrough and Features
1. When presented with the home page, click sign up or login to become a user.
<table>
  <tr>
    <td><img src='https://github.com/Smoopfrog/frame-fitness/blob/main/docs/login.gif' width=755 ></td>
    <td><img src='https://github.com/Smoopfrog/frame-fitness/blob/main/docs/login-mobile.gif' width=195 /></td>
  </tr>
</table>

2. Scroll through the catelogue of exercises and add or remove exercises of your choosing. You may search for an exercise using the search bar or select one of the body part categories with the fun animations to narrow your search! There is also a chat feature where a user can chat with an expert to help build a workout (Note: Chat is only a development feature, you will not actually be in contact with an expert, however, you can open another window on `localhost:3000` and chat back and forth to test out the chat!)
<table>
  <tr>
    <td><img src='https://github.com/Smoopfrog/frame-fitness/blob/main/docs/exercises.gif' width=755 ></td>
    <td><img src='https://github.com/Smoopfrog/frame-fitness/blob/main/docs/exercises-mobile.gif' width=195 /></td>
  </tr>
</table>

3. Go to `My Workout` in the nav bar. Here you can edit the sets and reps, as well as delete any exercises you no longer want. Whenever you are ready, you may begin your workout and toggle the checkmark button whenever you are finished with the exercise. A bar at the top of the page will show your workout progress. Once your workout is completed, you can `DELETE ALL` to build a new workout from scratch.
<table>
  <tr>
    <td><img src='https://github.com/Smoopfrog/frame-fitness/blob/main/docs/myworkout.gif' width=755 ></td>
    <td><img src='https://github.com/Smoopfrog/frame-fitness/blob/main/docs/myworkout-mobile.gif' width=195 /></td>
  </tr>
</table>

4. Sign out and log back in to add new exercises for another workout


## Getting Started
1. Install all required dependencies: `npm i`
2. Setup database with the schema in the `db.sql` file
3. Create an .env file with database credentials that are imported into the `db.js` file
4. Run the server by entering `node server/index` in the command line from the root of the project
5. Run `npm start`:
- Runs the app
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Dependencies
- ReactJS 
- Express 
- Material UI
- SASS
- Axios 
- Socket.io
- Yup
- bcrypt

***Important Note***
This web application uses an [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) from RapidAPI which is required for this application. The API key must also go into the .env file and imported into the db.js file. You may purchase the API to experience the application yourself, or just appreciate the visual walkthrough and explanation in this README.
