function JoinTeamForm() {
    return (
        <>
            <h2 className="text-xl lg:text-2xl my-2 lg:my-4 font-semibold">
                Vill du vara med i vårt team?
            </h2>
            <p className="text-sm lg:text-base mb-1 lg:mb-2">
                Vi söker nu skribenter och vinprovare
            </p>
            <form className="my-3 md:my-5 text-sm lg:text-base">
                {/* for name */}
                <div className="mb-4">
                    <label htmlFor="first_name" className="block mb-2   font-medium text-gray-900">
                        Name{' '}
                        <span className="italic text-xs lg:text-sm  text-[#eb7272]">
                            (Obligatoriskt)
                        </span>
                    </label>

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <input
                                type="text"
                                id="first_name"
                                className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg w-full  p-2.5"
                                placeholder="John"
                                required
                            />
                            <p className="  font-medium text-gray-900">Förnamn</p>
                        </div>
                        <div className="w-1/2">
                            <input
                                type="text"
                                id="last_name"
                                className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg w-full  p-2.5"
                                placeholder="Doe"
                                required
                            />
                            <p className="  font-medium text-gray-900">Efternamn</p>
                        </div>
                    </div>
                </div>
                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2   font-medium text-gray-900">
                        E-post{' '}
                        <span className="italic text-xs lg:text-sm  text-[#eb7272]">
                            (Obligatoriskt)
                        </span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg  block w-full p-2.5"
                        placeholder="john@gmail.com"
                        required
                    />
                </div>
                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2   font-medium text-gray-900">
                        Telefon{' '}
                        <span className="italic text-xs lg:text-sm  text-[#eb7272]">
                            (Obligatoriskt)
                        </span>
                    </label>
                    <input
                        type="number"
                        id="phone"
                        className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg  block w-full p-2.5"
                        placeholder="+46 771 793 336"
                        required
                    />
                </div>
                {/* Address */}
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2   font-medium text-gray-900">
                        I vilken stad/by bor du?
                        <span className="italic text-xs lg:text-sm  text-[#eb7272]">
                            (Obligatoriskt)
                        </span>
                    </label>
                    <input
                        type="text"
                        id="address"
                        className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg  block w-full p-2.5"
                        placeholder="Stockholm"
                        required
                    />
                </div>
                {/* Age */}
                <div className="mb-4">
                    <label htmlFor="age" className="block mb-2   font-medium text-gray-900">
                        Ålder
                        <span className="italic text-xs lg:text-sm  text-[#eb7272]">
                            (Obligatoriskt)
                        </span>
                    </label>
                    <div className="flex items-center gap-5">
                        <div className="flex gap-1">
                            <input type="radio" id="young" name="age" value="young" />
                            <label for="young">20-40</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" id="old" name="age" value="old" />
                            <label for="old">40-60</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" id="older" name="age" value="older" />
                            <label for="older">60-80</label>
                        </div>
                        <div className="flex gap-1">
                            <input
                                type="radio"
                                id="moreThanEighty"
                                name="age"
                                value="moreThanEighty"
                            />
                            <label for="moreThanEighty">80+</label>
                        </div>
                    </div>
                </div>
                {/* Interests */}
                <div className="mb-4">
                    <label htmlFor="interests" className="block mb-2   font-medium text-gray-900">
                        Jag är intresserade av
                        <span className="italic text-xs lg:text-sm  text-[#eb7272]">
                            (Obligatoriskt)
                        </span>
                    </label>
                    <div className="flex gap-1">
                        <input type="checkbox" />
                        <label for="vehicle1">Att delta som vinprovare och betygsätta viner</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" />
                        <label for="vehicle2">Att skriva inlägg och vara del av redaktionen</label>
                    </div>
                    <p className="mt-2">Du kan ticka i båda boxarna ovan.</p>
                </div>
                {/* Message */}
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2   font-medium text-gray-900">
                        Vem är du?{' '}
                        <span className="italic text-xs lg:text-sm  text-[#eb7272]">
                            (Obligatoriskt)
                        </span>
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className=" border border-gray-300 text-gray-900 outline-none   focus:ring-gray-500 focus:border-gray-500 rounded-lg  block w-full p-2.5"
                        placeholder="Skriv dina tankar här..."
                    ></textarea>
                    <p className="mt-2">
                        Berätta kort om dig själv och varför du vill skriva på Vinjournalen.se
                    </p>
                </div>
                <button
                    type="button"
                    className="focus:outline-none text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 text-sm"
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default JoinTeamForm;
