
function Footer(){

    let d =  new Date();
    let s = d.getFullYear();

    return(
        <div className='footer'>
        <p>@{s}. All copyrights are reserved.</p>

        </div>
    )
}

export default Footer