import useTheme from "./useTheme";
import useOnlineStatus from "./useOnlineStatus";
import "./App.css";

function App() {
  const isOnline = useOnlineStatus();
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="app">
      <div className="dashboard">

        <header className="header">
          <h1>Dashboard</h1>
          <p>Monitor your connection and appearance settings.</p>
        </header>

        <section className="setting">
          <div>
            <h2>Connection Status</h2>
            <p>Your current internet connection</p>
          </div>

          <span
            className={`status ${
              isOnline ? "status-online" : "status-offline"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
        </section>

        <section className="setting">
          <div>
            <h2>Appearance</h2>

            <p>
              Current theme:{" "}
              <strong className="theme-name">
                {theme}
              </strong>
            </p>
          </div>

          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </section>

      </div>
    </main>
  );
}

export default App;