import { useLoaderData } from "react-router-dom";
import { getTours } from "../services/apiTours";

function Tours() {
    const tour = useLoaderData();
    console.log(tour);
    return <div>Tours</div>;
}

export async function loader() {
    const tour = await getTours();
    return tour;
}

export default Tours;
