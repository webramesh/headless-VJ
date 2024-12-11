const FactBoxDescription = ({ fieldsProduct }) => {
  return (
    <div className="my-6 py-10">
      <div className="">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4  ">
          <div className="pl-4 lg:pl-8">
            <div className="text-black text-xs">SORTIMENT</div>
            <div className="text-gray-500 text-xs">

            {fieldsProduct?.wineSortiment ? (<p>{fieldsProduct?.wineSortiment[0]}</p>): (<p>N/A</p>)}
            </div>
            {/* {fieldsProduct?.wineSortiment && (
              // <div className="text-gray-500 text-xs">

              //   {fieldsProduct?.wineSortiment[0]}
              //   </div>
            )} */}
          </div>
          <div className="flex flex-col pl-4 lg:pl-14">
            <div className=" text-black text-xs">ALKOHOL</div>
            <div className="text-gray-500 text-xs">
              {fieldsProduct?.alcohol ? <p>{fieldsProduct?.alcohol} % </p> : <p>N/A</p>}
            </div>
          </div>
          <div className="flex flex-col pl-4 lg:pl-8">
            <div className=" text-black text-xs">ÅRGÅNG</div>
            <div className="text-gray-500 text-xs">
              {fieldsProduct?.vintage ? <p>{fieldsProduct?.vintage} </p> : <p>N/A</p>}
            </div>
          </div>
          <div className="flex flex-col pl-4 lg:pl-8">
            <div className=" text-black text-xs">VOLYM</div>
            <div className="text-gray-500 text-xs">
              {fieldsProduct?.volume ? <p>{fieldsProduct?.volume} ml </p> : <p>N/A</p>}
            </div>
          </div>
          <div className="flex flex-col pl-4 lg:pl-14">
            <div className=" text-black text-xs">DRUVOR</div>
            <div className="text-gray-500 text-xs">
              {fieldsProduct?.composition ? <p>{fieldsProduct?.composition} </p> : <p>N/A</p>}
            </div>
          </div>
          <div className="flex flex-col pl-4 lg:pl-8">
            <div className=" text-black text-xs">ALLERGENER</div>
            <div className="text-gray-500 text-xs">
              {/* {fieldsProduct?.allergener} */}
              {fieldsProduct?.allergener ? <p>{fieldsProduct?.allergener} </p> : <p>N/A</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactBoxDescription;
