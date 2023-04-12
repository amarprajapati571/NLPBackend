const axios = require('axios')
const ShortJokes = require('./assets/json/shortjokes');

exports.CurrentDateTime = () =>{
        const now = new Date();
        const time = now.toLocaleTimeString();
        const date = now.toLocaleDateString();
        return `It is currently ${time} on ${date}.`;
}

exports.OnlyWeekname = ()=>{
    const date = new Date();
    const dayOfWeekName = date.toLocaleDateString('en-US', { weekday: 'long' });
   return `Today is ${dayOfWeekName} ` 
}

exports.addtion= (input)=> {
    console.log(input)
    const { a, b } = input.entities;
  const result = Number(a[0].value) + Number(b[0].value);
  return `The result is ${result}.`;
};
exports.minus= (input)=> {
    const { a, b } = input.entities;
  const result = Number(a[0].value) - Number(b[0].value);
  return `The result is ${result}.`;
};
exports.multiple= (input)=> {
    const { a, b } = input.entities;
  const result = Number(a[0].value) * Number(b[0].value);
  return `The result is ${result}.`;
};
exports.devison= (input)=> {
    const { a, b } = input.entities;
  const result = Number(a[0].value) / Number(b[0].value);
  return `The result is ${result}.`;
};

exports.RandomJokes = () =>{
    let Jokes = ShortJokes.ShortJokes;
    const randomIndex = Math.floor(Math.random() * Jokes.length);
    const randomObject = Jokes[randomIndex];
    return randomObject.Joke;
}

exports.weather = async(city)=>{
    try {
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},{country code}&appid=eae7187f6ae83c7163cfcc0ec9e7e3aa`;
      // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eae7187f6ae83c7163cfcc0ec9e7e3aa`
      // await axios({
      //   url:URL,
      //   method:"GET"
      // }).then((res)=>{
      //   return res;
      // })
    } catch (err) {
      console.log(err)
    }
}
