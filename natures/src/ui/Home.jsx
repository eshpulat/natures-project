import { useNavigate } from "react-router-dom";
import "../css/home.css";
import React, { useState, useEffect } from "react";

function Home() {
    return (
        <>
            <div className="home-section">
                <h1>Wanderlust Adventures</h1>
                <p className="home-text">
                    Your journey begins here. Discover the world with us.
                </p>
            </div>

            <ToursSection />
        </>
    );
}

function ToursSection() {
    const [tours, setTours] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/v1/tours"
                );
                const data = await response.json();
                const allTours = data.data.data;
                setTours(allTours.slice(0, 3));
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };

        fetchTours();
    }, []);

    function handleSubmit() {
        navigate("/tours");
    }

    return (
        <section className="tours-section">
            <h2>Featured Tours</h2>
            <div className="tour-cards" onClick={handleSubmit}>
                {tours.map((tour) => (
                    <div key={tour.id} className="tour-card">
                        <img
                            src={`/tours/${tour.imageCover}`}
                            alt={tour.name}
                        />
                        <div className="tour-card-content">
                            <h3>{tour.name}</h3>
                            <p>{tour.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Home;
