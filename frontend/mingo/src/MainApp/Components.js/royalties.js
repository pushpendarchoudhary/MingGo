import React from "react";

const Royalties = ()=>{
    return (
 

    <div id="container">
        <header>
            <h1>Royalty Statements</h1>
        </header>

        <div id="statement-options">
            <button>Current Earnings</button>
            <button>Historical Statements</button>
        </div>

        <div id="current-earnings" class="hidden">
            
            <p>Current earnings statement goes here...</p>
        </div>

        <div id="historical-statements" class="hidden">
            
            <p>Historical statements go here...</p>
        </div>
    </div>


    )
}

export default Royalties;