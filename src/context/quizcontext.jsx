import { createContext, useState } from "react";
import { data } from "../assests/data";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  console.log(children);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);

  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        question,
        setQuestion,
        index,
        setIndex,
        data,
        lock,
        setLock,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
