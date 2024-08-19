import Header from "./Header";
import Quiz from "./Quiz";
import { networkingQuestions } from "./constants";

function App() {
  return (
    <>
      <Header />
      <Quiz questions={networkingQuestions.questions} />
    </>
  );
}

export default App;
