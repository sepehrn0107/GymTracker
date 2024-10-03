# GymTracker
Application to track workouts

# Backend
## Getting Started
navigate to backend folder and run following command to install needed dependencies and run server: 

    npm install && npm start
note: This project uses mongodb Atlas. in order to connect to database, developers need to be added to database. contact repo owner

### Project Structure

 -    **public/**: This directory stores static files such as images, CSS, and JavaScript files.
 
-   **src/**: This directory contains all the source code for the application.

-   **api/**: Contains API endpoints or routes and their respective controllers.

-   **config/**: Houses configuration files such as Multer, MongoDB connection, cloudinary configuration, etc.

-   **controllers/**: Contains feature-specific controllers.

-   **errors/**: Contains error handling middleware.

-   **loader/**: Contains app.ts and bootstrap.

-   **logs/**: Contains logs from morgan & Winston.

-   **mails/**: Contains email shell, example OTP email structure.

-   **interface/**: Stores Typescript interfaces for MongoDB models

-   **middleware/**: Houses middleware functions such as JWT authentication.

-   **models/**: Contains MongoDB models.

-   **Services**/: This are functions that communicate to our database

-   **subscriber**/: 

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

### Get started developing
This sections describes how to create a new model, interface, CRUD operations & API endpoint.

#### Model & Interface (src/model & src/interface) 
Create a model. This will be a model in the database describing how the data is structures. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
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

#### Validation (src/validation)
in order to validate incoming data, zod (https://zod.dev/). Zod ensures all user data adheres to the defined rules, helping catch bugs and potential issues before they become critical.

    export const createExampleSchema = object({
        body: object({
            name: string({ required_error: "name is required" })
        }),
    });
    export type registerExampleInput = TypeOf<typeof createExampleSchema>["body"]


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
    
#### Controller (src/controller)
Main function of controllers are to handle requests from client. controllers use CRUD operations from Services to create functions to be used in endpoints.

    //@desc signup
    //@method POST
    //@access public
    export const registerExample = asyncHandler(async (req: Request<object, object, registerExampleInput>, res: Response) => {
        const { name } = req.body
        await findAllExample({
            ...req.body,
            ...
        });
        res.status(201).json({ success: true, message: 'created new Example'});
    });