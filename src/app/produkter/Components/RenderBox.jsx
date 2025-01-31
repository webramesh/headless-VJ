function RenderBox({ title, children }) {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 justify-center bg-gray-50">
      <div className="">{title}</div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      {children}
    </div>
  );
}

export default RenderBox;
