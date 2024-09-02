import React from 'react'
import Accordion from './Accordion'

const Info = () => {
  return (
    <div className="mt-4 mx-4 flex flex-col gap-4 md:flex-row md:mt-14 md:ml-12 md:gap-14">
      <div className="w-full md:w-[64%] flex flex-col">
        <h1 className='font-outfit font-medium text-2xl text-black tracking-normal '>Ett vinmagasin om mat och vin samt andra drycker</h1>
        <div className='mt-4'>
       <h3 className='font-outfit text-xs text-gray-500 w-full justify-normal leading-4'> Vi skriver om mat och vin samt andra drycker. Du kan även läsa om annat som händer i vinvärlden. Vinjournalen.se har ständigt kunnat överträffa våra förväntningar och vi strävar efter att kontinuerligt öka trafiken till vår webb och på sociala medier och fånga alltfler våra entusiastiska vinälskande läsare till vår tidning och vårt populära nyhetsbrev om vin. </h3>
        </div>
        <div className='mt-4'>
        <h2 className='font-outfit font-medium text-xl text-black tracking-normal'>Vinjournalen.se Ditt magasin på nätet</h2>
        </div>
<div className='mt-4'>
<h3 className='font-outfit text-xs text-gray-500 w-full justify-normal leading-4'>
Vinjournalen.se startade 2011 och är Sveriges ledande online tidning för vinentusiaster med allt som du behöver veta om vin. Vi siktar mot att bli en portal om vin och andra alkoholhaltiga drycker så att du har allt på samma ställe! Du hittar vin, mat, vin-skola, recensioner om vin från hela världen, intervjuer med vinmakare, kockar och kända vinprofiler, producenter, regioner och vindruvor. Vi täcker in både den lokala och internationella dryckesindustrins nyheter men även recept på maträtter, vinskola, vinturism, skriver om breda vetenskapliga frågor om vin, samlar nyheter om vin och sprit - det du vill läsa om, helt enkelt, det skriver vi om!
</h3>
</div>
<div className='mt-4'>
<h2 className='font-outfit font-medium text-xl text-black tracking-normal'>Frågor och Svar om Vinjournalen.se</h2>
</div>
<div className='mt-4'>
<Accordion />
</div>
    </div>      
    </div>
  )
}

export default Info
