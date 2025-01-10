const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
//const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI('AIzaSyDcsKnxQGniMenmHSZhOEOq5iZE7_YJ1jY');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export { model };