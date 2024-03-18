import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.linkedin.com", icon: "fab fa-linkedin" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Unlock exclusive deals and discounts for budget-friendly adventures.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Explore scenic trails and breathtaking landscapes at your pace.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Indulge in luxury accommodations and personalized service for ultimate relaxation."
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "September 15th, 2023",
    title: "Tibet Adventure",
    info: "Explore the ancient wonders of Tibet on a 7-day expedition.",
    location: "China",
    duration: 7,
    cost: 2500,
  },
  {
    id: 2,
    image: tour2,
    date: "July 10th, 2023",
    title: "Amazon Rainforest Trek",
    info: "Immerse yourself in the vibrant biodiversity of the Amazon.",
    location: "Brazil",
    duration: 5,
    cost: 1800,
  },
  {
    id: 3,
    image: tour3,
    date: "October 20th, 2023",
    title: "Safari Adventure",
    info: "Embark on a thrilling safari through Kenya's breathtaking landscapes.",
    location: "Kenya",
    duration: 8,
    cost: 2800,
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2023",
    title: "Northern Lights Excursion",
    info: "Witness the mesmerizing beauty of the Northern Lights in Norway.",
    location: "Norway",
    duration: 4,
    cost: 2000,
  },
  {
    id: 5,
    image: tour5,
    date: "April 12th, 2023",
    title: "Machu Picchu Expedition",
    info: "Uncover the mysteries of Machu Picchu on an unforgettable journey.",
    location: "Peru",
    duration: 6,
    cost: 2200,
  },
  {
    id: 6,
    image: tour6,
    date: "August 30th, 2023",
    title: "Great Barrier Reef Cruise",
    info: "Dive into the colorful world of the Great Barrier Reef on a scenic cruise.",
    location: "Australia",
    duration: 7,
    cost: 2600,
  },
];


