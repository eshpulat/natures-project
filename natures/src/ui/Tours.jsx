import { useLoaderData, useNavigate } from "react-router-dom";
import { getTours } from "../services/apiTours";
import "../css/tours.css";
import GetTour from "./TourDetales";

function Tours() {
    const tours = useLoaderData();
    console.log(tours.data);
    const data = tours.data;
    return (
        <ul>
            {data.map((tour) => (
                <TourItem tour={tour} key={tour.id} />
            ))}
        </ul>
    );
}

export async function loader() {
    const tours = await getTours();
    return tours;
}

export function TourItem({ tour }) {
    const { id, name, ratingsAverage, imageCover, difficulty, price, summary } =
        tour;
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Tour ID:", id);
        navigate(`/tours/${tour._id}`);
    };

    return (
        <li>
            <img src={`/tours/${imageCover}`} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{summary}</p>
                <p>Rating: {ratingsAverage}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Price: ${price}</p>
                <button onClick={handleClick} className="review-btn">
                    Review Tour
                </button>
            </div>
        </li>
    );
}

export default Tours;
