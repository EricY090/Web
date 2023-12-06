import { useState, useEffect } from "react";
import AdditionModule from "../Components/AdditionModule";
import SubtractionModule from "../Components/SubtractionModule";
import MultiplicationModule from "../Components/MultiplicationModule";
import DivisionModule from "../Components/DivisionModule";
import StatusBar from "../Components/StatusBar";
import Timer from "../Components/Timer";
import Collapse from "../Components/Collapse";


const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [progress, setProgress] = useState({
    totalQuestions: 0,
    correctAnswers: 0,
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users, currentUser]);

  const handleUserChange = (userName) => {
    const existingUser = users.find((user) => user.name === userName);

    if (existingUser) {
      setCurrentUser(existingUser);
      setProgress(existingUser.progress);
    } else {
      const newUser = {
        name: userName,
        progress: {
          totalQuestions: 0,
          correctAnswers: 0,
        },
      };
      setUsers([...users, newUser]);
      setCurrentUser(newUser);
      setProgress(newUser.progress);
    }
  };

  const updateProgress = (isCorrect) => {
    setProgress((prevProgress) => ({
      totalQuestions: prevProgress.totalQuestions + 1,
      correctAnswers: isCorrect
        ? prevProgress.correctAnswers + 1
        : prevProgress.correctAnswers,
    }));

    if (currentUser) {
      const updatedUsers = users.map((user) =>
        user.name === currentUser.name
          ? { ...user, progress: { ...progress } }
          : user
      );
      setUsers(updatedUsers);
    }
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.username.value;
    handleUserChange(userName);
  };
  
  return (
    <div className="container mx-auto p-4">
      {currentUser ? (
        <>
          <Timer />
          <StatusBar
            correctAnswers={progress.correctAnswers}
            totalQuestions={progress.totalQuestions}
          />

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Collapse module={<AdditionModule updateProgress={updateProgress}></AdditionModule>} title = {"ADDITION"}> </Collapse>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Collapse module={<SubtractionModule updateProgress={updateProgress}></SubtractionModule>} title = {"SUBTRACTION"}> </Collapse>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Collapse module={<MultiplicationModule updateProgress={updateProgress}></MultiplicationModule>} title = {"MULTIPLICATION"}> </Collapse>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Collapse module={<DivisionModule updateProgress={updateProgress}></DivisionModule>} title = {"DIVISION"}> </Collapse>
            </div>
          </div>
        </>
      ) : (
        <form onSubmit={handleNameSubmit} className="my-4">
          <label
            htmlFor="username"
            className="block mb-2 text-lg font-bold text-purple-300"
          >
            Enter your name:
          </label>
          <div className="flex">
            <input
              type="text"
              id="username"
              name="username"
              required
              className="border border-gray-300 px-3 py-2 mr-2 w-40 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HomePage;
