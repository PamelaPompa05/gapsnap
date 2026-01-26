import React from "react";
import "../styles/Home.css"; // Ensure you have this CSS file
import FAQ from "../components/FAQ.jsx"; 
import gapsnap_introduction from  '../images/group_image.jpeg'

const Home = () => {

    return (
        <div>
            {/*Introduction section*/}
            <div className="banner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '100px', paddingBottom: '40px'}}>
                {/* Left Half - Text Section */}
                <div className="home" style={{ flex: 1, textAlign: 'left'}}>
                    <h1 style={{ textAlign: 'center', fontSize: "3.7rem", fontWeight: "bold" }}>GapSnap</h1>
                    <p style={{ textAlign: 'center', fontSize: "2rem", padding: '0px', maxWidth: '1200px'}}>GapSnap is a diagnostic tool for grades 4-8 that identifies why students struggle
                    in math by analyzing error patterns, cognitive processes, and language demands, not just correctness.</p>
                </div>

                {/* Right Half - Image Section */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <img src={gapsnap_introduction} alt="gapsnap_introduction" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '10px' }} />
                </div>
            </div>

            {/*How it Works/*/}
            <hr className="section-divider" />

            <div className="banner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <div style={{ maxWidth: "1000px", textAlign: "center" }}>
                    <h1 style={{ textAlign: 'center', fontSize: "2.6rem", fontWeight: "bold" }}>How GapSnap Works</h1>
                    <p style={{ textAlign: 'center', fontSize: "1.6rem", padding: '0px'}}>Students complete a short, story‑based math assessment embedded in a narrative.
                    As they solve problems, the system observes their approach, identifies error types, and adapts the path based on their reasoning.
                    The result is a personalized diagnostic profile that reveals the specific concepts and skills each student needs to grow.</p>
                </div>
            </div>
            

            {/*Why It Matters*/}
            <hr className="section-divider" />

            <div className="banner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <div style={{ maxWidth: "1000px", textAlign: "center" }}>
                    <h1 style={{ textAlign: 'center', fontSize: "2.6rem", fontWeight: "bold" }}>Why GapSnap Matters</h1>
                    <p style={{ textAlign: 'center', fontSize: "1.6rem", padding: '0px'}}>Traditional tools tell teachers what students got wrong. GapSnap tells them why, and what to do next.
                    By uncovering misconceptions, cognitive load issues, and language barriers, GapSnap empowers educators to deliver targeted, equitable instruction that accelerates learning for every student.</p>
                </div>
            </div>

            {/*Link to Assesment*/}
             <hr className="section-divider" />
            <div className="assesment-section" style={{ textAlign: 'center', padding: '20px', paddingBottom: '40px', backgroundColor: '#d9eaf8ff', borderRadius: '5px', margin: '0 300px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Take the Assessment Now!</h2>
                <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}> Find out what your gaps are in math.</p>
                <button onClick={() => window.location.href = '/prototype'} style={{ backgroundColor: '#000b2fff', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer' }} > Start Assessment </button>
            </div>

            {/*FAQ section*/}
            <div class="FAQ">
                <FAQ />
            </div>
        </div>
    );
};


export default Home;