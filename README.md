<div align="center" style="padding-top: 10px;">
<img src="./img/react.png" alt="react logo" width="20%">
<img src="./img/postgresql.png" alt="postgresql logo" width="20%">
<img src="./img/knex.png" alt="knex logo" width="20%">
<img src="./img/chart.png" alt="chart logo" width="20%">
</div>

# Money-Tracker-App

## 1. Introduction

This was created during my time as a student at Code Chrysalis.<br/>
This app is a single-page app for users who want to track their daily spending.

## 2. Set Up

1.  To install dependencies, run:
    `yarn`
1.  Install [PostgresApp](https://postgresapp.com/) if you don't have one.
1.  To start postgres, run: `psql`
1.  To create database, run: `create database history;`
1.  To connect to database, run: `\c history`
1.  To run migrations, run: `yarn migrations`
1.  To seed data into your database, run: `yarn seed`
1.  To start your frontend server, run: `yarn start`
1.  To start your backend server, run: `yarn serve`

## 3. Future plans

For now the app takes in your input data and insert it into the database.
In the future, I would like to add the following:

1.  An `edit` feature to each row on the log
1.  A `delete` feature to each row on the log
1.  A `weekly` graph to visualize your past expenses
1.  A `monthly` graph to visualize your past expenses
1.  A `yearly` graph to visualize your past expenses
1.  A `catagory` collumn to the database (food, housing, taxes, ...etc)
1.  A `filter` feature on the frontend so you can filter by `catagory`
1.  A graph to visualize your expenses sorted by `catagory`
