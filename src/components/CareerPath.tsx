import React from "react";

type Topic = {
  description: string;
};

type CareerPathProps = {
  topics: Topic[];
};

const CareerPath = ({ topics }: CareerPathProps) => {
  return (
    <div>
      <ul>
        {topics.map((topic: Topic) => (
          <li>{topic.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareerPath;
