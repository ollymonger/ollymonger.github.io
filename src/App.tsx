import React from "react";
import { BlogPostContainer } from "./components/Blog/BlogContainer/BlogPostContainer";
import HelioscopicDiagram from "./components/HelioscopicDiagram";
import Layout from "./components/Layout/Layout";

import { posts } from "./data/posts";

function App() {
    const planets = [
        { name: "Mercury", color: "black", distanceFromSun: 1, diameter: 15, orbitalPeriod: 88 },
        { name: "Venus", color: "gold", image:"/venus.jpeg", distanceFromSun: 3, diameter: 35, orbitalPeriod: 225 },
        { name: "Earth", color: "blue", image:"/earth.png", distanceFromSun: 5, diameter: 50, orbitalPeriod: 365 },
        { name: "Mars", color: "black", distanceFromSun: 8, diameter: 37, orbitalPeriod: 687 },
        { name: "Jupiter", color: "black", distanceFromSun: 10, diameter: 70, orbitalPeriod: 4333 },
        { name: "Saturn", color: "black", distanceFromSun: 12, diameter: 25, orbitalPeriod: 10759 },
        { name: "Uranus", color: "black", distanceFromSun: 14, diameter: 25, orbitalPeriod: 30685 },
        { name: "Neptune", color: "black", distanceFromSun: 15, diameter: 25, orbitalPeriod: 60190}

    ]
    return (
        <Layout desktop={true}>
            <HelioscopicDiagram planets={planets}/>
        </Layout>
    );
}


export default App;
