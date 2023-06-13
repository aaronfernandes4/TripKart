import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Link ,useNavigate} from "react-router-dom";


const FeaturedProperties = () => {
  const navigate = useNavigate();
  const navigateToContacts = (da) => {
    // 👇️ navigate to /contacts
    navigate('/hotels/'+da);
  };
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  console.log(data);
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id} onClick={() =>{navigateToContacts(item._id)} }>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ₹{item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
