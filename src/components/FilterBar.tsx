interface Filter {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

interface FilterBarProps {
  filters: Filter[];
}

export function FilterBar({ filters }: FilterBarProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
      <div className="flex items-center gap-4 flex-wrap">
        {filters.map((filter, index) => (
          <div key={index} className="flex items-center gap-2">
            <label className="text-sm text-gray-600">{filter.label}:</label>
            <select
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#004C8F] focus:border-[#004C8F]"
            >
              {filter.options.map((option, optIndex) => (
                <option key={optIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}