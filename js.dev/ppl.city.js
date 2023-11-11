function countPeopleByCity(people) {
  return people.reduce((cityCount, person) => {
    const city = person.city;
    cityCount[city] = (cityCount[city] || 0) + 1;
    return cityCount;
  }, {});
}
