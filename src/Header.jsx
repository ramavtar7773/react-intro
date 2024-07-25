import React from "react";

function Header(){
    return(
        <>
        {/* <ul>
       
    <li>Home</li>
    <li>About</li>
    <li>Menu</li>
    <li>Contect</li>
    <li>Gallary</li>
    </ul> */}
        


    <div className="blue">
        <div className="find">
            <input type="text" placeholder="shirt" />
        </div>
        <div className="btn">
            <button>search</button>
        </div>
        <div className="fire">
            <nav>
                <ul className="list">
                    <li>home</li>
                    <li>product</li>
                    <li>price</li>
                    <li>About</li>

                </ul>
            </nav>
        </div>

    </div>
        </>
    )
}

export default Header;