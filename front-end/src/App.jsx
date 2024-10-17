import { useState } from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Category from './Category';
import Signup from './SignUp';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import CourseDetails from './CourseDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const { t } = useTranslation(); // Use it once here

  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <SearchBar t={t} setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} /> 
                <Category t={t} searchTerm={searchTerm} selectedCategory={selectedCategory} /> 
              </>
            } 
          />
          
          {/* When the user navigates to /login, redirect to /signup */}
         
          
          {/* Signup page */}
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/courseDetail" element={<CourseDetails />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Corrected this line
