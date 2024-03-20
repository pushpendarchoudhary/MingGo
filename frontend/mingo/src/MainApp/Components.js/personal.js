import React from "react";

const PersonalDetails = ()=>{
    return (
        <div>

    <div id="container">
        <header>
            <h1>Update Personal Information</h1>
        </header>

        <div id="profile-form">
            <label for="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <label for="country">Country:</label>
            <select id="country" name="country" required>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                
            </select>

            <button onclick="updateProfile()">Update Profile</button>
        </div>

        <template id="profile-template">
            <div id="profile-form">
                
            </div>
        </template>
    </div>

</div>
    )
}

export default PersonalDetails;