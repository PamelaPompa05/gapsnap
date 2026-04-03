import "../styles/pagesStyles/TeacherSummaryScreen.css";
import "../App.css";

export default function TeacherSummaryScreen({ onNext }) {
  return (
    <div className="page">
        <div className="report-container" style={{ marginTop: "90px" }}>
            <h2 className="report-title">Teacher Summary</h2>

            <p className="report-field"><b>Student:</b> Jordan M.</p>
            <p className="report-field"><b>Assessment:</b> The Case of the Missing Mascot</p>

            <h3 className="report-section-title">Observed pattern</h3>
            <p className="report-section-text">
            The student attempts multi-step calculations but loses accuracy when multiple
            values must be held and combined. Performance breaks down when the task
            requires tracking more than one piece of information at a time.
            </p>

            <h3 className="report-section-title">Instructional next step</h3>
            <p className="report-section-text">
            Support the student in organizing and tracking each value during multi-step
            problems. Use structured steps and written tracking before combining results.
            </p>
        </div>

        <hr className="section-divider" />

        <br></br>

        <div className="banner-container bottom-section">
            <div className="banner-inner">
                <button className="btn-primary" onClick={onNext}>
                    View Student Assessment Screen
                </button>
            </div>
        </div>

    </div>
  );
}
