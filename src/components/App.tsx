import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import SeasonList from './SeasonList';
import EpisodeList from './EpisodeList'; // Create this component for episode details

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SeasonList />} />
        <Route path="/season/:seasonNumber" element={<EpisodeList />} />
      </Routes>
    </>
  );
};

export default App;