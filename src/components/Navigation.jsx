import React,{useState} from 'react';
function Navigation() {
    const [navbar,setNavBar] = useState([

        'Home',
        'About Us',
        'Contact',
        'Help'
    ]);


    return(
        <div className='Header'>
        <h2>Website</h2>
        <ul>
        {navbar.map((navbar,index) => (<li key={index}><a>{navbar}</a></li>))}
        </ul>
        </div>
    )
}
export default Navigation