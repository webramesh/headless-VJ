import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const SenasteNytt = () => {
    return (
        <div className="mt-8">
            <h1 className="font-outfit text-xl text-black">Senaste nytt</h1>
            <div className="font-outfit text-lg mt-4 text-gray-500 font-extralight w-full justify-normal leading-5">
                <Link href="#" className="flex justify-between items-center">
                        <h3>Vingårdar kämpar mot mögel</h3>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black" />
                    
                </Link>
                <div className="flex justify-between items-center pt-3">
                    <h3>Malmös presenterar en ny dryckesmässa!</h3>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black" />
                </div>
                <div className="flex justify-between items-center pt-3">
                    <h3>Missa inte Tranås Vinfestival i september!</h3>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black" />
                </div>
                <div className="flex justify-between items-center pt-3">
                    <h3>Påskön får egen vinappellation</h3>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black" />
                </div>
            </div>
        </div>
    );
};

export default SenasteNytt;