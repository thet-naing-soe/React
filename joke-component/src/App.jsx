import Joke from "./components/Joke";
import jokesData from "./api/jokesData";

function App() {
  const jokeElements = jokesData.map((joke, index) => {
    return <Joke key={index} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <main>{jokeElements}</main>;
}

export default App;
