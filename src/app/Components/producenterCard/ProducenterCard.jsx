import Image from 'next/image';
import Link from 'next/link';

function ProducenterCard() {
    return (
        <div className=" font-outfit max-w-[90vw] md:max-w-[300px] bg-gray-50 rounded-md overflow-hidden ">
            <div className="flex flex-col justify-center">
                <Image
                    src={'/./Lugana.png'}
                    alt="Grape"
                    width={300}
                    height={350}
                    className="w-full "
                />
            </div>
            <div className=" p-4 mt-2">
                <h2 className="text-xl lg:text-2xl mb-4">Stellenbosch</h2>

                <div>
                    <Link
                        href="#"
                        className="inline-flex my-2 items-center px-3 py-1 text-sm font-medium text-center text-white bg-[#FF0303]  rounded-lg hover:bg-[#ff8181] focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                        Mer Info
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProducenterCard;
