let paginationEl = document.getElementById("pagination");

// both buttons.
let paginationBtns = paginationEl.getElementsByTagName("button");
//console.log(paginationBtns);

let searchBtn = document.getElementById("search-btn");

paginationBtns[0].addEventListener("click", goBack);
paginationBtns[1].addEventListener("click", goForward);

getDogsFact();
searchBtn.addEventListener("click", function () {
    let input = document.getElementById("search-input");
  
    if (input.value === "") return;
  
    if (input.value.length < 4) return;
  
    searchPlants(input.value);
  });
  function goBack() {
    console.log("Back");
    if (page == 1) {
      return; // to exit a function
    }
    page = page - 1;
    updatePage();
    getDogsFact();
  }
  function goForward() {
    console.log("Go Forward");
    page = page + 1;
    updatePage();
    getDogsFact();
  }
  // Function to fetch dog facts from the API
function fetchDogFacts(number, index) {
    let apiUrl = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all';

    if (number) {
        apiUrl += `?number=${number}`;
    } else if (index) {
        apiUrl += `?index=${index}`;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data (dog facts) here
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Example usage:
// Fetch all dog facts
fetchDogFacts();

// Fetch a specific number of dog facts
fetchDogFacts(5);

// Fetch a specific dog fact by index
fetchDogFacts(undefined, 3);
function displayDogs(data) {
    let divEl = document.getElementById("all-dogs");
  
    let dogs = "";
    for (let i = 0; i < data.length; i++) {
      let dog = data[i];
      dogs =
        dogs +
        `
        <div class="a-dog">
        <img
          src="${dog.image_url}"
        />
        <div>
          <p>Name:<span>${dog.common_name}</span></p>
        </div>
      </div> 
        `;
    }
    divE1.innerHTML = dogs;}
