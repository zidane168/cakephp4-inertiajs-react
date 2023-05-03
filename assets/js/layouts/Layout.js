import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="row">
            <div className="col-2">
                <ul className="nav flex-column">
                    <li className="nav-item"> 
                        <Link className="nav-link" href="/"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/about"> About </Link>
                    </li>
                    <li className="nav-item">                    
                        <Link className="nav-link" href="/contact"> Contact </Link>
                    </li>
                    <li className="nav-item">                    
                        <Link className="nav-link" href="/items/"> Redirect to Red index </Link>
                    </li>
                    <li className="nav-item">                    
                        <Link className="nav-link" href="/items/red"> Redirect to Red page </Link>
                    </li>
                    <li className="nav-item">                    
                        <Link className="nav-link" href="/items/different-action-same-component"> Redirect to Same Component </Link>
                    </li>
                </ul>
            </div>
            <div className="col">
                <main>
                    <header></header>

                    <article> {children} </article>
                </main>
            </div>
        </div>
    );
}
