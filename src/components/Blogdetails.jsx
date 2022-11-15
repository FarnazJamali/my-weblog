import { useParams } from "react-router-dom";

const Blogdetails = () => {
  const { id } = useParams();
  return (
    <>
          <h3>Blog {id}</h3>
          
    </>
  );
};

export default Blogdetails;
