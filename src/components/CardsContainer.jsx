import React from "react";
import ProfileCard from "./ProfileCard";

const CardsContainer = ({ data, title }) => {
  return (
    <div className="w-10/12 mx-auto p-6 mt-4 ">
      <h1 className="bg-purple-600 text-white text-lg px-2 py-1 rounded-md font-medium text-center">
        Leadership/Management Team
      </h1>
      <div className="w-full flex flex-wrap mx-auto p-4 mt-4 gap-4 items-center justify-center">
        {data?.map((item) => (
          <ProfileCard
            key={item.id}
            first={item.first_name}
            last={item.last_name}
            role={item.role}
            image={item.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
