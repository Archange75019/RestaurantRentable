import './style.css'
export default function Header() {
    return (
        <header className="site-header">
            <div className="site-identity">
                <h1><a href="/#">GeranceImo</a></h1>
            </div>
            <nav className="site-navigation">
                <ul className="nav">
                    <li><a href="/produits">produits</a></li>
                    <li><a href="/plats">plats</a></li>
                    <li><a href="/boissons">boissons</a></li>
                    <li><a href="/entrees">entrees</a></li>
                    <li><a href="/desserts">desserts</a></li>


                </ul>
            </nav>
        </header>
    )
}