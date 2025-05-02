import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/tourDetail.css";

function TourDetails() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/tours/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTour(data.data.data);
            });
    }, [id]);

    if (!tour) return <div>Loading...</div>;

    return (
        <div className="tour-details">
            <h1 className="tour-title">{tour.name}</h1>
            <img
                className="tour-main-image"
                src={`/tours/${tour.imageCover}`}
                alt={tour.name}
            />
            <div className="tour-info">
                <p>
                    <strong>Summary:</strong> {tour.summary}
                </p>
                <p>
                    <strong>Description:</strong> {tour.description}
                </p>
                <p>
                    <strong>Rating:</strong> {tour.ratingsAverage}
                </p>
                <p>
                    <strong>Difficulty:</strong> {tour.difficulty}
                </p>
                <p>
                    <strong>Price:</strong> ${tour.price}
                </p>
            </div>
            {Array.isArray(tour.images) && (
                <div className="tour-gallery">
                    <h2 className="tour-gallery-title">Gallery</h2>
                    <div className="tour-gallery-images">
                        {tour.images.map((img, index) => (
                            <img
                                key={index}
                                src={`/tours/${img}`}
                                alt={`Tour image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default TourDetails;
