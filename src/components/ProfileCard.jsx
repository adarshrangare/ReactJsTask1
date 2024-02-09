import React from "react";

const ProfileCard = ({first,last,role,image}) => {
    console.log(image)
  return (
    <div className="bg-white shadow-xl rounded-lg py-3 px-8 w-48 h-64 border-2 transition-all duration-300 hover:scale-105 cursor-pointer ">
      <div className="photo-wrapper p-2">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={image}
          alt={first+" "+last}
        />
      </div>
      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
        {first+" "+last}
        </h3>
        <div className="text-center text-gray-400 text-xs font-semibold">
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
