// var homeContent = ``;

// var aboutContent = ``;
// var productContent = ``;

// var contactContent = ``;

$(document).ready(function () {
  loadContent("home");
  initListeners();
});

function initListeners() {
  $("nav a").on("click", (e) => {
    let pageName = e.currentTarget.id;
    loadContent(pageName);
  });
}

function loadContent(pageName) {
  $.get(`pages/${pageName}.html`, (data) => {
    // console.log(data);
    $("#app").html(data);
  }).fail((error) => {
    // console.log("error ", error);
    alert("page is " + error.statusText);
  });
}
