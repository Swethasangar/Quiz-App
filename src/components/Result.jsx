import { useContext } from "react";
import { QuizContext } from "../context/quizcontext";
import { useNavigate } from "react-router-dom";
const Result = () => {
  const { score, data, setLock, setQuestion, setScore, setIndex } =
    useContext(QuizContext);

  const navigate = useNavigate();

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    navigate("/");
  };
  return (
    <>
      <main className="flex justify-center items-center h-screen ">
        <section className="container rounded-md shadow-2xl">
          <h1 className="text-2xl font-medium">Result</h1>
          <hr className="border-none bg-sky-600 mt-3"></hr>
          <h1 className="mt-3">
            Your Score {score} out of {data.length}
          </h1>
          <button
            className="ml-40 mt-4 border w-44 px-2 py-2 rounded-xl bg-sky-600 text-white cursor-pointer"
            onClick={reset}
          >
            Reset
          </button>
        </section>
      </main>
    </>
  );
};
export default Result;
