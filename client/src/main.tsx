import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const title = "LumeCredit - Exclusive Lifetime Offer";
document.title = title;

// Add meta tags for SEO
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Get exclusive lifetime access to LumeCredit's premium credit building tools for a one-time payment of $200. Limited to only 250 spots!";
document.head.appendChild(metaDescription);

// Add viewport meta tag
const viewportMeta = document.createElement("meta");
viewportMeta.name = "viewport";
viewportMeta.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(viewportMeta);

// Add font links (using Inter font for modern look)
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
document.head.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(<App />);
