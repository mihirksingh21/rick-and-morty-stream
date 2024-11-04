import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
`;

interface SeasonCardProps {
  seasonNumber: number;
  onClick: () => void;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ seasonNumber, onClick }) => {
  return (
    <Card onClick={onClick}>
      <h2>Season {seasonNumber}</h2>
    </Card>
  );
};

export default SeasonCard;