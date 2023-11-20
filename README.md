Question Paper Generator

Setup:

1. Install Node.js:
   - Download and install Node.js from nodejs.org.

2. Clone the Repository:
   git clone https://github.com/your-username/question-paper-generator.git

3. Navigate to the Project Directory:
   cd question-paper-generator

4. Install Dependencies:
   npm install

Usage:

1. Start the Application:
   npm start
   This will start the server on http://localhost:3000.

2. Access the Generator:
   Open your web browser and go to http://localhost:3000 to access the Question Paper Generator.

3. Fill in the Form:
   - Total Marks
   - Easy Percentage
   - Medium Percentage
   - Hard Percentage

4. Generate Question Paper:
   Click the "Generate Question Paper" button to receive a dynamically generated question paper.

Files:

- index.js: Node.js server code.
- question.js: Sample question store in JSON format.
- public/index.html: HTML form for user input and displaying the generated question paper.

Customization:

Feel free to customize the question store (question.js) by adding more questions or modifying existing ones. The application currently supports questions with fields like question, subject, topic, difficulty, and marks.

Additional Features:

- The generated question paper is dynamically shuffled and trimmed to match the specified total marks.
- Error handling for invalid user input.

Author:

Your Name

License:

This project is licensed under the MIT License - see the LICENSE file for details.
