var submit = document.getElementById("submit");
var displaybox = document.getElementById("display-box");
var inputbox = document.getElementById("input");

submit.addEventListener("click", () => {
  var input = document.getElementById("input").value.toLowerCase();
  console.log(input);
  if (input !== "") {
    API = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        displaybox.innerHTML = `${data[0].meanings[0].definitions[0].definition}`;
      })
      .catch((error) => {
        alert(`${input} is not a valid word `);
        displaybox.innerHTML = "Please enter a correct spelling";
      });
  } else {
    alert("Please enter a word");
    displaybox.innerHTML = "Enter a word to see meaning";
  }
});

inputbox.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    var input = document.getElementById("input").value.toLowerCase();
    console.log(input);
    if (input !== "") {
      API = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          displaybox.innerHTML = `${data[0].meanings[0].definitions[0].definition}`;
        })
        .catch((error) => {
          alert(`${input} is not a valid word `);
          displaybox.innerHTML = "Please enter a correct spelling";
        });
    } else {
      alert("Please enter a word");
      displaybox.innerHTML = "Enter a word to see meaning";
    }
  }
});

// data[0].word
// data[0].meanings[0].definitions[0].definition
