import './styles/App.scss';
import Button from '@mui/material/Button';
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '952f636cd0msha0564ecc5a311f8p1c3b0ajsn950cbe068bb5',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function App() {
  return (
    <div className="App">
      <h1>Frame Fitness</h1>
      <Button className='button' variant="contained">MUI button</Button>
    </div>
  );
}

export default App;
