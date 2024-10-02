# GymTracker
Application to track workouts

# Backend
## Getting Started
navigate to backend folder and run following command to install needed dependencies and run server: 

    npm install && npm start
note: This project uses mongodb Atlas. in order to connect to database, developers need to be added as developer 

### Project Structure

 -    **public/**: This directory stores static files such as images, CSS, and JavaScript files.
 
-   **src/**: This directory contains all the source code for the application.

-   **api/**: Contains API endpoints or routes and their respective controllers.

-   **config/**: Houses configuration files such as Multer, MongoDB connection, cloudinary configuration, etc.

-   **controllers/**: Contains feature-specific controllers.

-   **errors/**: Contains error handling middleware.

-   **interface/**: Stores Typescript interfaces for MongoDB models

-   **middleware/**: Houses middleware functions such as JWT authentication.

-   **models/**: Contains MongoDB models.

-   **Services**/: This are functions that communicate to our database

-   **utils/**: Houses helper functions used throughout the application.

### .env
This project utilizes dotenv in order to manage secrets to avoid hard coding. for backend, the .env file should be in backend folder with these variables. Note: SMTP not yet implemented

    MONGO_DB_URI="mongodb+srv://dbAdmin:<PASSWORD>@gymtracker.5bhmp.mongodb.net/"
    NODE_ENV=development
    PORT=5000
    
    JWT="YOUR_JWT_ACCESS_TOKEN"
    JWT_REFRESH="YOUR_JWT_REFRESH_TOKEN"
    SMTP_PORT=
    SMTP_SERVICE=
    SMTP_MAIL=
    SMTP_PASSWORD=
    
    
