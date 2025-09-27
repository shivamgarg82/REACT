function Contact(){

    function btn(){
        alert("heelloooo")
    }
    
    return(
        <div className="Contact">
        <form className="Contact-form">
            <label>Name : </label><br />
            <input type="text" placeholder="Enter Your Name"/><br />

            <label>Email : </label><br />
            <input type="email" placeholder="Enter Your Email" /><br />

            <label>Message : </label><br />
            <textarea rows="2" cols= '30' placeholder="Hi,I Like to drop this message"></textarea><br />

            <button onClick={btn}>Send Me</button><br />        
        </form>
        </div>
    )
}

export default Contact