import './contact.css'

const Contact = () => {
    return (
        <div className="contactCon">
            <div className="contact-1">
                <h1 className="contact-1-1">Contact</h1>
                <p className="contact-1-2">Hello my name is <span className="contact-1-2-1"> Vikas Anand </span> im am a self taught web developer.</p>
                <div className="contact-1-3">
                    <a href='https://anandvikas.github.io/portfolio1/' target='_blank'>Portfolio</a>
                    <a href='https://github.com/anandvikas' target='_blank'>GitHub</a>
                    <a href='https://www.linkedin.com/in/vikas-anand-2821b381/' target='_blank'>LinkedIn</a>
                </div>
                <h3 className="contact-1-4">Contact me</h3>
                <ul className="contact-1-5">
                    <li>Email : anandviikas008@gmailcom</li>
                    <li>Phone : +91 7689079881</li>
                </ul>
            </div>
        </div>
    )
}
export default Contact;