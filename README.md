# Dynamic Portfolio Frontend

This is the frontend application for a Dynamic Portfolio Platform. It is built using React and Vite. The frontend provides a public portfolio website and a secured admin dashboard for managing portfolio content.

## Features

- Public portfolio website
- Home page with featured projects and activities
- About page
- Projects listing page
- Project details page
- Activities listing page
- Activity details page
- Contact form
- Feedback submission for projects and activities
- Admin login page
- Protected admin dashboard
- Admin project management
- Admin activity management
- Feedback moderation
- Contact message management
- Logout functionality
- JWT token storage using localStorage
- Axios integration with Spring Boot backend

## Tech Stack

- React
- Vite
- JavaScript
- React Router
- Axios
- CSS

## Main Pages

### Public Pages

- Home
- About
- Projects
- Project Details
- Activities
- Activity Details
- Reviews & Feedback Info
- Contact

### Admin Pages

- Admin Login
- Admin Dashboard

The admin dashboard includes tabs for:

- Dashboard
- Projects
- Activities
- Feedback
- Messages

## Authentication Flow

The admin logs in using the admin login page.

After successful login:

1. The frontend receives a JWT token from the backend.
2. The token is stored in localStorage.
3. Protected admin routes become accessible.
4. Admin API requests send the token in the Authorization header.

Example Authorization header:

Authorization: Bearer <token>

## API Connection

The frontend communicates with the backend using Axios.

Backend API base URL during development:

http://localhost:8080

Frontend development URL:

http://localhost:5173

## How to Run

### 1. Clone the repository

git clone <frontend-repository-url>

cd <frontend-folder>

### 2. Install dependencies

npm install

### 3. Start the frontend

npm run dev

The frontend will run on:

http://localhost:5173

## Admin Access

Admin login page:

http://localhost:5173/admin/login

Default admin credentials:

Username: admin

Password: admin123

The Admin link is hidden from the public navbar. Admin can access the login page manually using the URL above.

## Important Frontend Services

The frontend uses service files to call backend APIs:

- projectService.js
- activityService.js
- feedbackService.js
- contactService.js
- authService.js

Admin-only API requests send the JWT token using the Authorization header.

## Public User Flow

Public users can:

- View projects
- View activities
- Open project details
- Open activity details
- Submit feedback for a project
- Submit feedback for an activity
- Send contact messages

Submitted feedback is shown publicly only after admin approval.

## Admin User Flow

Admin can:

- Login securely
- Add projects
- Edit projects
- Delete projects
- Mark projects as featured
- Add activities
- Edit activities
- Delete activities
- Mark activities as featured
- Approve feedback
- Reject feedback
- Delete feedback
- View contact messages
- Mark messages as read
- Mark messages as replied
- Delete contact messages
- Logout

## Future Improvements

- Use environment variables for backend API URL
- Add image upload support
- Improve admin dashboard design
- Add token expiration auto-logout
- Add deployment configuration
- Add screenshots to README
