# Blog_server

The Book_shop application allows users to manage their blogs by adding, updating, and deleting there blogs, and admin to controll the blogs by blocking user or deleting there blog.

## Features

- Facility to Register and Log in.
- Facility to Add, Update and Delete blogs.
- Facility to View All or Specific blogs.
- Facility to Sort, Filter, and Search blogs.
- Facility to Manage The Blogs and The Users with Admin actions.
- Authentication and Authorization based Routes. 

## Prerequisites

Before running the Blog project, install the following:

- **Node.js** (version 16 or higher) – To run the application and dependencies.
- **npm** – To manage and install packages.
- **TypeScript** (version 5.6 or higher) – To compile TypeScript files.
- **Git** – To clone the repository and manage version.

### Development Tools:

- **Mongoose** – A MongoDB ODM library to interact with the MongoDB database.
- **ts-node-dev** – For running TypeScript code in development mode.

### Database:

- **MongoDB** – Used as the database for storing books and orders.

### Additional Configuration:

- Ensure that your machine supports **MongoDB** (locally or via a cloud) and set up a `.env` file with configuration for database.
- Run the application in a `modern browser` to have a seamless experience.

## Installation

Set up and run the Book_Shop project by following these steps:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/ikhtiaj-arif/Blog_server_l2a3.git

cd Blog_server_l2a3

npm install
```

### 2. .env file

Provide the `PORT`  `BCRYPT_SALT_ROUNDS`  `JWT_ACCESS_SECRET`  `JWT_ACCESS_EXP_IN` and `DATABASE_URL` inside the `.env` file.

### 3. Run the application

To start the application in development mode, run:

```bash
npm run start:dev
```

To start the production mode:

```bash
npm run start:prod
```

## Contact

For any questions or feedback, reach out to me at [ikhtiaj.arif@gmail.com].
