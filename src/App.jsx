import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizProvider from "./context/quizcontext";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
