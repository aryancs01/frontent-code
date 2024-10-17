import React from 'react';
import coursesData from './dummyData'; // Import the dummy data

export default function TopCourseContainer() {
  const topCourses = coursesData.slice(0, 4); 

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Top Available Courses</h1>
      <div className="flex flex-wrap -mx-4">
        {topCourses.map(course => (
          <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-gray-900 font-bold">{course.price}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
