import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-96 overflow-clip flex-col items-center md:mx-44 xl:mx-80 p-2 md:p-4 justify-around">
      <div className="items-center justify-center flex flex-col">
        <p className="text-2xl font-bold">404 NOT FOUND!</p>
        Sorry the page you were looking for was not found
      </div>
    </div>
  );
};

export default NotFound;
