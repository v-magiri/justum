import {victorLogo} from '/assets/victor.svg';

const NavbarComponent=() =>{
    return(
        <nav>
            <div className="logo">
                <Link to={"/"}><img src={victorLogo} className='logo' alt="Logo" /></Link>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarComponent;