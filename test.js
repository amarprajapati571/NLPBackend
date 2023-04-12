const natural = require('natural');
const NLPMethods = require('./nplMethods');
let cons = async()=>{
    let Data = await NLPMethods.weather('Jaipur')
    
console.log(Data);
}
cons()
// Today's weather is partly cloudy with a high of 22°C (72°F) and a low of 15°C (59°F). There is a chance of scattered showers in the afternoon, so be prepared with an umbrella. Winds will be light and variable with gusts up to 10 mph from the northwest.

// const {WordTokenizer, BrillPOSTagger, countInflector} = natural;
// const geo = require('natural').NounInflector;

// // Load the necessary data files for the tokenizer and tagger
// const lexicon = new natural.Lexicon('EN');
// const ruleSet = new natural.RuleSet('EN');
// const defaultCategory = 'N';

// // Create a tagger for English text
// const tagger = new BrillPOSTagger(lexicon, ruleSet, defaultCategory, null);

// // Tokenize the input text into words
// const tokenizer = new WordTokenizer();
// const words = tokenizer.tokenize('I live in New York City.');

// // Tag the words using the POS tagger
// const taggedWords = tagger.tag(words);

// // Extract the cities using the geo module
// let wordss = taggedWords.taggedWords;
// const cities = wordss.filter( data => data.tag === 'NN' || data.tag === 'NNP')
//   .map(tag => geo.singularize(tag.word))
//   // .filter((word) => geo.isCity(word));

// console.log(`Cities found: ${cities.join(', ')}`);
