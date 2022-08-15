import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import BeatLoader from "react-spinners/BeatLoader";

const Loader = ({ loading, size, color, name }) => {
  return (
    <div>
      {name === "PuffLoader" && (
        <PuffLoader loading={loading} size={size} color={color} />
      )}
      {name === "BeatLoader" && (
        <BeatLoader size={size} color={color} margin={2} />
      )}
    </div>
  );
};

export default Loader;
