import "../css/home.css";

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
    return (
        <section className="tours-section">
            <h2>Featured Tours</h2>
            <div className="tour-cards">
                <div className="tour-card">
                    <img src="/images/paris.jpg" alt="Paris" />
                    <div className="tour-card-content">
                        <h3>Romantic Paris</h3>
                        <p>
                            Explore the city of love with guided tours of the
                            Eiffel Tower, Louvre, and more.
                        </p>
                    </div>
                </div>
                <div className="tour-card">
                    <img src="/images/safari.jpg" alt="Safari" />
                    <div className="tour-card-content">
                        <h3>African Safari</h3>
                        <p>
                            Experience wildlife like never before in Kenya’s
                            most breathtaking national parks.
                        </p>
                    </div>
                </div>
                <div className="tour-card">
                    <img src="/images/japan.jpg" alt="Japan" />
                    <div className="tour-card-content">
                        <h3>Discover Japan</h3>
                        <p>
                            From Tokyo to Kyoto, immerse yourself in the beauty,
                            food, and culture of Japan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
