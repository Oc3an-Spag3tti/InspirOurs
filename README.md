# Project Setup and Run Instructions

To run the project, you need to follow a few steps to start both the frontend and the backend.

## 1. Running the Frontend

1. Open the terminal and navigate to the frontend directory:
   ```bash
   cd src/main/java/com/example/demo/frontend
   ```

2. Make sure all the frontend dependencies are installed by running:
   ```bash
   npm install
   ```

3. After the dependencies are installed, start the frontend with:
   ```bash
   npm start
   ```
   This will start the frontend server, usually accessible at [http://localhost:3000](http://localhost:3000).

## 2. Running the Backend (Spring Boot)

1. To run the backend, you need to use IntelliJ IDEA or another Java IDE. Open the project in your IDE.

2. Navigate to the `DemoApplication.java` file, located at:
   ```
   src/main/java/com/example/demo/DemoApplication.java
   ```

3. Run the application using your IDE's built-in functionality. For IntelliJ IDEA:
    - Open the `DemoApplication.java` file.
    - Click the green arrow next to the `main` method or use the shortcut `Shift + F10` to run the application.

   After running the backend, it will be available on the port specified in the application's configuration (by default, it's usually [http://localhost:8080](http://localhost:8080)).

