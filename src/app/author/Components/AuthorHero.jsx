const AuthorHero = ({ title }) => {
    return (
        <div>
            <div className="container mx-auto bg-[#b0b0b0] h-36 flex text-white justify-center items-center">
                <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</h1>
            </div>
        </div>
    );
};
export default AuthorHero;
