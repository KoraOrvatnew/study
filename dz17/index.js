const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://aws.random.cat/meow";
// const url = 'https://random.cat/meow';
// const url =`https://api.thecatapi.com/v1/breeds`;
// const api_key = "DEMO_API_KEY"
async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;

  if (isLoaded) {
    fetchHandler();
  }
});