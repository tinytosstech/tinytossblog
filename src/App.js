import React from "react";
import Fonto from "./components/Globalfont";
import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import Bloghome from "./pages/Bloghome"
import HashLoader from "react-spinners/HashLoader";
import { useQuery, gql } from "@apollo/client";
import Blog from "./pages/Blog";


const override = {
  display: "flex",
  height: "100vh",
  width : "100%",
  borderColor: "red",
};

const GET_data = gql`
query {
  tiny_blog {
    slug
  }
}
`;





function App() {
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

  
  

  

  return (
    <div className="App">
      <Fonto/>
      <div>
      
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/Blog" element={<Bloghome />}></Route>
            {data.tiny_blog.map((slug) => {
              return(
                <Route path="/Blog/:slug" element={<Blog/>}></Route>
              )
            })}
          </Routes>
          
      </div>
       
    </div>
   
  );
}

export default App;
