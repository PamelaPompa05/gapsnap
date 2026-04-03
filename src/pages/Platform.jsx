import three_screen from "../images/three_screen_systems_view.jpeg";
import "../App.css";

const Platform = () => {
  return (
    <div>

      {/* Three-Screen Image */}
      <div className="banner-container" style={{ marginTop: "90px" }}>
        <div className="banner-inner">
          <div className="image-wrapper">
            <img
              src={three_screen}
              alt="Three-Screen Systems View"
              className="section-image"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="section-divider" />

      {/* How It Works */}
      <div className="banner-container">
        <div className="banner-inner">
          <h1 className="section-title">How GapSnap Works</h1>

          <p className="section-paragraph">
            GapSnap operates as a complete diagnostic engine from assessment to instructional action.
          </p>

          <p className="section-paragraph">
            The process begins with a story-based assessment where students solve embedded math problems as 
            part of a continuous experience. Narrative elements appear between questions to maintain engagement 
            while responses capture meaningful reasoning and error signals. The AI Diagnostic Analysis evaluates 
            these response patterns to determine the underlying learning barrier affecting progress. The system 
            then generates an educator-facing Actionable Report that connects the identified learning barrier to 
            a targeted, research-informed intervention strategy.
          </p>

          <p className="section-paragraph">
            This entire workflow is fully automated, producing consistent diagnostic insight that is scalable, 
            structured, and immediately usable for instructional decision-making.
          </p>
        </div>
      </div>

    <br></br><br></br>

    </div>
  );
};

export default Platform;
