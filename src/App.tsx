import React from "react";
import { BlogPostContainer } from "./components/Blog/BlogContainer/BlogPostContainer";
import HeliocentricDiagram from "./components/HeliocentricDiagram/HeliocentricDiagram";
import Layout from "./components/Layout/Layout";

import { posts } from "./data/posts";

function App() {
    const planets = [
        { 
            name: "Earth", color: "blue", image:"/earth.png", distanceFromParent: 5, diameter: 50, orbitalPeriod: 365,
            moons: [
                { name: "Moon", color: "grey", image:"/moon.png", distanceFromParent: 1, diameter: 10, orbitalPeriod: 27 }
            ] 
        },

    ]
    return (
        <Layout desktop={true}>
            <HeliocentricDiagram planets={planets}/>
        </Layout>
    );
}


export default App;
