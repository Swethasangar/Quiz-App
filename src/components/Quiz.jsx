import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/quizcontext";

const Quiz = () => {
  let {
    setScore,
    question,
    setQuestion,
    index,
    setIndex,
    data,
    lock,
    setLock,
  } = useContext(QuizContext);

  const navigate = useNavigate();

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    // console.log(checkAns)
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("Correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("Wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("Correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("Wrong");
        option.current.classList.remove("Correct");
        return null;
      });
    }
  };

  return (
    <main className="flex justify-center items-center h-screen ">
      <section className="container rounded-md shadow-2xl">
        <h1 className="text-2xl font-medium">Quiz App</h1>
        <hr className="border-none bg-sky-600 mt-3"></hr>

        <div>
          <h1 className="text-xl mt-3">
            {index + 1}.{question.question}
          </h1>

          <ul className="list-disc mt-3">
            <li
              ref={option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.option3}
            </li>
            <li
              ref={option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
            >
              {question.option4}
            </li>
          </ul>

          <button
            className="ml-40 mt-4 border w-44 px-2 py-2 rounded-xl bg-sky-600 text-white cursor-pointer"
            onClick={() => {
              if (index === data.length - 1) {
                navigate("/result");
              } else {
                next();
              }
            }}
          >
            {index === data.length - 1 ? "Finish" : "Next"}
          </button>

          <div className="mt-3 ml-48">
            {index + 1} of {data.length} Questions
          </div>
        </div>
      </section>
    </main>
  );
};
export default Quiz;
