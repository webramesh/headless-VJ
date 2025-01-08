import { useFilters } from '@/src/context/FilterContext';

const Checkbox = ({ title, count, isChecked, action }) => {
  const { dispatch } = useFilters();

  const handleToggle = () => {
    dispatch({ type: action, payload: !isChecked });
  };

  return (
    <div className="border-b mb-6 border-slate-200">
      <div className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3">
        <label htmlFor={title} className="flex-1 py-3 text-left text-lg cursor-pointer">
          {title} ({count})
        </label>
        <input
          id={title}
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="mr-4 cursor-pointer min-w-[20px] min-h-[20px]"
          aria-label={`${title} filter`}
        />
      </div>
    </div>
  );
};

export default Checkbox;
