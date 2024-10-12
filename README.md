# GymTracker

Application to track workouts
Note: This application is intented to be mobile first application. A client made with Flutter is being developed: https://github.com/sepehrn0107/GymTracker_client

# Backend

## Getting Started

navigate to backend folder and run following command to install needed dependencies and run server:

    npm install && npm run dev

note: This project uses mongodb Atlas. in order to connect to database, developers need to be added to database. contact repo owner

### Project Structure

- **public/**: This directory stores static files such as images, CSS, and JavaScript files.

- **src/**: This directory contains all the source code for the application.

- **api/**: Contains API endpoints or routes and their respective controllers.

- **config/**: Houses configuration files such as Multer, MongoDB connection, cloudinary configuration, etc.

- **controllers/**: Contains feature-specific controllers.

- **errors/**: Contains error handling middleware.

- **loader/**: Contains app.ts and bootstrap.

- **logs/**: Contains logs from morgan & Winston.

- **mails/**: Contains email shell, example OTP email structure.

- **interface/**: Stores Typescript interfaces for MongoDB models

- **middleware/**: Houses middleware functions such as JWT authentication.

- **models/**: Contains MongoDB models.

- **Services**/: This are functions that communicate to our database

- **subscriber**/:

- **utils/**: Houses helper functions used throughout the application.

### .env

This project utilizes dotenv in order to manage secrets to avoid hard coding. for backend, the .env file should be in backend folder with these variables. Note: SMTP is currently implemented with personal email 

    MONGO_DB_URI="mongodb+srv://dbAdmin:<PASSWORD>@gymtracker.5bhmp.mongodb.net/"
    NODE_ENV=development
    PORT=5000

    JWT="YOUR_JWT_ACCESS_TOKEN"
    JWT_REFRESH="YOUR_JWT_REFRESH_TOKEN"
    SMTP_PORT=
    SMTP_SERVICE=
    SMTP_MAIL=
    SMTP_PASSWORD=

### Get started developing

This sections describes how to create a new model, interface, CRUD operations & API endpoint.

#### Model & Interface (src/model & src/interface)

Create a model. This will be a model in the database describing how the data is structured. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
https://mongoosejs.com/docs/guide.html

    const exampleSchema = new Schema<IExample>({
        name: {
            type: String,
            ...
        }
    });
    export default model<IExample>('Example', exampleSchema)

In order to utilize Typescript, each model should use an Interface to define the values and types. Interface should be declared in src/interface. the naming convention is model.interface.ts.

    export interface IExample extends Document {
        name: string,
        ...
    };

#### Services (src/services)

Services provide CRUD operations to the model and exports these functions to be used in the application.

    export async function createExample(userData: Partial<IExample>) {
        try {
            const result = await ExampleModel.create(userdata);
            return {data: null, success: true}
        } catch (error) {
            return{data: null, success: false, error}
        }
    };

#### Validation (src/validation)

in order to validate incoming data, zod (https://zod.dev/). Zod ensures all user data adheres to the defined rules, helping catch bugs and potential issues before they become critical.
validation can be found under src/validation. follow auth.validation.ts style

    export const createExampleSchema = object({
        body: object({
            name: string({ required_error: "name is required" })
        }),
    });
    export type registerExampleInput = TypeOf<typeof createExampleSchema>["body"]

#### Controller (src/controller)

Main function of controllers are to handle requests from client. controllers use CRUD operations from Services to create functions to be used in endpoints.
API call functions are declared in src/controller. This file handles what each endpoint does. keep a similar file structure: src/controller/example/examplecontroller.ts

    //@desc signup
    //@method POST
    //@access public
    export const registerExample = asyncHandler(async (req: Request<object, object, registerExampleInput>, res: Response) => {
        const { name } = req.body
        await createExample({
            ...req.body,
            ...
        });
        res.status(201).json({ success: true, message: 'created new Example'});
    });

Create an endpoint in src/api/example/example.api.ts

import exampleSchema and example from validation and controller files to index.api. remember to add add AuthJWT if user is needed for this endpoint

## Endpoints

### user

http://localhost:5000/api/auth/register

    {
    "email"  :  "example@example.com",

    "password"  :  "examplePassword1234",

    "confirmPassword"  :  "examplePassword1234",

    "name"  :  "exampleName"
    }
    response: {"success": "true", "message": "Verification code sent to email"}

check ur email for OTP code. Currently, OTP code is also printed with the success message.

http://localhost:5000/api/auth/activate

    {
    "OTPCode"  :  "xxxxxx"  ,
    "email"  :  "example@example.com"
    }
    response: { "message":  "Verified successfully","success":  true }

http://localhost:5000/api/auth/login

        {
        "email":  "example@example.com",
        "password":"seven1024"
        }
        response:
        {
        "success":  true,
        "user":  {
        "_id":  "6704378e2011208abea1dfea",
        "email":  "example@example.com",
        "name":  "exampleName",
        "isActive":  true,
        "createdAt":  "2024-10-07T19:33:34.627Z",
        "updatedAt":  "2024-10-07T19:33:52.453Z",
        "__v":  0},
        "message":  "Logged in successfully",
        "accessToken":  "bearer token" }

Accesstoken is required from here to make api calls that require authentication. provide this token as header. if you are using Postman, set Auth Type to Bearer Token and provide the given token from this API call

### targetArea

http://localhost:5000/api/targetArea/create

    {
    "name": "ExampleName",
    "description": "ExampleDescription",
    "parent": "", // allowed to be empty
    "children": "" // empty upon creation
    }
    response: {"success": "true", "message": "TargetArea created successfully"}

### exercise

http://localhost:5000/api/exercise/register

    {
    "name": "",
    "description": "",
    "targetAreaId": "",
    "activityType": ""
    }

Accesstoken is required to make api calls that require authentication. provide this token as header. if you are using Postman, set Auth Type to Bearer Token and provide the given token from this API call. all fields are required

http://localhost:5000/api/exercise/edit

    {
    "exerciseId": "",
    "name": "",
    "description": "",
    "targetAreaId": "",
    "activityType": ""
    }

Accesstoken is required to make api calls that require authentication. provide this token as header. if you are using Postman, set Auth Type to Bearer Token and provide the given token from this API call. exerciseId is required, rest is optional

http://localhost:5000/api/session/register

    {
    "exercises": [
        {
        "exerciseId": "670707280f24f2f57a92b6f1",
        "sets": [
            {
            "reps": 10,
            "weight": 50,
            "duration": 30,
            "restTime": 60,
            "rpe": 7.5
            },
            {
            "reps": 8,
            "weight": 40,
            "rpe": 6
            }
        ],
        "notes": "Good session on arms."
        },
        {
        "exerciseId": "670707280f24f2f57a92b6f1",
        "sets": [
            {
            "reps": 12,
            "weight": 30,
            "rpe": 8
            }
        ],
        "notes": "Felt strong."
        }
    ],
    "totalDuration": 90,
    "notes": "Great workout overall!"
    }

exercises are passed as an array inside exercises, with exerciseId as the first element, followed by sets. sets are collected in an array, with sets[0] being the first set, etc. each exercise must have a valid exerciseId, and at least one set
