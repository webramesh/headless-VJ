import React from "react";
import Accordion from "../../Components/Accordion";
import Image from "next/image";
import Subs from "../Components/Subs";
import grapeimage from "@/public/grapeimage.webp";

const Content = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0" id="arrow">
      <div className="mt-4 sm:mt-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-[70%] flex flex-col items-start lg:pl-7 gap-4 sm:gap-6">
            <div className="text-xl sm:text-2xl lg:text-3xl font-outfit text-red-500 w-full">
              Historia om rött vin:
            </div>
            <div className="font-outfit text-sm sm:text-base lg:text-lg max-w-4xl">
              Rött vin har funnits i århundraden och har uppskattats av
              människor genom historien. Det antas att antika greker och romare
              var bland de första att uppskatta smaken och fördelarna med rött
              vin. Med tiden blev det en populär dryck i Europa och kom så
              småningom till andra delar av världen.
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <div className="text-xl sm:text-2xl lg:text-3xl font-outfit text-red-500">
                  Fördelar med rött vin:
                </div>
                <div className="font-outfit text-sm sm:text-base lg:text-lg max-w-4xl">
                  Rött vin har visat sig ha flera hälsofördelar. Studier har
                  visat att det kan minska risken för hjärtsjukdom, stroke och
                  vissa typer av cancer. Rött vin är också känt för sina
                  antioxidant egenskaper, vilket kan hjälpa till att skydda
                  kroppen mot oxidativ stress.
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <Image
                  src={grapeimage}
                  alt="Grape image"
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-outfit text-red-500 w-full">
              Typer av rött vin:
            </div>
            <div className="font-outfit text-sm sm:text-base lg:text-lg max-w-4xl">
              Det finns flera olika typer av rött vin, var och en med sin unika
              smak och arom. Här är några av de mest populära typerna av rött
              vin: Cabernet Sauvignon: Detta är en av de mest populära röda
              vinerna i världen. Den är känd för sin fylliga smak och doft av
              svarta vinbär. Pinot Noir: Detta röda vin är lättare i kroppen och
              har en delikat smak. Det är känt för sina aromer av jordgubbar och
              körsbär. Merlot: Merlot är ett mediumfyllt rött vin med en mjuk,
              fruktig smak. Det beskrivs ofta som att ha en sammetig konsistens.
              Zinfandel: Detta är ett djärvt och kryddigt rött vin som är
              populärt i Kalifornien. Det är känt för sina smaker av björnbär
              och hallon. Syrah/Shiraz: Detta är ett fullfylligt rött vin med
              smaker av björnbär, svartpeppar och andra kryddor.
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-outfit text-red-500 w-full">
              Att para ihop rött vin med mat:
            </div>
            <div className="font-outfit text-sm sm:text-base lg:text-lg max-w-4xl">
              Rött vin paret ofta med mat, eftersom det kan komplettera smakerna
              av många olika rätter. Här är några vanliga mat- och vinparningar:
              Cabernet Sauvignon: Detta röda vin passar bra med rött kött, lamm
              och hårdostar. Pinot Noir: Detta röda vin passar bra med lax,
              fjäderfä och svamprätter. Merlot: Detta röda vin passar bra med
              pastarätter, pizza och rostade grönsaker. Zinfandel: Detta röda
              vin passar bra med grillat kött, kryddiga rätter och lagrade
              ostar. Syrah/Shiraz: Detta röda vin passar bra med grillat kött,
              grytor och kryddiga rätter. Slutsatsen är att rött vin är en
              populär alkoholhaltig dryck med en rik historia och många
              hälsofördelar. Det finns flera olika typer av rött vin, var och en
              med sin unika smak och arom, och det kan paras ihop med en mängd
              olika maträtter för att förstärka smakerna av både vinet och
              maten. Så, oavsett om du är en erfaren vinkännare eller bara
              börjar utforska världen av vin, är rött vin definitivt värt att
              prova.
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-outfit text-red-500 w-full">
              Tips - Vår Vinguide för Röda viner från alla världens hörn
            </div>
            <div className="font-outfit text-sm sm:text-base lg:text-lg max-w-4xl">
              Fantastisk mat att servera till röda viner från Abruzzo Grillad
              Bistecca alla Fiorentina & Valpolicella Vintips inför jul & nyar:
              Tenuta Vignega Valpolicella Ripasso Superiore Snygg Chianti till
              örtkryddad fläskytterfilé Kan man servera rött vin till fläskkött?
            </div>
            <div className="font-outfit text-xl sm:text-2xl lg:text-3xl">
              Vanliga frågor om rödvin
            </div>
            <Accordion />
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-[30%] mt-8 lg:mt-0">
            <Subs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;