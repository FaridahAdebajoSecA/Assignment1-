import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <div className="logo">Faridah Adebajo </div>
        <nav>
          <a href="#">Resume</a>
          <a href="#">Research</a>
          <a href="#">Outreach</a>
          <a href="#">Personal</a>
        </nav>
      </header>

      {/* Profile Section */}
      <main className="profile-container">
        <div className="profile-image">
          <img 
            src="https://images.unsplash.com/photo-1605749439419-80c81f67eefc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VycyUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="Profile" 
            className="profile-pic" 
          />
        </div>

        <div className="profile-info">
          <h1>Faridah Adebajo</h1>
          <h2>A Bit About Me</h2>
          <p>
          I am a Computer Programming student at Humber College with a strong interest in software development, data analysis, and the application of modern technologies. My focus includes web and mobile app development, object-oriented programming, and the integration of machine learning techniques into practical applications.
          </p>

          {/* Buttons */}
          <div className="buttons">
            <button className="resume">Resume</button>
            <button className="research">Research</button>
            <button className="outreach">Outreach</button>
            <button className="personal">Personal</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
