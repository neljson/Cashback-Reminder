function init() {
  // Setup your options button
  var optionsUrl = chrome.extension.getURL("./options/options.html"); //this is how you reference extension files
  document.getElementById("options").href = optionsUrl;

  // References to our HTML elements
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const output = document.querySelector("#output");
  const getStorageButton = document.querySelector("button.get-storage");

  // Setup event listener for the form submit to save the input value into storage
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = input.value;

    chrome.storage.sync.set({ formTest: value }, function () {
      console.log("Value is set to " + value);
    });
  });

  // Load up the test deals into the chrome storage
  setTestDeals();

  // Set up the button to retrieve data from the storage
  // NOTE: this is really "Get Deals" button
  getStorageButton.addEventListener("click", loadDeals);
}

function loadDeals() {
  chrome.storage.sync.get(["deals"], function (result) {
    const unpackedDeals = unpackDeals(result.deals);
    console.log("Value currently is " + unpackedDeals);
    // TODO: modify this so instead of just setting the textContent to the value of `deals`,
    //        loop through each deal (where `deals` is an array of json objects) and create elements
    //        to display each deal
    const dealElement = document.createElement("div");
    const titleEl = document.createElement("h3");
    const promoEl = document.createElement("p");
    dealElement.appendChild(titleEl);
    dealElement.appendChild(promoEl);

    titleEl.innerText = unpackedDeals[0].cardCompany;
    promoEl.innerText = unpackedDeals[0].promo;
    output.appendChild(dealElement);
  });
}

// Sets the `deals` key in the storage to some random deals
function setTestDeals() {
  const deals = [
    {
      cardCompany: "Chase Freedom Visa",
      promo: "5% cashback on Amazon and Whole Foods",
      month: "July-Sept.",
    },
    {
      cardCompany: "Discover",
      promo: "5% cashback on Restaurants and Paypal",
      month: "July-Sept.",
    },
  ];
  chrome.storage.sync.set({ deals: packDeals(deals) }, function () {
    console.log("Deals is set to " + deals);
  });
}

document.addEventListener("DOMContentLoaded", init);

// Use this to get a value you can actually set in the storage
function packDeals(deals) {
  return JSON.stringify(deals.map(JSON.stringify));
}

// Use this to "unpack" a value you read from the storage
function unpackDeals(packedDeals) {
  return JSON.parse(packedDeals).map(JSON.parse);
}
