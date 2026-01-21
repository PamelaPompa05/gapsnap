import "../styles/Footer.css"; // Ensure you have this CSS file

{/*To import images later: import discordIcon from '../images/discord-icon.png';*/}
{/*This is to add images later:
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '5px' }}>
                    <a href="https://discord.gg/NKqXFXk5Rv" target="_blank" rel="noopener noreferrer">
                        <img src={discordIcon} alt="Discord" style={{ width: '40px', height: '40px' }} />
                    </a>
                </div>*/}

const Footer = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 5px', backgroundColor: '#FFCC33', color: '#000000'}}>
            {/* Left side - Copyright */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
                {/*<img src={CSDavis_logo} alt="Color Stack Logo" style={{ width: '140px', height: 'auto', marginBottom: '0px'}} />*/}
                <p style={{ fontSize: '14px', textAlign: 'center', marginTop: '0px', marginBottom: '0px' }}>© 2026 GapSnap.</p>
            </div>

            {/* Right side - Contact Us */}
            <div style={{ alignItems: 'center', textAlign: 'center', marginRight: '100px', display: 'flex', flexDirection: 'column', marginBottom: '5px' }}>
                <h3 style={{ marginBottom: '3px', fontSize: '22px' }}>Contact Us</h3>
                <p style={{ fontSize: '16px', marginTop: '0px', marginBottom: '2px' }}>eoye@ucdavis.edu</p>
            </div>
        </footer>
    );
};

export default Footer;