import { useFilters } from '@/src/context/FilterContext';

const Checkbox = ({ title, isChecked, action, count }) => {
  const { dispatch } = useFilters();
  return (
    <div className="border-b mb-6 border-slate-200">
      <button className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 py-1">
        <h3 className="text-left text-lg">
          <span>
            {title} ({count})
          </span>
        </h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => dispatch({ type: action, payload: e.target.checked })}
            className="mr-2"
          />
        </label>
      </button>
    </div>
  );
};

export default Checkbox;
