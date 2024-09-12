const generateRegix = require('../src/autoGenerateRegix/generateRegix');
const GenerateContent = require('../util/openAi');

jest.mock('../util/openAi');

describe('generateRegix', () => {
    const USER_API_KEY = "fake_api_key";

    it('should return a generated regular expression based on user prompt', async () => {
        // Mock the responses for GenerateContent
        GenerateContent.mockResolvedValueOnce('Initial prompt response')
            .mockResolvedValueOnce('new RegExp("^\\w+$")');

        const result = await generateRegix('Please generate a regex to match alphanumeric characters', USER_API_KEY);

        expect(GenerateContent).toHaveBeenCalledWith('I give regix description and you generate appropriate regular expression. Note give only regix and in the form of new RegExp', USER_API_KEY);
        expect(GenerateContent).toHaveBeenCalledWith('Please generate a regex to match alphanumeric characters', USER_API_KEY);
        expect(result).toBe('new RegExp("^\\w+$")');
    });
});