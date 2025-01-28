const FactBoxMoreInfo = ({ smakar, aromer, fargers }) => {
  return (
    <>
      {((smakar && smakar.length > 0) || (aromer && aromer.length > 0) || (fargers && fargers.length > 0)) && (
        <div>
          <div className="md:grid grid-cols-3 gap-4 lg:gap-8">
            <div className="flex flex-col items-center p-2">
              <div className="text-black text-sm">SMAK</div>
              <div className="text-xs mt-2 text-gray-600 text-center">
                {smakar && smakar.length > 0 ? smakar.map((smak) => smak?.name).join(', ') : 'N/A'}
              </div>
            </div>
            <div className="flex flex-col items-center p-2">
              <div className="text-black text-sm">AROM</div>
              <div className="text-xs mt-2 text-gray-600 text-center">
                {aromer && aromer.length > 0 ? aromer.map((arom) => arom?.name).join(', ') : 'N/A'}
              </div>
            </div>
            <div className="flex flex-col items-center p-2">
              <div className="text-black text-sm">FÄRG</div>
              <div className="text-xs mt-2 text-gray-600 text-center">
                {fargers && fargers.length > 0 ? fargers.map((farg) => farg?.name).join(', ') : 'N/A'}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FactBoxMoreInfo;
