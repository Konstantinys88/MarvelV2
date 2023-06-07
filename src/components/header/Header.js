import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <a href="#"> <span>Marvel</span>  information portal</a>
            </div>
            <menu className="header__menu">
                <ul>
                    <li><a href="#">Characters</a></li>
                    /
                    <li><a href="#">Comics</a></li>
                </ul>
            </menu>
        </div>
    )

}

export default Header;