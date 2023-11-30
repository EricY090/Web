import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-100 p-4 rounded-lg flex justify-between items-center border-b-4 border-purple-600">
      <h1 className="text-2xl font-bold text-purple-800">Kid Math!</h1>
      <ul className="flex">
        <li className="ml-4">
          <Link to="/" className="text-purple-800 hover:text-purple-600">
            Play
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to="/leaderboard-page"
            className="text-purple-800 hover:text-purple-600"
          >
            Leaderboard
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to="/second-page"
            className="text-purple-800 hover:text-purple-600"
          >
            Settings
          </Link>
        </li>
        {/* more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
