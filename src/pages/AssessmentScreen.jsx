import { useState } from "react";
import "../App.css";

export default function AssessmentScreen({ onNext }) {
  // For now: 1 question. Later: expand this array.
  const [submitted, setSubmitted] = useState([false]);

  const handleSubmit = (index) => {
    setSubmitted(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="page">

      <div className="banner-container" style={{ marginTop: "90px" }}>
        <div className="banner-inner">
          <h2 className="section-title">Student Assessment</h2>

          {/* QUESTION 1 */}
          <p className="section-paragraph">
            The trail leads into the locker room. <br />
            It stops at one locker — half open. <br /><br />
            Inside are scratches:
          </p>

          <div style={{ margin: "2rem 0" }}>
            <math-field read-only style={{ fontSize: "1.5rem" }}>
              3 + 4 × (12 - 5) - 2^2
            </math-field>
          </div>

          <p className="section-paragraph">
            Someone needed this number. Fast. <br />
            Enter the number to unlock the box.
          </p>

          <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            <math-field style={{ width: "50%", fontSize: "1.2rem" }}></math-field>
          </div>

          <button className="btn-primary btn-small" onClick={() => handleSubmit(0)}>
            Submit Answer
          </button>

          <div style={{ height: "1.2rem", marginTop: "0.5rem" }}>
            {submitted[0] && (
              <span style={{ fontSize: "0.9rem", color: "green" }}>Submitted!</span>
            )}
          </div>

        </div>
      </div>

      <hr className="section-divider" />

      <br></br>

      <div className="banner-container bottom-section">
        <div className="banner-inner">
          <button className="btn-primary" onClick={onNext}>
            View Learner Summary Screen
          </button>
        </div>
      </div>

    </div>
  );
}
