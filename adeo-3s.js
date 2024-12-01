let popupAdLinks = [
  "https://foresightcoercive.com/txfp8xrk2i?key=015db191ade7458b8477edb552e9c230",
  "https://foresightcoercive.com/vw6c8a1s?key=b14863dd5c001ab7956f63b8d20d6b71",
  "https://foresightcoercive.com/n6nt6xgv?key=bc81ac46d7e280c70a2c82d71101a7f3",
  "https://foresightcoercive.com/b2irdaixyg?key=8afb70a3afecaaa5e5f8a7889c979258",
  "https://foresightcoercive.com/tcv6w00f?key=118568e4dd0b125683352f9b6ec745d3",
  "https://libraverce.netlify.app"
];

// Function to create and show the popup ad
function showPopup() {
  let randomNo = Math.floor(Math.random() * 5);

  // Create the popup div
  let popupAd = document.createElement('div');
  popupAd.id = 'popup-ad';
  popupAd.style.position = 'fixed';
  popupAd.style.top = '0';
  popupAd.style.right = '0';
  popupAd.style.width = '100%';
  popupAd.style.height = '100vh';
  popupAd.style.zIndex = '1000';
  popupAd.style.backgroundColor = 'transparent';
  popupAd.style.display = 'flex';
  popupAd.style.justifyContent = 'center';
  popupAd.style.alignItems = 'center';

  // Create the link element
  let popupAdLink = document.createElement('a');
  popupAdLink.id = 'popup-ad-link';
  popupAdLink.href = popupAdLinks[randomNo];
  popupAdLink.target = '_blank';

  // Add the link to the popup ad
  document.body.appendChild(popupAdLink);
  popupAdLink.appendChild(popupAd);

  // Add the click event listener to remove the popup
  popupAd.addEventListener('click', function() {
      document.body.removeChild(popupAdLink); // Remove the popup on click
      setTimeout(showPopup, 1000); // Show again after 1 minute
  });

  console.log(randomNo)
  console.log(popupAdLink.href)
}

// Initially show the popup after 1 minute
setTimeout(showPopup, 1000);
