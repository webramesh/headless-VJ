const FactBoxMoreInfo = ({ smakar, aromer, fargers }) => {
  return (
    <>
      {((smakar && smakar.length > 0) || (aromer && aromer.length > 0) || (fargers && fargers.length > 0)) && (
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-4 lg:gap-8">
            <div className="flex flex-col items-center p-2 bg-white shadow-md">
              <div className=" text-black text-md">SMAK</div>
              <div className="text-xs mt-2 text-gray-600 text-center">
                {smakar?.map((smak) => {
                  return <span key={smak}>{smak?.name}, </span>;
                })}
              </div>
            </div>
            <div className="flex flex-col items-center p-2 bg-white shadow-md">
              <div className=" text-black text-md">AROM</div>
              <div className="text-xs mt-2 text-gray-600 text-center">
                {aromer?.map((arom) => {
                  return <span key={arom}>{arom?.name}, </span>;
                })}
              </div>
            </div>
            <div className="flex flex-col items-center p-2 bg-white shadow-md">
              <div className=" text-black text-md">FÄRG</div>
              <div className="text-xs mt-2 text-gray-600 text-center">
                {fargers?.map((farg) => {
                  return <span key={farg}>{farg?.name}, </span>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FactBoxMoreInfo;
