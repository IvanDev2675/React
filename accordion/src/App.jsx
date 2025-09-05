import data from "./data";
import { Question } from "./Question";
import { useState } from "react";

const App = () => {
const [questions, setQuestions] = useState(data);


  return <main>

<Question questions={questions} />
  </main>;
};
export default App;
