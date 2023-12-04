import { useState } from "react";

const Experience = () => {
  const [comments, setComments] = useState("");
  const [ratings, setRatings] = useState({
    field1: 0,
    field2: 0,
    // Add more fields as needed
  });

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleRatingChange = (field, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [field]: value,
    }));
  };

  const renderStarRating = (field) => {
    return (
      <div className="mb-4">
        <label className="block text-lg font-semibold text-purple-800 mb-2">
          {field}
        </label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => handleRatingChange(field, value)}
              className={`text-2xl cursor-pointer ${
                value <= ratings[field] ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of comments and ratings
    console.log("Comments:", comments);
    console.log("Ratings:", ratings);
    // Clear form fields
    setComments("");
    setRatings({
      field1: 0,
      field2: 0,
      // Add more fields as needed
    });
    // Show alert for submission
    alert("Request has been submitted!");
  };

  return (
    <div className="p-4 bg-purple-100 rounded-lg">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">
        Share Your Experience
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold text-purple-800">
            Would You like to share any comments? :
          </label>
          <textarea
            className="p-2 border-2 border-purple-300 rounded w-full"
            value={comments}
            onChange={handleCommentChange}
          />
        </div>
        {renderStarRating("Your Experience Today")}
        {renderStarRating("Ease of Application")}
        {/* more fields as needed */}
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Experience;
