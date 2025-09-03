const Modal = ({ isModelopen, setModelopen, children }) => {
  if (!isModelopen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 opacity-91 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-md ">
        <button
          className="absolute top-4 right-4 text-gray-300 text-3xl"
          onClick={() => setModelopen(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
