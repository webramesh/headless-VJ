import React from "react";

const SubscriptionForm = () => {
    return (
        <div>
            <div className="w-full  bg-[#eb7272]">
                <div className="p-6 sm:p-8">
                    <h1 className="font-outfit text-white text-2xl sm:text-3xl lg:text-4xl mb-4">
                        Vill du ha vårt nyhetsbrev?
                    </h1>
                    <h3 className="font-outfit text-white text-sm sm:text-base mb-6">
                        Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
                    </h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full lg:w-2/3 p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                                placeholder="abc@gmail.com"
                                required
                            />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="privacy" className="mr-4" />
                            <label htmlFor="privacy" className="text-white text-sm">
                                Jag godkänner integritetspolicy
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="rounded-full font-outfit text-sm py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
                        >
                            Ja, skicka till mig!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionForm;

