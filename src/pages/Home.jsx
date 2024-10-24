import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to the Travel Journal</h1>
        <p>Capture your travel experiences and memories in one place!</p>
        <p>Start your journey by adding entries today.</p>
      </div>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>🗺️ Record Locations</li>
          <li>📝 Write Descriptions</li>
          <li>📅 Date Your Adventures</li>
          <li>🗒️ Edit and Delete Entries</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
