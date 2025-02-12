import { useState } from "react";
import "./about.css";

function About() {
  const [showEmail, setShowEmail] = useState(false);

  function showInfo() {
    setShowEmail(!showEmail);
  }

  return (
    <div className="about page">
      <h1>Vonda Dunigan</h1>

      {showEmail ? (
        <h5>lavondedunigan@gmail.com</h5>
      ) : (
        <p>Click the button below to see my email address</p>
      )}

      <button className="btn btn-outline-primary" onClick={showInfo}>
        {showEmail ? "Hide email" : "Show my email"}
      </button>
    </div>
  );
}

export default About;
