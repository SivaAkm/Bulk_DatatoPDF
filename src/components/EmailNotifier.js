import '../index.css';


export default function EmailNotifier() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-green-200 shadow-md rounded-2xl hover:bg-yellow-200 max-w-xl">
       
        <p className="text-black mb-6">
          Converted PDF will be sent to the respective mail Ids within 5 Minutes.
        </p>
        <p className="text-black mb-6">
         Please close the Tab Manually.
        </p>
      </div>
    </div>
  );
}
