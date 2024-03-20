import React from "react";

const Report = ()=>{
    return (
        

    <div id="container">
        <header>
            <h1>Sales and Revenue Details</h1>
        </header>

        <div id="filters">
            <label for="filter-date">Filter by Date:</label>
            <input type="date" id="filter-date" name="filter-date"/>

            <label for="filter-asset">Filter by Asset:</label>
            <select id="filter-asset" name="filter-asset">
                <option value="track">Track</option>
                <option value="album">Album</option>
                
            </select>

            <button>Generate Report</button>
        </div>

        <div id="sales-details">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Asset</th>
                        <th>Sales</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <template id="row-template">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>


    )
}

export default Report;