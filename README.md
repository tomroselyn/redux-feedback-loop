
# Redux Feedback Loop

Redux Feedback Loop (daily feedback) is a React-based multi-part feedback form that asks users for input on four pages. It requires the user to input valid information before continuing to the next card in the loop. At the bottom of the form, and before submission, there is a review page, updated according to the Redux store values. On submission, which is only possible when all fields are complete, the data posts to the local database and the user is shown a success page with the option to start over. An admin page, accessible from an icon in the top right corner, allows one to view all submitted data and delete individual entries.

## Built With

React, Redux, Node.js, Express.js, PostgreSQL, Material-UI

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgresQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)

### Installing

Steps to get the development environment running.

1. Download this project.
2. Set up a local PostgreSQL database called `prime_feedback`
3. Use the data.sql instructions to create a table in your database
4. In the terminal, `npm install` in the project folder
5. In the terminal, `npm run server` and `npm run client`

## Screen Shot

![Daily Feedback screenshot]('/images/public/daily-feedback-screenshot.png')

## Documentation

### Completed Features

App allows users to

- [x] Add ratings for Feeling, Understanding, and Support
- [x] Add comments from the Comment page
- [x] Review input information along the way and before submission
- [x] Submit information to the database, only if all fields have valid information
- [x] Reset and start over from anywhere in the process
- [x] Start the form over again after submission
- [x] As admin, review all entries and delete any of them

### Next Steps

- [ ] Require confirmation before deleting an entry from the database
- [ ] Allow admin to flag (update) entries for further review
- [ ] Deploy to Heroku

## Authors

* Thomas Roselyn

## Acknowledgments

* Prime Digital Academy
