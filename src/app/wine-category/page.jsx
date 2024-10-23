import Navbar from '../Components/Navbar';
import WineCategoryItem from './components/WineCategoryItem';
import WineItem from './components/WineItem';
import CountryCategoryItem from './components/CountryCategoryItem';
import Footer from '../Components/Footer';
const Page = () => {
  return (
    <div className=" bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto max-w-6xl px-4  mt-10">
        <div className="">
          <div>
            <h3 className="text-left text-2xl font-bold inline-block border-b-orange-600 border-b-4">VinGuide</h3>
            <p className="text-center  text-gray-800 font-medium ">
              <span className="inline-block border-orange-600 border-b-2">Wines from all over the world</span>
            </p>

            {/* category */}

            <div className="grid grid-cols-4 overflow-x-auto md:grid-cols-8 gap-5 justify-items-between items-center mt-10  mx-auto text-center ">
              <WineCategoryItem isActive={true} />
              <WineCategoryItem isActive={false} />
              <WineCategoryItem isActive={false} />
              <WineCategoryItem isActive={false} />

              <CountryCategoryItem />
              <CountryCategoryItem />
              <CountryCategoryItem />
              <CountryCategoryItem />
            </div>
          </div>

          <hr className="h-px mt-4 bg-gray-200 border-0" />
        </div>

        <div className="mb-36">
          <h2 className="text-xl my-8">Red wine </h2>
          <div className="grid grid-cols-3 gap-5  md:grid-cols-4 lg:grid-cols-5 md:gap-10 justify-between items-center mx-auto ">
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />

            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
            <WineItem />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
