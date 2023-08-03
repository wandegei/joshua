import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);

  // Sample blog data
  const sampleData = [
    {
      imageSrc: 'https://via.placeholder.com/300', // Sample image URL
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ipsum id ultrices.'
    },
    {
      imageSrc: 'https://via.placeholder.com/300', // Sample image URL
      text: 'Praesent tincidunt orci in ex fermentum varius. Duis consectetur nisl ac quam venenatis tempus.'
    },
    {
      imageSrc: 'https://via.placeholder.com/300', // Sample image URL
      text: 'Sed sit amet massa nec velit volutpat bibendum ac at nunc. Sed consectetur sapien ac massa feugiat, in auctor arcu lacinia.'
    },
    // Add more sample data if needed
  ];

  useEffect(() => {
    // Setting the blog data after a delay to simulate API call.
    setTimeout(() => {
      setBlogData(sampleData);
    }, 1000);
  }, []);

  return (
    <div className="blog-container">
      {blogData.map((blog, index) => (
        <div key={index} className="blog-column">
          <img src={blog.imageSrc} alt={`Blog ${index + 1}`} />
          <p>{blog.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
