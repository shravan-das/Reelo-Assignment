Navigate to the project directory:

bash
Copy code
cd question-paper-generator
Install dependencies:

bash
Copy code
npm install
Usage
Start the application:

bash
Copy code
npm start
This will start the server on http://localhost:3000.

Open your web browser and go to http://localhost:3000 to access the Question Paper Generator.

Fill in the form with the required information:

Total Marks
Easy Percentage
Medium Percentage
Hard Percentage
Click the "Generate Question Paper" button to receive a dynamically generated question paper.

Files
index.js: Node.js server code.
question.js: Sample question store in JSON format.
public/index.html: HTML form for user input and displaying the generated question paper.
Customization
Feel free to customize the question store (question.js) by adding more questions or modifying existing ones. The application currently supports questions with fields like question, subject, topic, difficulty, and marks.

Additional Features
The generated question paper is dynamically shuffled and trimmed to match the specified total marks.
Error handling for invalid user input.
Author
Your Name
