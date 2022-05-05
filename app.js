const PageState = function () {
  //in this pattern, the current single page is changed to the individual new "states" of the page each with different content
  let currentState = new homeState(this); //this is current state of the page which is the home

  this.init = function () {
    //this is the initial state of the page
    this.change(new homeState());
  };
  this.change = function (state) {
    //this changes current state of the page to the state passed as argument
    currentState = state; //state refers to the current function acting on the container div in the body
  };
};

//Home State
const homeState = function (page) {
  //this declares the home page
  document.getElementById("heading").textContent = null; //this changes the div container to this content,the div will hold the pages of the entire application
  document.getElementById("content").innerHTML = `
  <div class="bg-light p-5 rounded-lg m-3">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
  `;
};

//about page
const aboutState = function (page) {
  //this changes the content of div, which holds the entire page
  document.getElementById("heading").textContent = "About Us";
  document.getElementById("content").innerHTML = `
  <p>This is the about page</p>
  `;
};

//Contact
const contactState = function (page) {
  //this changes the content of div, which holds the entire page
  document.getElementById("heading").textContent = "Contact Us";
  document.getElementById("content").innerHTML = `
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `;
};

//create new instance of pageState//
const page = new PageState();

//initialize the first state ie homeState//
page.init();

//UI variables
//connect to buttons in markup
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
// disabled = document.getElementById("disabled");

//home event listener
home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});

//about event listener
about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

//contact event listener
contact.addEventListener("click", (e) => {
  page.change(new contactState());

  e.preventDefault();
});
