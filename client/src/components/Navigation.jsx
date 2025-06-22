export default function Navigation() {
    return (
        <nav>
            <div className="logo-div">
                <img src="client\src\assets\images\3903482.jpg" alt="" />
            </div>
            <ul className="categories-list">
                <li>Man</li>
                <li>Women</li>
                <li>Children</li>
                <li>All</li>
            </ul>
            <div className="search-div">
                <input type="text" name="search" id="search" />
                <button className="search-button">

                </button>
            </div>
            <ul className="profile-list">
                <li>Registration</li>
                <li>Login</li>
                <li>Logout</li>
                <li>Avatar</li>
            </ul>
        </nav>
    )
}