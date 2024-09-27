import Image from "next/image";
import vinlogo from "@/public/vinlogo.png";

const CircleImage = () => {
    return (
        <div className="container mx-auto">
            <div className="items-center flex flex-col md:flex-row items-center">
                <div className="items-center md:w-1/3 ">
                    <Image
                        src={vinlogo}
                        alt="Vinlogo Author"
                        className="w-48 h-48 max-w-full rounded-full object-cover p-10"
                        width={192}
                        height={192}
                    />
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <h2 className="text-xl font-bold mt-4 md:mt-0">Jeanetter Gardner</h2>
                    <p className="text-base mt-2 mr-4 md:mr-36">
                        Jag är sedan 2014 redaktör och receptmakare för Vinjournalen.se. Författare och skribent, har arbetat internationellt i flera länder och i Sverige. Bor i skärgården utanför Stockholm och brinner för mat och vin.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CircleImage;