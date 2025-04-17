import React, { useState } from "react";

const Dashboard = () => {
  // State for subject and question types
  const [subjects, setSubjects] = useState([]);
  const [questionTypes, setQuestionTypes] = useState({
    mcq: false,
    short: false,
    long: false,
  });

  const [questionData, setQuestionData] = useState([]);

  // Handler for subject selection
  const handleSubjectChange = (e) => {
    const selectedSubjects = Array.from(e.target.selectedOptions, (option) => option.value);
    setSubjects(selectedSubjects);
  };

  // Handler for question type selection
  const handleQuestionTypeChange = (e) => {
    const { name, checked } = e.target;
    setQuestionTypes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Handler to add a new question
  const handleAddQuestion = () => {
    setQuestionData([...questionData, { type: "", question: "", options: [] }]);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Question Paper Generator</h1>
        <p className="text-lg text-gray-600">Create your custom question papers easily</p>
      </header>

      {/* Subject Selection */}
      <div className="mb-6">
        <label htmlFor="subjects" className="block text-lg font-medium mb-2">Select Subjects</label>
        <select
          id="subjects"
          multiple
          value={subjects}
          onChange={handleSubjectChange}
          className="w-full p-2 border rounded-md shadow-sm"
        >
          <option value="math">Mathematics</option>
          <option value="english">English</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="history">History</option>
        </select>
      </div>

      {/* Question Type Selection */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Question Types</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="mcq"
              checked={questionTypes.mcq}
              onChange={handleQuestionTypeChange}
              className="mr-2"
            />
            <label>MCQ</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="short"
              checked={questionTypes.short}
              onChange={handleQuestionTypeChange}
              className="mr-2"
            />
            <label>Short Answer</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="long"
              checked={questionTypes.long}
              onChange={handleQuestionTypeChange}
              className="mr-2"
            />
            <label>Long Answer</label>
          </div>
        </div>
      </div>

      {/* Question Entry */}
      <div className="mb-6">
        <button
          onClick={handleAddQuestion}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md"
        >
          Add Question
        </button>
        <div className="mt-4">
          {questionData.map((_, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2">Question {index + 1}</label>
              <textarea
                placeholder="Enter your question"
                className="w-full p-2 border rounded-md shadow-sm"
              ></textarea>
              {questionTypes.mcq && (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Option A"
                    className="w-full p-2 mb-2 border rounded-md shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Option B"
                    className="w-full p-2 mb-2 border rounded-md shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Option C"
                    className="w-full p-2 mb-2 border rounded-md shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Option D"
                    className="w-full p-2 mb-2 border rounded-md shadow-sm"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2025 Question Paper Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
