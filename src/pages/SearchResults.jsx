import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SearchResults = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = `Search: ${query} | ${t('app.documentTitle')}`;
    setIsLoading(true);
    // Mocking an API delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [query, category, t]);

  return (
    <div className="container mx-auto px-4 py-10 min-h-[65vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1a2b5f] mb-2">Search Results</h1>
        <p className="text-gray-600 mb-8 border-b pb-4">
          Showing results for <span className="font-semibold text-gray-900">"{query}"</span>
          {category && (<span> in category <span className="font-semibold text-gray-900">{category}</span></span>)}
        </p>

        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#f5a623]"></div>
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-lg p-10 text-center border border-gray-100 border-t-4 border-t-[#f5a623]">
            <div className="text-gray-400 mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#1a2b5f] mb-2">No exact matches found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any documents or pages matching your exact search criteria. Please try adjusting your keywords or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
