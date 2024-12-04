import React from 'react';
import { FilterOptions } from '../types/Card';
import { Search } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export default function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const handleCheckboxChange = (category: keyof FilterOptions, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: Array.isArray(prev[category])
        ? (prev[category] as string[]).includes(value)
          ? (prev[category] as string[]).filter(v => v !== value)
          : [...(prev[category] as string[]), value]
        : value
    }));
  };

  const handleBooleanChange = (category: keyof FilterOptions) => {
    setFilters(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-semibold">検索条件</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">年会費</h3>
          <div className="flex flex-wrap gap-2">
            {['無料', '5,000円以下', '10,000円以下', '20,000円以下', '20,000円超'].map(fee => (
              <label key={fee} className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1">
                <input
                  type="checkbox"
                  checked={filters.annualFee.includes(fee)}
                  onChange={() => handleCheckboxChange('annualFee', fee)}
                  className="rounded w-4 h-4 mr-2"
                />
                <span className="text-sm whitespace-nowrap">{fee}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">ポイント還元率</h3>
          <div className="flex flex-wrap gap-2">
            {['0.5%以上', '1.0%以上', '1.5%以上', '2.0%以上'].map(rate => (
              <label key={rate} className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1">
                <input
                  type="checkbox"
                  checked={filters.pointRate.includes(rate)}
                  onChange={() => handleCheckboxChange('pointRate', rate)}
                  className="rounded w-4 h-4 mr-2"
                />
                <span className="text-sm whitespace-nowrap">{rate}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">マイル還元率</h3>
          <div className="flex flex-wrap gap-2">
            {['0.5%以上', '1.0%以上', '1.5%以上'].map(rate => (
              <label key={rate} className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1">
                <input
                  type="checkbox"
                  checked={filters.mileRate.includes(rate)}
                  onChange={() => handleCheckboxChange('mileRate', rate)}
                  className="rounded w-4 h-4 mr-2"
                />
                <span className="text-sm whitespace-nowrap">{rate}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">国際ブランド</h3>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'Mastercard', 'AMEX', 'JCB'].map(brand => (
              <label key={brand} className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1">
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand)}
                  onChange={() => handleCheckboxChange('brand', brand)}
                  className="rounded w-4 h-4 mr-2"
                />
                <span className="text-sm whitespace-nowrap">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">その他の条件</h3>
          <div className="flex flex-wrap gap-2">
            <label className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1">
              <input
                type="checkbox"
                checked={filters.priorityPass}
                onChange={() => handleBooleanChange('priorityPass')}
                className="rounded w-4 h-4 mr-2"
              />
              <span className="text-sm whitespace-nowrap">プライオリティパス付帯</span>
            </label>
            <label className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1">
              <input
                type="checkbox"
                checked={filters.etcCard}
                onChange={() => handleBooleanChange('etcCard')}
                className="rounded w-4 h-4 mr-2"
              />
              <span className="text-sm whitespace-nowrap">ETCカード年会費無料</span>
            </label>
            <label className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1">
              <input
                type="checkbox"
                checked={filters.insurance}
                onChange={() => handleBooleanChange('insurance')}
                className="rounded w-4 h-4 mr-2"
              />
              <span className="text-sm whitespace-nowrap">充実した保険特典</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}