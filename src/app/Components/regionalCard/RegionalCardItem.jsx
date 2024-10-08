import Image from 'next/image'
import React from 'react'
import grape from "@/public/grape.png";
import corkscrew from "@/public/corkscrew.png";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



const RegionalCardItem = () => {
    return (
        <div className=" font-outfit max-w-[90vw] md:max-w-[300px] bg-gray-50 rounded-md" >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='text-blue-400 ' />
            <Image src={'/./Lugana.png'} alt="Grape" width={300} height={350} className="w-full " />
            <div className=" px-4 py-4 mt-2">
                <h2 className='text-2xl  mb-4 '>Stellenbosch</h2>
                <p className='my-5 font-light text-gray-700'>
                    Stellenbosch är synonymt med sydafrikanska vinframställning. Sydafrikas näst äldsta stad grundades 1679 av holländska nybyggare; de första vindruvor planterades inte…
                </p>
                
                <div>
                    <Link href="/region" className='text-[#FF0303] font-bold flex items-center'> <span>
                        Mer info
                    </span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-[#FF0303] mx-3 " />
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default RegionalCardItem