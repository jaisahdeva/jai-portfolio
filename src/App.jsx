// Example in App.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* Other content of your app */}
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
