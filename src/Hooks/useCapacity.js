import { useState, useEffect } from "react";
const useCapacity = (data) => {
  const [type, setType] = useState([]);

  useEffect(() => {
    let allPeoples = data.map((room) => room.capacity);
    const filterPeople = Array.from(new Set(allPeoples));

    setType([...filterPeople]);
  }, [data]);

  return [type];
};

export default useCapacity;
