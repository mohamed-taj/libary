document.addEventListener("DOMContentLoaded", function () {
  const libary = [];
  function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  //render the form input in the html
  function bookRender() {
    const library = document.querySelector("#div");
    library.innerHTML = "";
    for (i = 0; i < libary.length; i++) {
      const libaryElement = libary[i];
      const newCard = document.createElement("div");
      newCard.setAttribute("class", "card");

      newCard.innerHTML = `
      <p id='p1'> ${libaryElement.author} <p>
      <p id='p2'> ${libaryElement.pages} <p>
      <p id='p3'> ${libaryElement.title} <p>
      <button onclick='removeCard(${i})'>remove</button>
                            `;
      library.appendChild(newCard);
    }
  }

  // remove book
  console.log(libary);
  function removeCard(index) {
    console.log(index);
  }
  //create a new book
  function addBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const newBOOK = new book(title, author, pages);
    console.log(newBOOK);
    libary.push(newBOOK);
    console.log(libary);
  }
  // when clicking the button submit the book
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    addBook();
    bookRender();

    //return false;
  };

  let got = new book("game of thrones", "GRRM", "1200");
  let p = new book("one hundred years of salitude", "GG marciz", "800");
  libary.push(got);
});
