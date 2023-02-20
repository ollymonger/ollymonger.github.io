import React from "react";
import { BlogPostContainer } from "./components/Blog/BlogContainer/BlogPostContainer";
import Layout from "./components/Layout/Layout";

import { posts } from "./data/posts";

function App() {
    return (
        <Layout desktop={true}>
            <BlogPostContainer blogPosts={posts}/>
        </Layout>
    );
}


export default App;
