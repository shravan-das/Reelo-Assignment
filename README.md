## Question Paper Generator

### Setup:

1. **Install Node.js:**
   - Download and install Node.js from [nodejs.org](https://nodejs.org).

2. **Clone the Repository:**
git clone https://github.com/shravan-das/Reelo-Assignment.git

3. **Navigate to the Project Directory:**
cd question-paper-generator



4. **Install Dependencies:**
npm install

### Demo

https://github.com/shravan-das/Reelo-Assignment/assets/100745475/205194ff-506b-47dc-bfb1-8aa2f9a9a645




### Usage:

1. **Start the Application:**
npm start

This will start the server on http://localhost:3000.

2. **Access the Generator:**
Open your web browser and go to http://localhost:3000 to access the Question Paper Generator.

3. **Fill in the Form:**
- Total Marks
- Easy Percentage
- Medium Percentage
- Hard Percentage

4. **Generate Question Paper:**
Click the "Generate Question Paper" button to receive a dynamically generated question paper.

### Files:

- **index.js:** Node.js server code.
- **question.js:** Sample question store in JSON format.
- **public/index.html:** HTML form for user input and displaying the generated question paper.

### Customization:

Feel free to customize the question store (question.js) by adding more questions or modifying existing ones. The application currently supports questions with fields like question, subject, topic, difficulty, and marks.

### Additional Features:

- The generated question paper is dynamically shuffled and trimmed to match the specified total marks.
- Error handling for invalid user input.

### Author:

Shravan Das

