const { GoogleGenerativeAI } = require("@google/generative-ai");

// futher use

// const image = {
//   inlineData: {
//     data: Buffer.from(fs.readFileSync("cookie.png")).toString("base64"),
//     mimeType: "image/png",
//   },
// };

const GenerateContent = async (prompt) => {
  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const response = result.response.text();
  console.log(response)
  return response;
}
module.exports = GenerateContent;
