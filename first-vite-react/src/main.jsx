import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<TemporaryName />);
function TemporaryName() {
  return (
    <div>
      <header>
        <nav>
          <img src="src/assets/react-logo.png" width="40px" alt="react logo" />
        </nav>
      </header>
      <main>
        <h1>Fun facts about React!</h1>
        <ul>
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  );
}
