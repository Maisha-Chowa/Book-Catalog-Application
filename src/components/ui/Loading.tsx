const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full
        text-indigo-900"
        role="status"
      >
        <span className="text-indigo-900 visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
