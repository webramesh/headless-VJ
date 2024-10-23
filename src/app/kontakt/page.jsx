import React from 'react';
import AuthorHero from '../author/Components/AuthorHero';
import Navbar from '../Components/Navbar';
import ContactForm from '../Components/contact/ContactForm.jsx';
import ContactInfo from '../Components/contact/ContactInfo.jsx';
import Map from '../Components/Map';
import Footer from '../Components/Footer';
import Subscription from '../Components/Subscription';

const page = () => {
  return (
    <div className="">
      <Navbar />
      {/* <AuthorHero title={"KONTAKT"} /> */}
      <div className="container mx-auto max-w-6xl">
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-bold  text-center mb-10 ">KONTAKT</h2>
        </div>
        <p className="text-center mb-16 font-thin md:max-w-4xl  text-gray-600 text-sm mx-4 md:mx-auto">
          För att vinjournalen ska vara en plats där alla vinfrågor besvaras är det viktigt att ni besökare bidrar med
          kommentarer och frågor. Vi bryr oss om era förslag och är tacksamma för feedback. Vare sig du inte hittar
          svaret på just din vinfråga eller vill påpeka att du gillar ett visst ämne, hör gärna av dig!
        </p>
        {/* <h2 className="text-xl md:text-2xl font-bold text-center mb-10 ">
          KONTAKTPERSON
        </h2> */}
        <div className="md:grid gap-12  md:grid-cols-2 mx-4 md:mx-auto justify-between">
          <div className="order-1 md:order-2 my-10">
            <ContactInfo />
          </div>
          <div className="order-2 md:order-1 my-10">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="container md:mx-auto max-w-6xl mt-16 ">
        <div className="h-[50vh] w-full mx-4 md:mx-auto">
          <Map />
        </div>

        <div className="block ">
          <Subscription />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
