import { useState, useEffect } from "react";
const useType = (data) => {
  const [type, setType] = useState([]);

  useEffect(() => {
    let allTypes = data.map((room) => room.type);
    const filterTypes = Array.from(new Set(allTypes));

    setType([...filterTypes]);
  }, [data]);

  return [type];
};

export default useType;
