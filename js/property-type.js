// function typeApartment() {
//   alert("asdf");
//   const iframe = document.querySelector("#iframe1");
//   const oldNode = iframe.contentWindow.document.querySelector("#lifestyle");
//   const newNode = document.importNode(oldNode, true);
//   document.body.appendChild(newNode);
// }

// function ImportElement() {
//   var srcElement = GetSourceElement();
//   var container = document.getElementById("container");

//   var imported = document.importNode(srcElement, true);

//   container.appendChild(imported);
// }

// function GetSourceElement() {
//   var frame = document.querySelector("#myFrame");
//   // same as contentDocument, but contentWindow is supported by all browsers
//   var frameDoc = frame.contentWindow.document;
//   var srcElements = frameDoc.querySelector("#lifestyle1");
//   return srcElements;
// }
document.addEventListener(
  "DOMContentLoaded",
  function () {
    let x = localStorage.getItem("text");
    if (x == "typeApartment") {
      typeApartment();
      this.location.href = "#property";
    } else if (x == "typeVilla") {
      typeVilla();
      this.location.href = "#property";
    } else if (x == "typeHome") {
      typeHome();
      this.location.href = "#property";
    } else if (x == "typeOffice") {
      typeOffice();
      this.location.href = "#property";
    } else if (x == "typeBuilding") {
      typeBuilding();
      this.location.href = "#property";
    } else if (x == "typeTownhouse") {
      typeTownhouse();
      this.location.href = "#property";
    }
  },
  false
);

function typeApartment() {
  document
    .querySelectorAll(".forRent")
    .forEach((show) => (show.style.display = "none"));
  document
    .querySelectorAll(".forSale")
    .forEach((show) => (show.style.display = "none"));
  const showApartment = document.querySelector(".apartment");
  showApartment.style.display = "initial";
  showApartment.style.margin = "auto";
}

function typeVilla() {
  document
    .querySelectorAll(".forRent")
    .forEach((show) => (show.style.display = "none"));
  document
    .querySelectorAll(".forSale")
    .forEach((show) => (show.style.display = "none"));
  const showVilla = document.querySelector(".villa");
  showVilla.style.display = "initial";
  showVilla.style.margin = "auto";
}

function typeHome() {
  document
    .querySelectorAll(".forRent")
    .forEach((show) => (show.style.display = "none"));
  document
    .querySelectorAll(".forSale")
    .forEach((show) => (show.style.display = "none"));
  const showHome = document.querySelector(".home");
  showHome.style.display = "initial";
  showHome.style.margin = "auto";
}

function typeOffice() {
  document
    .querySelectorAll(".forRent")
    .forEach((show) => (show.style.display = "none"));
  document
    .querySelectorAll(".forSale")
    .forEach((show) => (show.style.display = "none"));
  const showOffice = document.querySelector(".office");
  showOffice.style.display = "initial";
  showOffice.style.margin = "auto";
}

function typeBuilding() {
  document
    .querySelectorAll(".forRent")
    .forEach((show) => (show.style.display = "none"));
  document
    .querySelectorAll(".forSale")
    .forEach((show) => (show.style.display = "none"));
  const showBuilding = document.querySelector(".building");
  showBuilding.style.display = "initial";
  showBuilding.style.margin = "auto";
}

function typeTownhouse() {
  document
    .querySelectorAll(".forRent")
    .forEach((show) => (show.style.display = "none"));
  document
    .querySelectorAll(".forSale")
    .forEach((show) => (show.style.display = "none"));
  const showTownhouse = document.querySelector(".townhouse");
  showTownhouse.style.display = "initial";
  showTownhouse.style.margin = "auto";
}
