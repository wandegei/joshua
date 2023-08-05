// // Header.js
// import React from 'react';

// const Header = () => {
//   return (
//     <header>
//       <nav>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Testimonials</li>
//         </ul>
//       </nav>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Add Link for Home */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Add Link for About */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Add Link for Contact */}
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link> {/* Add Link for Testimonials */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
