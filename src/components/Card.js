import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card(props) {
  return (
    <Link to = {"/Blog/" + props.slug}>
        <div>
    <div className="flex flex-col mb-[24px] hover:-translate-y-3 duration-300">
      <LazyLoadImage
        className="h-[21.2vw] w-[21.2vw] mt-[24px] "
        src={props.img}
        effect="blur"
      />
     <div className="flex justify-between flex-col">
         <h1 className="mt-[12px] text-2xl">{props.title}</h1> 
         <h1 className="font-light w-[21.2vw]">{props.subtitle}</h1>
     </div>
     
    </div>
    </div>
    </Link>
  );
}

export default Card;
