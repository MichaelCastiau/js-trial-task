# Erasys JavaScript Trial Task

Trial task application from Michael Castiau.

This application fetches users from a remote api and displays basic user information. The frontend application is Angular based and uses the latest Redux and RxJs technologies.

Extensive use of CSS allows for a coherent visual presentation. Scroll to the bottom of the page to load additional user profiles.

## Running the application locally

**This application required Node 12 or higher (preferably 14).**

First install dependencies of both backend and frontend applications.
Run in a terminal:
```shell
cd backend
npm i # or yarn install
cd frontend
npm i # or yarn install
```
Then install dependencies of the root directory and start both application by running the `start` command in the root of the project:
````shell
# in js-trial-task
npm i # or yarn install
npm run start
````

You can off course also start both backend and frontend in their respective directories.
Additionally install the Redux devtools extension in your browser to inspect redux activity.
The application is hosted on [http://localhost:4200](http://localhost:4200)

## Application Overview

This repo is a monorepo containing an:
- Express application running on Node
- Angular application running a dev server

The directory structure of the project was refactored to a monorepo with seperate package.json files. This will play out nicely
when integrating deployment using Docker ao.

The frontend application can be found in the `frontend` directory.

## Frontend

The frontend application is an Angular 12 application using Redux and RxJs.

The `PaginationComponent` is responsible for initializing the app users and loading extra users. This component can be found at
`frontend/src/app/pagination/pagination.component.ts`

Fetching users is done in three steps:
- The `/api/search` endpoint is used with the length parameter to get basic user data
- the ids of the users are filtered out of that data
- the `/api/profiles` endpoint is used to get the detailed data of these users

These operations are performed entirely using the Redux pattern. All redux related logic can be found in the 
`frontend/src/app/store` directory.

> TODO: right now when adding new users to the list, the existing users are not cached. It would be a great addition to add
> an 'offset' to the length parameter for the search api endpoint to offload the server.

When the user scrolls to the bottom of the page, the `getUsers` action is dispatched again,
adding an offset to the length parameter.
