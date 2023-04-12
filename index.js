const { NlpManager } = require('node-nlp');
const XLSX = require('xlsx');
const NLPMethods = require('./nplMethods');
const manager = new NlpManager({ languages: ['en'], forceNER: true });
const regex = /NLPMethods\./;

manager.addNamedEntityText('person', 'John Doe', ['en']);
const workbook = XLSX.readFile('questions.xlsx');
const Questions = workbook.SheetNames[0];
const Answers = workbook.SheetNames[1];
const Questionworksheet = workbook.Sheets[Questions];
const Answerworksheet = workbook.Sheets[Answers];
// console.log(sheetName)
const QuestiontrainingData = XLSX.utils.sheet_to_json(Questionworksheet);
const AnswertrainingData = XLSX.utils.sheet_to_json(Answerworksheet);

QuestiontrainingData.forEach(async(data) => {
  // console.log(data)
  await manager.addDocument('en', data.input, data.output);
});
AnswertrainingData.forEach(async(data)=>{
  // console.log(data)
 await manager.addAnswer('en', data.input, regex.test(data.output)?eval(`${data.output}`):data.output);
})
manager.addNamedEntityText('number', 'sys.number');

manager.addDocument('en', 'I want {number} apples', 'buy-apples');
manager.addDocument('en', '.*', 'None');
manager.addAnswer('en', 'None', 'Sorry, I did not understand your question. Please try again.');



// Train and save the model.
// exports.Main = async(Question) => {
//   console.log(Question)
//  await manager.train().then(() => {
//     manager.save();
//     // console.log('Model trained and saved');
  
//     // Step 5: Use the trained model to recognize user input and provide a response
//     const input = 'I want 5 apples';
//     manager.process('en', Question).then((result) => {
//         console.log(result)
//       const { number } = result.entities;
      
//         return {
//                     data:result.answer,
//                     message:"your answer"
//                 } 
//     });
//   });
// };

exports.Main = async(Question) => {
    // console.log(Question)
    await manager.train();
    manager.save();
    const response = await manager.process('en', Question);
        let result =  {
            data:response.answer,
            message:"your answer"
        } 
        // console.log(result)
        return result;
};
// exports.Main;

