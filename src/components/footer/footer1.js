import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// STYLING -------------------------------------------
var footer1 = {
    borderTop: '5px double #233a3e',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1600px',
    margin: 'auto'
}
var sec1 = {
    flex: '50%',
    padding: '20px'
}
var sec2 = {
    flex: '50%',
    padding: '20px'
}
var heading = {
    padding: '30px'
}
var linksDiv = {
    display: 'flex',
    flexWrap: 'wrap'
}
var links = {
    padding: '10px',
    margin: '20px',
    fontSize: '30px',
    color: '#233a3e'
}
var susCon = {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap'
}
var input = {
    display: 'block',
    flex: '70%',
    maxWidth: '70%',
    margin: '10px',
    padding: '10px',
    outline: 'none',
    border: '2px solid #233a3e',
    borderRadius: '10px'
}
var button = {
    display: 'block',
    flex: '30%',
    maxWidth: '30%',
    margin: '10px',
    padding: '10px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#233a3e',
    color: 'white',
    borderRadius: '10px'
}

// COMPONENT --------------------------------------------
const Footer1 = () => {
    return (
        <div style={footer1}>
            <div style={sec1}>
                <h3 style={heading}>Follow us on</h3>
                <div style={linksDiv}>
                    <a href="#"  style={links}><FacebookIcon/></a>
                    <a href="#"  style={links}><TwitterIcon/></a>
                    <a href="#"  style={links}><YouTubeIcon/></a>
                    <a href="#"  style={links}><LinkedInIcon/></a>
                    <a href="#"  style={links}><InstagramIcon/></a>
                </div>
            </div>
            <div style={sec2}>
                <h3 style={heading}>Suscribe to our News Letter</h3>
                <div style={susCon}>
                    <input type="text" placeholder="email address" style={input}/>
                    <button style={button}>Suscribe</button>
                </div>
            </div>
        </div>
    );
}
export default Footer1;