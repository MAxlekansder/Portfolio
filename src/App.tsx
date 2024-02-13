import React from 'react';
import Header from './Pages/Header'; // Import your Header component
import ProfileSection from './Pages/ProfileSection';
import AboutSection from './Pages/AboutSection';
import MyProjects from './Pages/MyProjects'



const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProfileSection />
      <AboutSection />
      <MyProjects />
      {/* Add other components and content here */}

    </div>
  );
};

export default App;