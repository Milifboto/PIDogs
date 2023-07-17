export const filterOriginHelper = (dogs, value) => {
  if (value === "New breeds") {
    const filteredDB = dogs?.filter((dog) => dog.created === true);
    return filteredDB;
  }
  if (value === "Breeds API") {
    const filteredAPI = dogs?.filter((dog) => dog.created === false);
    return filteredAPI;
  }
    return dogs
};
