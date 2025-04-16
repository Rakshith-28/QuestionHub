import React, { useState } from 'react';

const CreatePaper = () => {
  const [subject, setSubject] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [numOfQuestions, setNumOfQuestions] = useState('');
  const [markingScheme, setMarkingScheme] = useState('');
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');
  const [numOfQuestionsInSection, setNumOfQuestionsInSection] = useState('');
  const [questionsInSection, setQuestionsInSection] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleAddSection = () => {
    if (sectionName && numOfQuestionsInSection) {
      setSections([
        ...sections,
        { sectionName, numOfQuestionsInSection, questions: [] },
      ]);
      setSectionName('');
      setNumOfQuestionsInSection('');
    }
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setQuestionsInSection([...questionsInSection, newQuestion]);
      setNewQuestion('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paperData = {
      subject,
      totalMarks,
      sections: sections.map(section => ({
        ...section,
        questions: questionsInSection, // Attach questions to each section
      })),
    };
    console.log('Paper Data:', paperData);
    // Here you can send the `paperData` to your backend
  };

  return (
    <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create Question Paper</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subject */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter the subject"
            required
          />
        </div>

        {/* Total Marks */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Total Marks</label>
          <input
            type="number"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter the total marks"
            required
          />
        </div>

        {/* Question Type */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Question Type</label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Question Type</option>
            <option value="MCQ">Multiple Choice Questions</option>
            <option value="ShortAnswer">Short Answer Questions</option>
            <option value="LongAnswer">Long Answer Questions</option>
          </select>
        </div>

        {/* Add Question */}
        <div className="flex flex-col mb-4">
          <label className="font-medium text-gray-600">Enter Question</label>
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter the question"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleAddQuestion}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
        >
          Add Question
        </button>

        {/* Display Questions */}
        {questionsInSection.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">Questions</h3>
            <ul className="list-disc pl-5">
              {questionsInSection.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Create Question Paper
        </button>
      </form>
    </div>
  );
};

export default CreatePaper;
