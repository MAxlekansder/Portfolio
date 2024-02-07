import React from 'react';
import Header from './Pages/Header'; // Import your Header component
import ProfileSection from './Pages/ProfileSection';
import AboutSection from './Pages/AboutSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProfileSection/>
      <AboutSection/>
      {/* Add other components and content here */}
    </div>
  );
};

export default App;