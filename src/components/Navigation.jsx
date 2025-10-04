import React,{useState} from 'react';
import About from './About.jsx'
function Navigation() {
    const [navbar,setNavBar] = useState([
        'Home',
        'About Us',
        'Contact',
        'Help'

    ]);
    
    function set(){
        setNavBar({

    })
    }

    return(
        <div className='Header'>
        <h2>Website</h2>
        <ul>
        {
        navbar.map((navbar,index) => (
        
            <li key={index}>
                <a href='#'>{navbar}</a>
            </li>
            
                                        
        ))
        }
        </ul>
        </div>
    )
}
export default Navigation