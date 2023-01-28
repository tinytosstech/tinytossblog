import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useQuery, gql } from "@apollo/client";
import HashLoader from "react-spinners/HashLoader";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const override = {
  display: "flex",
  height: "100vh",
  width: "100%",
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
        json
      }
      coverimg {
        url
        id
      }
    }
  }
`;

function Blog() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_data);
  if (loading)
    return (
      <HashLoader
        color={"#36d7b7"}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        className=" mx-auto my-auto"
      />
    );
  if (error) return <p>Error : {error.message}</p>;
  const output = data.tiny_blog.find((element) => element.slug === slug);

  const content = output.content.json;

  const sharedClasses = "dark:text-white";
  const bodyClasses = "text-lg text-gray-700";

  return (
    <div>
      <Navbar></Navbar>
      
      <div className="w-[60%] h-[100%] mx-auto flex flex-col pb-6 max-lg:w-[80%]">
      <div className="mx-auto text-3xl hover:scale-110 duration-300 max-lg:text-2xl">{output.title}</div>
        <RichText
          content={content}
          renderers={{
            h2: ({ children }) => <h2 className="text-3xl mt-4 hover:translate-x-2 duration-300 max-lg:text-lg max-lg:font-semibold">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl ">{children}</h3>,
            img: ({ src, alt }) => (
              <LazyLoadImage
                className="mx-auto h-[100%] w-[100%] bg-slate-500 mt-4"
                effect="blur"
                src={src}
                alt={alt}
              />
            ),
            p: ({ children }) => <p className=" text-lg mt-4 max-lg:text-sm">{children}</p>,
            a: ({ children }) => <a className=" text-lg mt-4 text-red-500 max-lg:text-sm">{children}</a>,
            ul: ({ children }) => (
              <ul className="list-disc list-inside mt-4 text-lg max-lg:text-sm">{children}</ul>
            ),
            ol: ({ children }) =>
              <ol className="list-decimal list-inside  text-lg max-lg:text-sm">{children}</ol>,
            li: ({ children }) => <li className="my-2 text-lg  max-lg:text-sm">{children}</li>,
            code: ({ children }) =>
              <code className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm text-green-400 w-[100px] max-lg:text-sm">{children}</code>,
            code_block: ({ children }) =>
              <pre className="bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 max-lg:text-sm ">${children}</pre>,
          }}
        />
      </div>
    </div>
  );
}

export default Blog;
