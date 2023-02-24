// import React from "react";

const Herocard =({heading, description}) => {
  return (
    <div>
        <h1 className="w-75">{heading}</h1>
        <p className="my-4">{description}</p>
    </div>
  );
}
export default Herocard