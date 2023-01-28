import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useQuery, gql } from "@apollo/client";
import { useLayoutEffect } from "react";

import HashLoader from "react-spinners/HashLoader";
const override = {
  display: "flex",
  height: "100vh",
  width : "100%",
  borderColor: "red",
};


const GET_data = gql`
  query {
    tiny_blog {
      title
      subtitle
      slug
      content {
        html
      }
      coverimg {
        url
        id
      }
    }
  }
`;

function Displayblog() {
  const { loading, error, data } = useQuery(GET_data);
  
  if (loading) return <HashLoader
  color={"#36d7b7"}
  cssOverride={override}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
  className=" mx-auto my-auto"
/>;
  if (error) return <p>Error : {error.message}</p>;

  return data.tiny_blog.map((index) => {
    return (

      <Card
        title={index.title}
        subtitle={index.subtitle}
        img={index.coverimg.url}
        slug={index.slug}
      ></Card>
    );
  }).reverse();
}

function Blog() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-[94%] h-[100%] mx-auto  flex  flex-col mt-[-20px] ">
        <h1 className=" mx-auto">Blog</h1>
        <h1 className=" text-5xl mx-auto mb-2 max-lg:text-4xl"> Tinytossblog</h1>
        <h1 className=" mx-auto"> Technology & Lifestyle </h1>
      </div>

      <div className=" w-[100%] h-[100%] mx-auto  flex relative group justify-evenly flex-wrap max-lg:grid max-lg:grid-cols-2 ">
        <Displayblog></Displayblog>
        
      </div>
    </div>
  );
}

export default Blog;
