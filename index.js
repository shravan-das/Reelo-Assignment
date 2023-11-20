const express = require('express');
const app = express();
const PORT = 3000;

// Sample Question Store
const questionStore = require('./question');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/generate-paper', (req, res) => {
  try {
   
    const totalMarks = parseInt(req.body.totalMarks);
    const difficultyDistribution = req.body.difficultyDistribution;
    const questionPaper = generateQuestionPaper(totalMarks, difficultyDistribution);

    res.json(questionPaper);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


function generateQuestionPaper(totalMarks, difficultyDistribution) {
  const questionPaper = [];

  for (const difficulty in difficultyDistribution) {
    const percentage = difficultyDistribution[difficulty];
    const difficultyQuestions = filterQuestionsByDifficulty(difficulty, percentage);
    questionPaper.push(...difficultyQuestions);
  }

  
  shuffleArray(questionPaper);

  
  const trimmedPaper = trimPaperToTotalMarks(questionPaper, totalMarks);

  return trimmedPaper;
}


function filterQuestionsByDifficulty(difficulty, percentage) {
  const filteredQuestions = questionStore.filter(question => question.difficulty === difficulty);
  const numberOfQuestions = Math.ceil((percentage / 100) * filteredQuestions.length);
  return filteredQuestions.slice(0, numberOfQuestions);
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function trimPaperToTotalMarks(paper, totalMarks) {
  let currentTotalMarks = 0;
  const trimmedPaper = [];

  for (const question of paper) {
    if (currentTotalMarks + question.marks <= totalMarks) {
      trimmedPaper.push(question);
      currentTotalMarks += question.marks;
    } else {
      break;
    }
  }

  return trimmedPaper;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
