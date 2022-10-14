const cobElement = document.createElement("li");
const linkElement = document.createElement("a");
linkElement.setAttribute("href", "https://www.csulb.edu/college-of-business");
linkElement.textContent = "College of Business";
cobElement.appendChild(linkElement);
document.getElementById("links").insertBefore(cobElement,document.getElementById("is"))
