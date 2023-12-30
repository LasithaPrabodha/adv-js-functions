function omit(obj, keys) {
  return Object.keys(obj)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}
const obj = {
  id: 1,
  name: "Lasitha",
  job: "Senior Engineer",
  linkedin: "https://www.linkedin.com/in/lasithapw",
  website: "https://www.lasitha.dev",
};

const selected = omit(obj, ["id"]);
console.log(selected); // {name: 'Lasitha', job: 'Senior Engineer', linkedin: 'https://www.linkedin.com/in/lasithapw', website: 'https://www.lasitha.dev'}
