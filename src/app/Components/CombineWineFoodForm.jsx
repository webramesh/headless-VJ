import Link from 'next/link';

function CombineWineFoodForm() {
  return (
    <form className="my-3 md:my-5 text-sm lg:text-base">
      {/* Message */}
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2   font-bold text-gray-900">
          Beskriv maträtten du ska tillaga
          <span className="italic text-xs lg:text-sm  text-[#eb7272]">*</span>
        </label>
        <textarea
          id="message"
          rows="4"
          className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg  block w-full p-2.5"
        ></textarea>
      </div>

      {/* for saauce and accessories */}
      <div className="mb-4 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2">
          <label htmlFor="first_name" className="block mb-2   font-bold text-gray-900">
            Sås/såser
          </label>
          <input
            type="text"
            id="first_name"
            className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg w-full  p-2.5"
            required
          />
          <p className="  font-medium text-gray-900 text-xs lg:text-sm my-2">Beskriv sås/såser</p>
        </div>
        <div className="lg:w-1/2">
          <label htmlFor="first_name" className="block mb-2   font-bold text-gray-900">
            Tillbehör
          </label>
          <input
            type="text"
            id="last_name"
            className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg w-full  p-2.5"
            required
          />
          <p className="  font-medium text-gray-900 text-xs lg:text-sm my-2">Beskriv tillbehör till din maträtt.</p>
        </div>
      </div>

      {/* for seasonal and email */}
      <div className="mb-4 flex flex-col lg:flex-row gap-4 ">
        <div className="lg:w-1/2">
          <label htmlFor="first_name" className="block mb-2   font-bold text-gray-900">
            Smaksättning
          </label>
          <input
            type="text"
            id="first_name"
            className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg w-full  p-2.5"
            required
          />
          <p className="  font-medium text-gray-900 text-xs lg:text-sm my-2">
            Vilka kryddor kommer du primärt att använda?
          </p>
        </div>
        <div className="lg:w-1/2">
          <label htmlFor="first_name" className="block mb-2   font-bold text-gray-900">
            E-post
            <span className="italic text-xs lg:text-sm  text-[#eb7272]">*</span>
          </label>
          <input
            type="text"
            id="last_name"
            className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg w-full  p-2.5"
            required
          />
        </div>
      </div>

      {/* for name */}
      <div className="mb-4">
        <label htmlFor="first_name" className="block mb-2   font-bold text-gray-900">
          Namn
        </label>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="first_name"
              className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg w-full  p-2.5"
              required
            />
            <p className="  font-medium text-gray-900 text-xs lg:text-sm my-2">Förnamn</p>
          </div>
          <div className="lg:w-1/2">
            <input
              type="text"
              id="last_name"
              className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg w-full  p-2.5"
              required
            />
            <p className="font-medium text-gray-900 text-xs lg:text-sm my-2">Efternamn</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex gap-1">
          <input type="checkbox" />
          <label htmlFor="vehicle1">
            Jag godkänner tilldelningen av mina personuppgifter enligt &nbsp;
            <Link href="#" className="text-red-500">
              Integritetspolicy
            </Link>
          </label>
        </div>
        <div className="flex gap-1">
          <input type="checkbox" />
          <label htmlFor="vehicle2">Jag prenumererar på nyhetsbrevet</label>
        </div>
      </div>

      <button
        type="button"
        aria-label="Skicka formulär"
        className="focus:outline-none text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 text-sm"
      >
        Skicka
      </button>
    </form>
  );
}

export default CombineWineFoodForm;
