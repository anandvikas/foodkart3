import './custsup.css'

const CustSup = () => {
    return (
        <div className='csCon'>
            <h1>Any feedback related to our service ?</h1>
            <h2>Please let us know</h2>
            <div className='csformdiv'>
                <form>                    
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter Email" name="email" required className="emailField" />

                    <label htmlFor="psw">Message</label>
                    <textarea name="meText" className='meField' required/>

                    <div className="csButton">                        
                        <input type="submit" value="Send" id="csSubmit" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CustSup;