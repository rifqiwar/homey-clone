// src/components/DestinationCard.tsx
import React from "react";

interface DestinationCardProps {
  image: string;
  title: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title }) => {
  return (
    <div className="destination-card text-center bg-white shadow-md">
      <img src={image} alt={title} />
      <h3 className="p-4 text-lg font-bold">{title}</h3>
    </div>
  );
};

export default DestinationCard;
