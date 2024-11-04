import React from 'react';
import SeasonCard from './SeasonCard';

const seasons = [1, 2, 3, 4, 5, 6, 7];

const SeasonList: React.FC = () => {
  const handleSeasonClick = (seasonNumber: number) => {
    console.log(`Selected Season ${seasonNumber}`);
    // Implement navigation to episodes page or modal here.
  };

  return (
    <div>
      {seasons.map((season) => (
        <SeasonCard key={season} seasonNumber={season} onClick={() => handleSeasonClick(season)} />
      ))}
    </div>
  );
};

export default SeasonList;