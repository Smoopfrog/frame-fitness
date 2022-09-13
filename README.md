# Frame Fitness

A one page user-friendly workout app built with ReactJS, Material UI, and Express

## Summary

Signup or login to choose from a library of 1300+ exercises categorized by chest, arms, legs, forearms, lower legs, back, shoulders, neck, and waist! This web application was built by Jeff Stinson and Jeandre Visser as the final project for the [Lighthouse Labs](https://www.lighthouselabs.ca/) full stack development program. 

## Project Walkthrough and Features
1. When presented with the home page, click sign up or login to become a user.
!["Login"](https://github.com/Smoopfrog/frame-fitness/blob/main/docs/Frame%20Fitness.gif)
!["Login"](https://github.com/Smoopfrog/frame-fitness/blob/main/docs/Frame%20Fitness.webm)
2. Scroll through the catelogue of exercises and add or remove exercises of your choosing. You may search for an exercise using the search bar or select one of the body part categories with the fun animations to narrow your search! There is also a chat feature where a user can chat with an expert to help build a workout (Note: Chat is only a development feature, you will not actually be in contact with an expert, however, you can open another window on `localhost:3000` and chat back and forth to test out the chat!)
3. Go to `My Workout` in the nav bar. Here you can edit the sets and reps, as well as delete any exercises you no longer want. 
4. Whenever you are ready, you may begin your workout and toggle the checkmark button whenever you are finished with the exercise. A bar at the top of the page will show your workout progression. Once your workout is completed, you can `DELETE ALL` to build a new workout from scratch.
5. Sign out and log back in to add new exercises for another workout

## Getting Started
1. Install all required dependencies: `npm i`
2. Setup database with the schema in the `db.sql` file
3. Create an .env file with database credentials that are imported into the `dp.js` file
4. Run the server by entering `node server/index` in the command line from the root of the project
5. Run `npm start`:
- Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload when you make changes.
- You may also see any lint errors in the console.

## Dependencies
- ReactJS 
- Express 
- Material UI
- SASS
- Axios 
- Socket.io
- Yup
- bcrypt
