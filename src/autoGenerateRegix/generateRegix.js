require("dotenv").config();
const GenerateContent = require("../../util/openAi");

const INTIAL_PROMPT = "I give regix description and you generate appropriate regular expression. Note give only regix and in the form of new RegExp";

const generateRegix = async (userPrompt, USER_API_KEY) => {
    // First prompt for instruction
    const initialResponse = await GenerateContent(INTIAL_PROMPT, USER_API_KEY);
    
    // Use the user's prompt to generate a regular expression
    const finalResponse = await GenerateContent(userPrompt, USER_API_KEY);

    return finalResponse;
}

module.exports = generateRegix;
