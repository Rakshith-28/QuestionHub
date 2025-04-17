import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

const Dashboard = () => {
  const [collegeDetails, setCollegeDetails] = useState({
    collegeName: "",
    address: "",
    subject: "",
    subjectCode: "",
    examDate: "",
  });

  const [sections, setSections] = useState([]);
  const previewRef = useRef(); // 👈 Add reference to preview section

  const handleCollegeChange = (e) => {
    const { name, value } = e.target;
    setCollegeDetails({ ...collegeDetails, [name]: value });
  };

  const addSection = () => {
    const newSection = {
      title: "",
      type: "",
      numQuestions: 1,
      marksPerQuestion: 1,
      questions: [],
    };
    setSections([...sections, newSection]);
  };

  const updateSection = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;

    if (field === "type") {
      updatedSections[index].questions = [];
    }

    setSections(updatedSections);
  };

  const handleOptionChange = (index, questionIndex, option, value) => {
    const updatedSections = [...sections];
    if (!updatedSections[index].questions[questionIndex]) {
      updatedSections[index].questions[questionIndex] = {
        questionText: "",
        options: ["", "", "", ""],
      };
    }
    updatedSections[index].questions[questionIndex].options[option] = value;
    setSections(updatedSections);
  };

  const generatePDF = () => {
    const element = previewRef.current;
    const opt = {
      margin: 0.5,
      filename: "question-paper.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Question Paper Generator</h1>
        <p className="text-gray-600 text-lg">Create and customize question papers with ease</p>
      </header>

      {/* College & Subject Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {["collegeName", "address", "subject", "subjectCode", "examDate"].map((field) => (
          <div key={field}>
            <label className="block font-semibold mb-1 capitalize">
              {field === "examDate" ? "Exam Date" : field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type={field === "examDate" ? "date" : "text"}
              name={field}
              value={collegeDetails[field]}
              onChange={handleCollegeChange}
              className="w-full p-2 border rounded-md shadow-sm"
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="mb-6">
        <button
          onClick={addSection}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          ➕ Add Section
        </button>
      </div>

      {/* Section Builder */}
      {sections.map((section, index) => (
        <div key={index} className="border p-4 rounded-md mb-6 shadow-md bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Section Title (e.g., MCQ, Part A)"
              value={section.title}
              onChange={(e) => updateSection(index, "title", e.target.value)}
              className="p-2 border rounded-md"
            />
            <select
              value={section.type}
              onChange={(e) => updateSection(index, "type", e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="">Select Question Type</option>
              <option value="mcq">MCQ</option>
              <option value="short">Short Answer</option>
              <option value="long">Long Answer</option>
            </select>
            <input
              type="number"
              min={1}
              value={section.numQuestions}
              onChange={(e) =>
                updateSection(index, "numQuestions", parseInt(e.target.value))
              }
              className="p-2 border rounded-md"
              placeholder="Number of Questions"
            />
            <input
              type="number"
              min={1}
              value={section.marksPerQuestion}
              onChange={(e) =>
                updateSection(index, "marksPerQuestion", parseInt(e.target.value))
              }
              className="p-2 border rounded-md"
              placeholder="Marks per Question"
            />
          </div>

          {/* Add Questions */}
          {section.type && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Add Questions:</h4>
              {[...Array(section.numQuestions)].map((_, qIndex) => {
                if (!section.questions[qIndex]) {
                  const newQuestions = [...section.questions];
                  newQuestions[qIndex] = {
                    questionText: "",
                    options: section.type === "mcq" ? ["", "", "", ""] : [],
                  };
                  setSections((prev) => {
                    const updated = [...prev];
                    updated[index].questions = newQuestions;
                    return updated;
                  });
                }

                return (
                  <div key={qIndex} className="mb-4 p-3 border rounded bg-gray-50">
                    <label className="block mb-1 font-medium">
                      Question {qIndex + 1}
                    </label>
                    {section.type === "mcq" && (
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Enter your question"
                          value={section.questions[qIndex]?.questionText || ""}
                          onChange={(e) => {
                            const updated = [...sections];
                            updated[index].questions[qIndex].questionText = e.target.value;
                            setSections(updated);
                          }}
                          className="p-2 border rounded-md w-full"
                        />
                        {["A", "B", "C", "D"].map((option, idx) => (
                          <input
                            key={idx}
                            type="text"
                            placeholder={`Option ${option}`}
                            value={section.questions[qIndex]?.options[idx] || ""}
                            onChange={(e) =>
                              handleOptionChange(index, qIndex, idx, e.target.value)
                            }
                            className="p-2 border rounded-md w-full"
                          />
                        ))}
                      </div>
                    )}
                    {(section.type === "short" || section.type === "long") && (
                      <input
                        type="text"
                        placeholder="Enter your question"
                        value={section.questions[qIndex]?.questionText || ""}
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[index].questions[qIndex].questionText = e.target.value;
                          setSections(updated);
                        }}
                        className="p-2 border rounded-md w-full"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}

      {/* Preview Section (Used for PDF too) */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">📄 Question Paper Preview</h2>
        <div ref={previewRef} className="border p-6 rounded-lg bg-white shadow text-black">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold">{collegeDetails.collegeName}</h3>
            <p className="text-gray-700">{collegeDetails.address}</p>
            <p className="mt-2">
              <strong>Subject:</strong> {collegeDetails.subject} |{" "}
              <strong>Code:</strong> {collegeDetails.subjectCode}
            </p>
            <p>
              <strong>Date:</strong> {collegeDetails.examDate}
            </p>
          </div>

          {sections.map((sec, secIndex) => (
            <div key={secIndex} className="mb-8">
              <div className="text-center my-4 py-2 border-b-2 border-t-2">
                <h4 className="font-bold text-lg">{sec.title}</h4>
              </div>

              <div className="pl-6 space-y-4">
                {sec.questions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-4">
                    <p className="font-medium">
                      {qIndex + 1}. {q.questionText} ({sec.marksPerQuestion} marks)
                    </p>
                    {q.options && q.options.some((opt) => opt) && (
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        {q.options.map(
                          (opt, oIdx) =>
                            opt && (
                              <li key={oIdx}>
                                {String.fromCharCode(65 + oIdx)}. {opt}
                              </li>
                            )
                        )}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Download Button */}
      <div className="text-center mt-6">
        <button
          onClick={generatePDF}
          className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md"
        >
          ⬇️ Download PDF
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-10">
        <p>&copy; 2025 Question Paper Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
