const AuthorHero = ({ title }) => {
  return (
    <div>
      <div className=" bg-gray-50 h-36 flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-center">{title}</h1>
      </div>
    </div>
  );
};
export default AuthorHero;
