import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const SenasteNytt = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="font-outfit text-xl text-black">Senaste nytt</h1>
            <div className="font-outfit text-lg mt-4 text-gray-500 font-extralight w-full justify-normal leading-5">
                <Link href="#" className="flex justify-between items-center">
                    <h3 className="truncate max-w-[90%]">Vingårdar kämpar mot mögel</h3>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 text-black ml-2" />
                </Link>
                <Link href="#" className="flex justify-between items-center pt-3">
                    <h3 className="truncate max-w-[90%]">Malmö presenterar en ny dryckesmässa!</h3>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 text-black ml-2" />
                </Link>
                <Link href="#" className="flex justify-between items-center pt-3">
                    <h3 className="truncate max-w-[90%]">Missa inte Tranås Vinfestival i september!</h3>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 text-black ml-2" />
                </Link>
                <Link href="#" className="flex justify-between items-center pt-3">
                    <h3 className="truncate max-w-[90%]">Påskön får egen vinappellation</h3>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 text-black ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default SenasteNytt;