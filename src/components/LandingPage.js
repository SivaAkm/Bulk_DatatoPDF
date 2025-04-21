import '../index.css';

import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-xl rounded-2xl max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Bulk Data PDF Builder
        </h1>
        <p className="text-gray-600 mb-6">
         Upload the Bulk data in Excel(.xlsx) and PDF Template.
        </p>
        <p className="text-gray-600 mb-6">
        Get the PDF Mailed within Minutes.
        </p>
        <button
          onClick={() => navigate("/UploadTemplate")}
          className="bg-yellow-400 text-black py-3 px-6 rounded-xl hover:bg-indigo-500 transition duration-200"
        >
         Let's Get Started
        </button>
      </div>
    </div>
  );
}
