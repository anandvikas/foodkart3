import { useState } from "react"

const Signup = (props) => {
    const [signupCred, uSignupCred] = useState({ email: '', psw: '', rpsw: '' })
    const changed = (e) => {
        let { name, value } = e.target
        // console.log(name, value)
        uSignupCred((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const submited = (e) => {
        e.preventDefault()
        if (signupCred.psw === signupCred.rpsw) {            
            alert(`thanks for sign-up\nemail : ${signupCred.email}\npassword : *+&%$@_**`)
            props.hideLSform()
        } else {
            alert('password do not match')
        }
    }
    return (
        <div className="signupHolder">
            <form action="xyz.php" onSubmit={submited}>
                <h1 className="formTitle">Sign Up</h1>
                <p className="formPara">Please fill in this form to create an account.</p>
                <hr />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter Email" name="email" required className="formInput" onChange={changed} />

                <label htmlFor="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required className="formInput" onChange={changed} />

                <label htmlFor="psw-repeat">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" name="rpsw" required className="formInput" onChange={changed} />

                <label>
                    <input type="checkbox" name="remember" /> Remember me
                </label>

                <p>By creating an account you agree to our <a href="#pp">Terms & Privacy</a>.</p>
                <div className="formButtons">
                    <input type="reset" value="Reset" id="formReset" />
                    <input type="submit" value="Signup" id="formSignup" />
                </div>
            </form>
        </div>
    )
}
export default Signup;