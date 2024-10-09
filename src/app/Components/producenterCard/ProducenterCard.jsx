import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProducenterCard() {
  return (
    <div className=" font-outfit max-w-[90vw] md:max-w-[300px] bg-gray-50 rounded-md overflow-hidden ">
      <div className="flex flex-col justify-center">
        <Image
          src={"/./Lugana.png"}
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
            href="/region"
            className="text-[#FF0303] font-bold flex items-center text-sm lg:text-base "
          >
            <span>Mer info</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-3 h-3 mx-3 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProducenterCard;
