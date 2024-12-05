import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<Page />);
function Page() {
  return (
    <div>
      <header>
        <img src="src/assets/react-logo.png" alt="react logo" width="40px" />
      </header>
      <main>
        <h1>Reason I am excited to learn React</h1>
        <ol>
          <li>
            React is a popular library, so I will be able to fit in with all the
            coolest devs out there! 😎
          </li>
          <li>
            I am more likely to get a job as a front end developer if I know
            React
          </li>
        </ol>
      </main>
      <footer>
        <small>© 2024 Ziroll development. All rights reserved.</small>
      </footer>
    </div>
  );
}
