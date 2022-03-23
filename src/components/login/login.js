import { useState } from "react"

const Login = (props) => {
    const [loginCred, uLoginCred] = useState({ email: '', psw: '' })
    const changed = (e) => {
        let {name, value} = e.target
        // console.log(name, value)
        uLoginCred((prev)=>{
            return {...prev, [name]:value}
        })
    }
    const submited = (e)=>{
        e.preventDefault()
        alert(`thanks for log-in\nemail : ${loginCred.email}\npassword : ********`)
        props.hideLSform()
    }
        return (
            <div className="loginHolder">
                <form action="xyz.php" onSubmit={submited}>
                    <h1 className="formTitle">Log In</h1>
                    <p className="formPara">Please fill in this form to log in.</p>
                    <hr />
                    <label htmlFor="email" className="lsFormLabel">Email</label>
                    <input type="text" placeholder="Enter Email" name="email" required className="formInput" onChange={changed} />

                    <label htmlFor="psw" className="lsFormLabel">Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" required className="formInput" onChange={changed} />

                    <div className="formButtons">
                        <input type="reset" value="Reset" id="formReset" />
                        <input type="submit" value="Login" id="formLogin" />
                    </div>
                </form>
            </div>
        )
    }
    export default Login;