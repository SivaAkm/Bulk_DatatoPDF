
import './style.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const UploadTemplate = () => {
    const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [Alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [toast, setToast] = useState({ message: "", type: "" });


  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.name.endsWith('.html')) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
    } else {
      showToast("Please upload .html File only.", "error");
    }
    setAlert({ show: false, message: '', type: '' }); // clear alert on change
  };

  const handleUpload = () => {
    if (!file) return showToast('No file selected.', "error");

    // Here you can upload to backend using FormData if needed
    setFormData.file=file

    console.log('Uploading:', file);
    showToast("File uploaded successfully!", "success");
    // You can use fetch/axios to send `formData` to server here
  };

  
  const [formData, setFormData] = useState({
    file:{}
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    fileName ?  onSubmitPersonalDetails() : setAlert({ show: true, message: 'Please upload a .vm file!', type: 'error' });
    ;
   
    // You can navigate or store this data
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const onSubmitPersonalDetails = async () =>{
    const formDatatoSend = new FormData();
    formDatatoSend.append("file", file); 
    try {
      const response = await fetch("https://templategeneration-production.up.railway.app/api/documents/upload-template", {
        method: "POST",
        body: formDatatoSend,
      });

      const data = await response.json();
      console.log("Upload Response:", data);

      if (!response.ok) {
        // 🔴 Handle client/server error responses
        if (response.status >= 500) {
          showToast("Server error. Please try again later.", "error");
        } else if (response.status >= 400) {
          showToast(data.status+" " + data.error+" "+data.message, "error");
        }
        return;
      }
      
     showToast("File uploaded successfully!", "success");
     navigate("/UploadData")
    } catch (error) {
      console.error("Upload Error:", error);
      showToast("Something went wrong during upload.", "error");
    }

   
  }
  const navigate = useNavigate();

  return (
   <div>
     {/* Toast */}
     {toast.message && (
        <div
          className={`fixed bottom-6 right-6 px-4 py-2 rounded shadow-lg text-white transition-all duration-300 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
         )}
    <div className="text-center p-8 bg-white flex justify-center">
        <p className="text-2xl font-bold text-gray-800 mb-4 w-fit ">
        Upload your Pdf Template in Html(.html) format
        </p>
        </div>
          <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Upload .html File</h2>

      <input
        type="file"
        accept=".html"
        onChange={handleFileChange}
        className="mb-4"
      />

      {fileName && (
        <div className="text-green-600 mb-2">Selected: {fileName}</div>
      )}
 {Alert.show && (
        <div
          className={`mb-4 px-4 py-2 rounded ${
            Alert.type === 'success'
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}
        >
          {Alert.message}
        </div>
      )}
      <button
        onClick={handleUpload}
        className="bg-yellow-400 text-black py-2 px-4 rounded-xl hover:bg-indigo-500"
      >
        Upload
      </button>
    </div>
    <br/>
    <div className='flex justify-center'>
          <button
            type="submit" onClick={handleSubmit}
            className="w-fit  bg-yellow-400 text-black py-2 px-1 rounded-xl hover:bg-indigo-500 transition-all duration-300 "
          >
            Save & Continue
          </button>
          </div>
       </div>

  );
};

export default UploadTemplate;


