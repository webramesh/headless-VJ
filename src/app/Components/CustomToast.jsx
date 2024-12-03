const CustomToast = ({ message, className = '' }) => {
  return (
    <div className={`absolute bottom-6 md:bottom-8 left-52  text-white px-4 py-2 rounded-md ${className}`}>
      <div className="flex items-center justify-between">{message}</div>
    </div>
  );
};

export default CustomToast;
