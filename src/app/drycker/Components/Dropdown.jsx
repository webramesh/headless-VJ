import { useFilters } from '@/src/context/FilterContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Dropdown = ({ title, options, openIndex, setOpenIndex, action }) => {
  const { dispatch } = useFilters();

  function handleChange(e) {
    dispatch({ type: action, payload: e.target.value });
  }
  return (
    <>
      <div className="border-b mb-6 border-slate-200">
        <button
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 py-1"
          onClick={() => setOpenIndex((prev) => (title === prev ? false : title))}
        >
          <h3 className="text-left text-lg">
            <span>{title}</span>
          </h3>

          <span className={`text-slate-800 transition-transform ${openIndex === title ? 'rotate-60' : 'rotate-0'}`}>
            {openIndex === title ? <ChevronUp /> : <ChevronDown />}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 
            ${openIndex === title ? 'max-h-screen' : 'max-h-0'}
            `}
        >
          <div className="pb-2 flex flex-col text-sm pl-3 my-2">
            {options.map((option, index) => (
              <option key={index} value={option[0]} onClick={handleChange} className="py-1 cursor-pointer">
                {`${option[0]} (${option[1]})`}
              </option>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
