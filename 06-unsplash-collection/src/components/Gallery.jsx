import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Paginate from "./Paginate";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm, page } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images",page, searchTerm],
    queryFn: async () => {
      const res = await axios.get(`${url}&query=${searchTerm}&page=${page}`);
      return res.data;
    },
    keepPreviousData: true,
  });

  if (response.isLoading) {
    return <Loading />;
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }
  return (
    <>
      <section className="image-container">
        {results.map((item) => {
          const url = item?.urls?.regular;
          return (
            <img
              key={item.id}
              src={url}
              id={item.id}
              alt={item.alt_description}
              className="img"
            />
          );
        })}
      </section>
      <Paginate />
    </>
  );
};
export default Gallery;
