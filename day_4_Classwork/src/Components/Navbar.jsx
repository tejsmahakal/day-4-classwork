import './Navbar.css'


function Navbar(){
    return(
        <>
        <div>
            <div className='Navbar'>
                <div className="logo">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdgjUBQjPBTnqBaDjFY0ylKI7iANBQfoQFFzRYPSAjhGcdwUHu" width="30px" height="30px" />
                    <h2>Hootsuite</h2>
                    <ul>
                    <li>platforms</li>
                    <li>Plans</li>
                    <li>Enterprise</li>
                    <li>Resourses</li>
                    <li>Education</li>
                </ul>
                </div>
                
                <div className='button'>
                    <button className='p'>Contact us</button>
                    &ensp;
                    <button className='p'>Log in</button>
                    &ensp;
                    <button className='green'>Sign Up</button>

                </div>
            </div>
        </div>
        
        </>

    );
}

export default Navbar