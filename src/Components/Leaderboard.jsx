import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Sort users by correctAnswers in descending order
    const sortedUsers = storedUsers.sort(
      (a, b) => b.progress.correctAnswers - a.progress.correctAnswers
    );

    setLeaderboardData(sortedUsers);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 font-semibold">Username</th>
            <th className="py-2 px-4 bg-gray-200 font-semibold">
              Correct Answers
            </th>
            <th className="py-2 px-4 bg-gray-200 font-semibold">
              Total Questions
            </th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.progress.correctAnswers}</td>
              <td className="py-2 px-4">{user.progress.totalQuestions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
