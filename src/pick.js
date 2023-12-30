function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

const obj = {
  id: 1,
  name: "Lasitha",
  password: "82ada72easd7",
  role: "admin",
  website: "https://www.lasitha.dev",
};

const selected = pick(obj, ["name", "website"]);
console.log(selected); // { name: 'Lasitha', website: 'https://www.lasitha.dev' }
