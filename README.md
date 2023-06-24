# Backend (NestJS)

## Overview
I have developed a backend project that allows the creation of users based on the following information: email, password, first name, last name, phone number, and national ID. It is a policy in our system that email, phone number, and national ID must be unique. When a user is created, an immediate wallet is assigned to them with zero cash. Users have the option to acquire multiple wallets and can transfer money between users using their respective wallet IDs. Additionally, every user has access to a detailed transaction history.

## Setup Instructions
To set up and run this project on your machine, please follow these steps:

1. Open the `backend` folder in your preferred editor.

2. Open the terminal and execute the following commands:
   - Run `npm i` to install the required dependencies.
   - Run `yarn i` or `yarn add` to add any additional dependencies.

3. Ensure that you have a functioning MySQL database installed on your machine.

4. Navigate to the `src` folder and locate the `app.module.ts` file. Update the database configuration within this file to match your local database settings.

5. Finally, run the command `nest start` to start the application.

That's it! You can now test the APIs in each controller using the provided schema defined in the Dto file.

## File Structure

### databaseTables
In this directory, all the necessary database tables are stored. We have three tables: Users, Wallet, and History. The relationship between Users and Wallet/History is one-to-many, meaning that a user can have multiple wallets and a history of all their transactions.

### Controllers, Services, DTOs, and Modules
Each component (history, users, wallet) has its own controller, service, module, and DTOs.

- Controllers: These handle the routes for each API.
- Services: They contain the logic for the controller functions.
- DTOs (Data Transfer Objects): These define the expected schema for API requests, ensuring data correctness and validation at the controller layer.
- Modules: These map the controllers and services to the main module of the project.

### History
This section includes a single API endpoint that provides the transaction history of a specific user (GET method).

### Users
This section consists of five API endpoints:

- (POST) Register: Allows the creation of a new user using a registration form with data validation.
- (POST) Login: Enables user authentication using JWT strategy.
- (POST) Logout: Facilitates user logout based on JWT strategy.
- (GET) List all users: Retrieves a list of all users in the project.
- (GET) User information: Retrieves user data, all associated wallets, and transaction history based on the JWT token.

### Wallet
This section contains three API endpoints:

- (POST) Create Wallet: Allows the creation of an additional wallet for a user.
- (PATCH) Money Transfer: Enables money transfers between users based on sender and receiver wallet IDs.
- (GET) List User Wallets: Retrieves a list of all wallets for a specific user.

### Utils
This directory stores the actual schemas used as parameters in the service layers.
