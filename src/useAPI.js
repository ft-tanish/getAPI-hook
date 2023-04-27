import React, { useState, useEffect } from "react";

const useAPI = (api) => {
  const [get, setGet] = useState();

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setGet(data);
  };

  return get;
};

export default useAPI;
