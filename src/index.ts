
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI('AIzaSyDcsKnxQGniMenmHSZhOEOq5iZE7_YJ1jY');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.use(express.json());

app.post('/api/v1/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await model.generateContent(prompt);
    res.json({ response: result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});