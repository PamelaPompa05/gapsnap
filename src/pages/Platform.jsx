import three_screen from  '../images/three_screen_systems_view.jpeg'

const Platform = () => {

    return (
        <div>
             {/*Three-Screen Image*/}
                <div className="banner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', marginTop: '40px'}}>
                    <div style={{ maxWidth: "1000px", textAlign: "center" }}>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <img src={three_screen} alt="Three-Screen Systems View" style={{ width: '100%', maxWidth: '700px', height: 'auto', borderRadius: '10px' }} />
                        </div>
                    </div>
                </div>

            {/*How it Works/*/}
                <hr className="section-divider" />

                <div className="banner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                    <div style={{ maxWidth: "1000px", textAlign: "center" }}>
                        <h1 style={{ textAlign: 'center', fontSize: "2.6rem", fontWeight: "bold" }}>How GapSnap Works</h1>
                        <p style={{ textAlign: 'center', fontSize: "1.6rem", padding: '0px'}}>GapSnap operates as a complete diagnostic engine from assessment to instructional action.
                        </p>
                        <p style={{ textAlign: 'center', fontSize: "1.6rem", padding: '0px'}}>The process begins with a story-based assessment where students solve embedded math problems as 
                            part of a continuous experience. Narrative elements appear between questions to maintain engagement while responses capture meaningful reasoning and error signals. 
                            The AI Diagnostic Analysis evaluates these response patterns to determine the underlying learning barrier affecting progress. The system then generates an educator-facing 
                            Actionable Report that connects the identified learning barrier to a targeted, research-informed intervention strategy.
                        </p>
                        <p style={{ textAlign: 'center', fontSize: "1.6rem", padding: '0px'}}>This entire workflow is fully automated, producing consistent diagnostic insight that is scalable, 
                            structured, and immediately usable for instructional decision-making.
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default Platform;