
function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");

    // Check if the user has entered a recommendation
    if (recommendation.value != null && recommendation.value.trim() != "") {

        console.log("New recommendation added");

        // Show popup only when a new recommendation is submitted
        showPopup(true);

        // Create a new recommendation element
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");

        element.innerHTML = "<span>&#8220;</span>" 
            + recommendation.value 
            + "<span>&#8221;</span>";

        // Add recommendation to the list
        document.getElementById("all_recommendations")
            .appendChild(element);

        // Reset textarea
        recommendation.value = "";
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible';
    } else {
        document.getElementById('popup').style.visibility = 'hidden';
    }
}

