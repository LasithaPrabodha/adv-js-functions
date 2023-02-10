function once(func) {
  let ran = false;
  let result;

  return function () {
    if (ran) return result;
    result = func.apply(this, arguments);
    ran = true;
    return result;
  };
}

// Define the function that sends the request
function requestSomeData() {
  fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", options)
    .then((response) => response.json())
    .then((response) => {
      document.querySelector("h1").innerHTML = response[0].joke;
    })
    .catch((err) => console.error(err));
}

// Create a version of the function that can only be called once
const sendRequestOnce = once(requestSomeData);

// Listen for clicks on a button and call the "once" function
const button = document.querySelector("h1");
button.textContent = "🤔";
button.addEventListener("click", sendRequestOnce);
