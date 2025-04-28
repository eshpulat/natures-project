import { useLoaderData } from "react-router-dom";
import { getTours } from "../services/apiTours";

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

function TourItem({ tour }) {
    const {
        name,
        description,
        ratingsAverage,
        imageCover,
        difficulty,
        price,
        summary
    } = tour;

    return (
        <li>
            <img
                src={`/tours/${imageCover}`}
                alt={name}
                style={{ width: "100%", height: "auto" }}
            />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Rating: {ratingsAverage}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Price: ${price}</p>
                <p>{summary}</p>
            </div>
        </li>
    );
}

export default Tours;
