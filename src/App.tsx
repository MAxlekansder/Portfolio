import React from 'react';
import Header from './Pages/Header'; // Import your Header component
import ProfileSection from './Pages/ProfileSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProfileSection/>
      {/* Add other components and content here */}
    </div>
  );
};

export default App;