// Object Data to be rendered to the gallery
const galleryData = [
  { id: 1, title: "Apeel", category: "Farms", src: "../images/apeelETech.jpg", description: "Their invisible, edible coating extends produce shelf life by up to 5x", link: "https://www.apeel.com/" },
  // image from https://heritageradionetwork.org/partners/apeel/
  { id: 2, title: "Full Harvest", category: "Farms", src: "../images/fullharvestETech.jpg", description: "The leading produce business marketplace for all grades of produce", link: "https://www.fullharvest.com/" },
  // image from https://www.facebook.com/FullHarvestTech/
  { id: 3, title: "Hungry Harvest", category: "Farms", src: "../images/hungryHarvestETech.png", description: "Bring plant power to people", link: "https://hungryharvest.net/about" },
  // image from https://www.thefrugalgirl.com/all-about-hungry-harvest/
  { id: 4, title: "Imperfect Produce", category: "Farms", src: "../images/imperfectFoodsETech.png", description: "They say: Taste before beauty", link: "https://www.imperfectfoods.com/"},
  // image from https://www.prnewswire.com/news-releases/imperfect-foods-announces-b-corp-certification-301412574.html
  { id: 5, title: "Hazel Technologies", category: "Farms", src: "../images/hazelETech.jpg", description: "Technology that allows more time for produce to get to the market", link: "https://www.hazeltechnologies.com/" },
  // image from https://www.facebook.com/hazeltech/
  { id: 6, title: "OneThird", category: "Shops", src: "../images/oneThirdETech.png", description: "Reduces food waste by predicting shelf life", link: "https://onethird.io/"},
  // image from https://www.prweb.com/releases/onethird-launches-expanded-quality-control-platform-to-prevent-produce-waste-and-save-costs-across-the-supply-chain-302369292.html
  { id: 7, title: "Wasteless", category: "Shops", src: "../images/wastelessETech.jpg", description: "Cutting waste and growing profits", link: "https://www.wasteless.co/"},
  // image from https://finder.startupnationcentral.org/company_page/wasteless?section=team
  { id: 8, title: "Neurolabs", category: "Shops", src: "../images/neurolabETech.png", description: "Provides real-time shelf monitoring for supermarkets", link: "https://www.neurolabs.ai/"},
  // image from https://www.nautacapital.com/news-insights/neurolabs-raises-7-8m-to-transform-cpg-retail-execution-with-synthetic-data-and-visual-ai
  { id: 9, title: "Tenzo", category: "Restaurants", src: "../images/tenzoETech.png", description: "A powerful restaurant performance tool at your fingertips", link: "https://www.lightspeedhq.com/integrations/tenzo/"},
  // image from https://www.lightspeedhq.com/partners/tenzo-case-study/
  { id: 10, title: "Winnow", category: "Restaurants", src: "../images/winnowETech.png", description: "Your food waste problem is solved", link: "https://www.winnowsolutions.com/" },
  // image from https://www.facebook.com/winnowsolutions/
  { id: 11, title: "Too Good To Go", category: "Restaurants", src: "../images/tooGoodToGoETech.png", description: "Save good food from going to waste", link: "https://www.toogoodtogo.com/en-gb" },
  // image from https://www.bristolgoodfood.org/redistributor/too-good-to-go/
  { id: 12, title: "Flashfood", category: "Restaurants", src: "../images/flashfoodETech.png", description: "The app for grocery's best kept deals", link: "https://flashfood.com/"},
  // image from https://play.google.com/store/apps/details/Flashfood_Grocery_Deals?id=com.flashfoodapp.android&hl=en_ZA
  { id: 13, title: "Copia", category: "Restaurants", src: "../images/copiaETech.jpeg", description: "Hunger is the world’s dumbest problem", link: "https://www.gocopia.com/"},
  // image from https://www.facebook.com/GoCopia/
  { id: 14, title: "FoodCloud", category: "Restaurants", src: "../images/foodcloudETech.png", description: "Reducing food loss and waste through surplus food redistribution", link: "https://food.cloud/"},
  // image from https://www.impacteurope.net/stories/no-food-waste
  { id: 15, title: "Maeko", category: "Restaurants", src: "../images/maekoETech.jpg", description: "Leading the change towards zero food waste", link: "https://www.maeko.com.my/aboutus.php"},
  // image from https://www.azocleantech.com/suppliers.aspx?SupplierID=1834
  { id: 16, title: "TotalCtrl", category: "Restaurants", src: "../images/totalctrlETech.jpeg", description: "The kitchen assistant that never clocks out", link: "https://totalctrl.com/"},
  // image from https://gust.com/companies/TotalCtrl
  { id: 17, title: "Olio", category: "Households", src: "../images/olioETech.jpeg", description: "Share more, waste less", link: "https://olioapp.com/en/"},
  // image from https://www.linkedin.com/posts/umaratak_olio-your-local-sharing-app-activity-7054089815968866304-Zi2s
  { id: 18, title: "SuperCook", category: "Households", src: "../images/supercookETech.png", description: "It will suggest a recipe based on ingredients given", link: "https://www.supercook.com/#/desktop"},
  // image from https://www.linkedin.com/company/supercook?originalSubdomain=uk

];

// Get the elements from the DOM
const galleryContainer = document.getElementById("gallery");
const filterButtons = document.getElementById("filters")
let currentBreakpoint = getBreakpoint();

// function to get breakpoint
function getBreakpoint() {

  const width = window.innerWidth;
  if (width < 768) return "sm";
  if (width < 992) return "md";
  if (width < 1200) return "lg";
  return "xl";
}

// function to create the card
function createCardHTML(img) {
    return `<div class="card rounded-3 overflow-hidden h-100">
              <a href="${img.link}" target="_blank" class="text-decoration-none text-dark">
                  <div class="overflow-hidden">
                      <img src="${img.src}" class="img-fluid card-img-top hover-zoom" alt="${img.title}">
                  </div>
                  <div class="card-body text-center">
                      <h4 class="card-title fw-bold">${img.title}</h4>
                      <p class="card-text small">${img.description}</p>
                  </div>
              </a>
            </div>`;
}

// render the images onto the gallery
function renderGallery(images){

    // Initiate the gallery as an empty gallery
    galleryContainer.innerHTML = "";

    // Use a forEach loop to create the card for the individual images
    images.forEach(img => {

        const card = document.createElement("div");
        card.className = "col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2";
        card.innerHTML = createCardHTML(img)

        // Append individual image to the gallery
        galleryContainer.appendChild(card);

    })
}

// when sm and below, show 4 cards, md show 6 cards, lg show 12 cards, anything above show 18
function getResponsiveGalleryData(category = "All") {
  const width = window.innerWidth;

  // if it is all by default, render all
  let filteredData = (category === "All")
    ? [...galleryData]
    : galleryData.filter(img => img.category === category);

  // Group images by category
  const grouped = {};
  filteredData.forEach(img => {
    if (!grouped[img.category]) grouped[img.category] = [];
    grouped[img.category].push(img);
  });

  const categories = Object.keys(grouped);
  let selected = [];

  if (width < 768) {
  // sm: pick any 4 randomly from filteredData
  selected = shuffleArray(filteredData).slice(0, 4);
} else if (width >= 768 && width < 992) {
  // md: pick any 6 randomly from filteredData
  selected = shuffleArray(filteredData).slice(0, 6);
} else {
  // lg and above: show all filtered images
  selected = filteredData;
}
  return selected;
}

// making the order random
function shuffleArray(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

// render image based on the category
function filterImages(category) {
  const imagesToShow = getResponsiveGalleryData(category);
  renderGallery(imagesToShow);
}

// when click, change the category and render that category
filterButtons.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const selectedCategory = e.target.dataset.category;
    filterImages(selectedCategory);
  }
});

// making sure that different breakpoints, different number of examples
window.addEventListener("resize", () => {
  const newBreakpoint = getBreakpoint();
  if (newBreakpoint !== currentBreakpoint) {
    currentBreakpoint = newBreakpoint;
    filterImages("All"); // or preserve last selected category if you want
  }
});

// display all examples initially
window.addEventListener("DOMContentLoaded", () => {
  filterImages("All");
});
