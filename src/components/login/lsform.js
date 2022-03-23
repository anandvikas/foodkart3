import { useState } from "react";
import Signup from "./signup";
import Login from "./login";
import './lsform.css'


const LsForm = (props) => {
    const [sign_log, set] = useState(<><Login hideLSform={props.hideLSform} /></>)

    function setThis(form, strong, weak) {
        if (form == 'Login') {
            set(<><Login hideLSform={props.hideLSform} /></>)
        } else if (form == 'Signup') {
            set(<><Signup hideLSform={props.hideLSform} /></>)
        }
        document.getElementById(strong).style.backgroundColor = 'white'
        document.getElementById(strong).style.color = 'black'
        document.getElementById(weak).style.background = 'none'
        document.getElementById(weak).style.color = 'white'
    }
    return (
        <div className="formPageHolder">
            <button id='formCloseButton' onClick={props.hideLSform}>Close</button>
            <div className="formContainer">
                <div className="formSelectorButtons">
                    <button id="selectLogin" onClick={() => { setThis('Login', 'selectLogin', 'selectSignup') }}>LOG IN</button>
                    <button id="selectSignup" onClick={() => { setThis('Signup', 'selectSignup', 'selectLogin') }}>SIGN UP</button>
                </div>
                {sign_log}
            </div>
        </div>
    )
}
export default LsForm;