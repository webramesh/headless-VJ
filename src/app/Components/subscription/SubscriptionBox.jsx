import React from 'react'
import Image from 'next/image'
import grape from "@/public/grape.png";
import corkscrew from "@/public/corkscrew.png";
const SubscriptionBox = () => {
    return (
        <div>
            <div className="w-full  bg-[#f5f5f5] p-6 sm:p-8">
                <div className="space-y-8">
                    <div className="flex md:flex-col items-center gap-12 md:gap-4 ">
                        <div className="w-12 h-12 flex-shrink-0">
                            <Image src={grape} alt="Grape" width={64} height={64} className="object-cover w-full h-full" />
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-semibold">ETT VINORD</div>
                            <div className="text-sm">Druvbeskrivningar&gt;&gt;</div>
                        </div>
                    </div>
                    <hr className="border-t border-gray-300" />
                    <div className="flex md:flex-col items-center gap-12 md:gap-4">
                        <div className="w-12 h-12 flex-shrink-0">
                            <Image src={corkscrew} alt="Corkscrew" width={64} height={64} className="object-cover w-full h-full" />
                        </div>
                        <div className="text-sm font-semibold">VECKANS OMRÅDE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionBox