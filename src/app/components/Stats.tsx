// src/components/Stats.tsx
import React from "react";

const stats = [
  { number: "+50", text: "Destinations" },
  { number: "+200", text: "Accommodations" },
  { number: "+150", text: "Verified Hosts" },
  { number: "+20", text: "Years Experience" },
];

const Stats: React.FC = () => {
  return (
    <section className="stats flex justify-around py-12 bg-gray-100">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h2 className="text-3xl font-bold">{stat.number}</h2>
          <p>{stat.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
