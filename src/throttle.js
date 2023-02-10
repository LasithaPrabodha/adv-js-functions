function throttle(func, delay) {
  let wait = false;

  return (...args) => {
    if (wait) {
      return;
    }

    document.querySelector("h1").textContent = "🤔";
    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}

// Define the function that updates the layout
function updateLayout() {
  fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", options)
    .then((response) => response.json())
    .then((response) => {
      document.querySelector("h1").innerHTML = response[0].joke;
    })
    .catch((err) => console.error(err));
}

// Create a debounced version of the function
const debouncedUpdateLayout = throttle(updateLayout, 1000);

// Listen for window resize events and call the debounced function
window.addEventListener("mousemove", debouncedUpdateLayout);
