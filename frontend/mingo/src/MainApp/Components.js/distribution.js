import React from "react";

const Distribution = ()=>{
    return (
        <div>

    <div id="container">
        <header>
            <h1>Royalty Breakdown</h1>
        </header>

        <div class="royalty-details">
            <h2 class="royalty-title">Track 1</h2>
            <div class="royalty-item">Sales: 100</div>
            <div class="royalty-item">Revenue: $500</div>
            <div class="royalty-item">Royalty Percentage: 10%</div>
            <div class="royalty-item">Royalty Amount: $50</div>
        </div>

        <div class="royalty-details">
            <h2 class="royalty-title">Track 2</h2>
            <div class="royalty-item">Sales: 150</div>
            <div class="royalty-item">Revenue: $750</div>
            <div class="royalty-item">Royalty Percentage: 12%</div>
            <div class="royalty-item">Royalty Amount: $90</div>
        </div>

       

    </div>

    
    <template id="royalty-template">
        <div class="royalty-details">
            <h2 class="royalty-title"></h2>
            <div class="royalty-item">Sales: </div>
            <div class="royalty-item">Revenue: </div>
            <div class="royalty-item">Royalty Percentage: </div>
            <div class="royalty-item">Royalty Amount: </div>
        </div>
    </template>

        </div>
    )
}

export default Distribution;