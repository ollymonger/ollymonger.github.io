import React from "react";
import HeliocentricDiagram from "./components/HeliocentricDiagram/HeliocentricDiagram";
import Layout from "./components/Layout/Layout";

function App() {
    const planets = [
        { name: "Mercury", color: "none", image:"/mercury.png", distanceFromParent: 1.5, diameter: 10, orbitalPeriod: 88 },
        { name: "Venus", color: "yellow", image:"/venus.png", distanceFromParent: 3, diameter: 20, orbitalPeriod: 225 },

        { 
            name: "Earth", color: "blue", image:"/earth.png", distanceFromParent: 8, diameter: 50, orbitalPeriod: 365,
            moons: [
                { name: "Moon", color: "grey", image:"/moon.png", distanceFromParent: 1, diameter: 10, orbitalPeriod: 27 }
            ] 
        },

        { name: "Mars", color: "none", image:"/mars.png", distanceFromParent: 15, diameter: 40, orbitalPeriod: 687 },
        { name: "Jupiter", color: "none", image:"/jupiter.png", distanceFromParent: 25, diameter: 100, orbitalPeriod: 4333 },
        { name: "Saturn", color: "brown", distanceFromParent: 35, diameter: 90, orbitalPeriod: 10759 },
        { name: "Uranus", color: "lightblue", image:"/uranus.png", distanceFromParent: 45, diameter: 80, orbitalPeriod: 30687 },
        { name: "Neptune", color: "darkblue", image:"/neptune.png", distanceFromParent: 55, diameter: 70, orbitalPeriod: 60190 },
    ]
    return (
        <Layout desktop={true}>
            <HeliocentricDiagram planets={planets}/>
        </Layout>
    );
}


export default App;
