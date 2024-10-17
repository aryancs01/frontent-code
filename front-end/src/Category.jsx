import React from 'react';
import coursesData from './dummyData'; // Import the dummy data
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Category({ searchTerm, selectedCategory }) {
  const {t} = useTranslation()
  // Filter courses based on the selected category and search term
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Search Results')}</h2>
      <div>
        {filteredCourses.length > 0 ? (
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">{t('Courses Found')}</h3>
            <div className="flex flex-wrap -mx-4">
              {filteredCourses.map(course => (
                <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{t(course.title)}</h2> {/* Use t for course title */}
                      <p className="text-gray-600 mb-4">{t(course.description)}</p> {/* Use t for course description */}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900 font-bold">{course.price}</span>
                        <Link to='/courseDetail' className="bg-white text-black font-semibold py-2 px-4 rounded-md">
                          {t('View Course')} {/* Use t for Purchase button text */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-600">{t('No courses found for')} "{searchTerm}" {t('in')} "{selectedCategory}".</p>
        )}
      </div>
    </section>
  );
}
