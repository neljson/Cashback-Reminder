// PUT THE JS YOU WANT TO RUN RIGHT HERE!
// this will run on page load after the browser triggers a finish event

// check the current URL to see if it matches any of our specified roots meaning purchasing points
// listen for any changes to the URL of any tab.
// chrome.tabs.onUpdated.addListener(function (id, info, tab) {
//   console.log("TAB TAB TAB");
//   if (tab.url.toLowerCase().includes("amazon.com")) {
//     chrome.browserAction.show(tab.id);
//   }
// });

// chrome.tabs.query(
//   {
//     active: true,
//     currentWindow: true,
//   },
//   function (tabs) {
//     var tabURL = tabs[0].url;
//     console.log(tabURL);
//   }
// );

// console.log("hi");

// // Gathers up in the information that you need from webpage
// let pageInfo = {
//   url: window.location.href,
// };

// console.log(window.location.href);
// // Sends the information back to background.js
// chrome.runtime.sendMessage(pageInfo);

//check the current date

//if it is a certain quarter, return the associated cashback value in an alert
