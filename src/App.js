import React from 'react';
import BlogPage from '../my-react-app/src/components/BlogPage';
import Navbar from '../my-react-app/src/components/Navbar'; // Import the Navbar component
import '../my-react-app/src/components/BlogPage.css';

function App() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <h1>Welcome to my Blog page</h1>
      <BlogPage />
    </div>
  );
}

export default App;
