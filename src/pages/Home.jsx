import "../styles/Home.css"; // Ensure you have this CSS file
import gapsnap_introduction from  '../images/group_image.jpeg'

const Home = () => {

    return (
        <div>
            {/*Introduction section*/}
            <div className="banner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '100px', paddingBottom: '40px'}}>
                {/* Left Half - Text Section */}
                <div className="home" style={{ flex: 1, textAlign: 'left'}}>
                    <h1 style={{ textAlign: 'center', fontSize: "3.7rem", fontWeight: "bold" }}>GapSnap</h1>
                    <p style={{ textAlign: 'center', fontSize: "2rem", padding: '0px', maxWidth: '1200px'}}>GapSnap is an AI-powered diagnostic intelligence system built for 
                        schools and tutoring organizations serving students in grades 6–9. By moving beyond traditional right/wrong scoring, the platform identifies the underlying 
                        learning barriers preventing mathematical progress. The automated workflow replaces time-intensive manual analysis with immediate, evidence-based instructional 
                        direction, enabling educators to significantly reduce intervention decision time and focus directly on student mastery.</p>
                </div>

                {/* Right Half - Image Section */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <img src={gapsnap_introduction} alt="gapsnap_introduction" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '10px' }} />
                </div>
            </div>

            {/*Link to Get Access*/}
            <hr className="section-divider" />
            <div className="get-access-section" style={{ textAlign: 'center', padding: '20px', paddingBottom: '40px', backgroundColor: '#d9eaf8ff', borderRadius: '5px', margin: '0 300px', marginBottom: '50px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Click here to sign up for the pilot!</h2>
                <button onClick={() => window.open('https://docs.google.com/forms/u/1/d/e/1FAIpQLSd9FHCeqI-L-W8r-NWKpRE5EgKR5twvfeoOZUklBATKroXf2A/viewform?usp=publish-editor&urp=gmail_link', '_blank')} style={{ backgroundColor: '#000b2fff', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer' }} > Get Access </button>
            </div>

        </div>
    );
};


export default Home;