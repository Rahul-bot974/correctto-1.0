// Page transition logic
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("splash").classList.add("hidden");
        document.getElementById("phone-page").classList.remove("hidden");
    }, 4000);
});

function submitPhoneNumber() {
    alert("You Registered");
    document.getElementById("phone-page").classList.add("hidden");
    document.getElementById("choice-page").classList.remove("hidden");
}

function selectOption(option) {
    document.getElementById("choice-page").classList.add("hidden");
    if (option === "User") {
        document.getElementById("user-details-page").classList.remove("hidden");
    } else {
        document.getElementById("retailer-details-page").classList.remove("hidden");
    }
}

function submitUserDetails() {
    document.getElementById("user-details-page").classList.add("hidden");
    document.getElementById("user-home-page").classList.remove("hidden");

    // Simulating account details
    document.getElementById("user-account-name").innerText = document.getElementById("user-name").value;
    document.getElementById("user-account-address").innerText = document.getElementById("user-address").value;
    document.getElementById("user-account-pin").innerText = document.getElementById("user-pin").value;
    document.getElementById("user-account-device").innerText = document.getElementById("device-name").value;
}

function submitRetailerDetails() {
    document.getElementById("retailer-details-page").classList.add("hidden");
    document.getElementById("retailer-home-page").classList.remove("hidden");

    // Simulating retailer account details
    document.getElementById("retailer-account-name").innerText = document.getElementById("retailer-name").value;
    document.getElementById("retailer-account-address").innerText = document.getElementById("retailer-address").value;
    document.getElementById("retailer-account-shop").innerText = document.getElementById("shop-name").value;
}

function goHome() {
    document.getElementById("user-details-page").classList.add("hidden");
    document.getElementById("user-home-page").classList.add("hidden");
    document.getElementById("retailer-home-page").classList.add("hidden");
    document.getElementById("retailer-details-page").classList.add("hidden");
    document.getElementById("choice-page").classList.remove("hidden");
}

function goBack() {
    document.getElementById("user-home-page").classList.add("hidden");
    document.getElementById("retailer-home-page").classList.add("hidden");
    document.getElementById("retailer-details-page").classList.add("hidden");
    document.getElementById("choice-page").classList.remove("hidden");
}

function showAccountDetails() {
    document.getElementById("account-box").classList.toggle("hidden");
}

function showRetailerAccount() {
    document.getElementById("retailer-account-box").classList.toggle("hidden");
}

function acceptAssignment() {
    alert("Assignment Accepted");
}

function sendMessage() {
    const message = document.getElementById("chat-message").value;
    if (message) {
        alert("Message Sent: " + message);
    } else {
        alert("Please enter a message.");
    }
}

function shareStatus() {
    const status = document.getElementById("repair-status").value;
    if (status) {
        alert("Status Shared: " + status);
    } else {
        alert("Please enter a status.");
    }
}

function toggleDuty(status) {
    if (status === 'inactive') {
        // Hide the retailer home page
        document.getElementById("retailer-home-page").classList.add("hidden");
        
        // Show the closing page where the retailer fills in duration and solution
        document.getElementById("closing-page").classList.remove("hidden");
    } else {
        alert("Shop is now Active");
    }
}
function submitClosingDetails() {
    const duration = document.getElementById("closing-duration").value;
    const solution = document.getElementById("solution-description").value;

    if (duration && solution) {
        alert("Closing details submitted successfully!");

        // Hide closing page and return to the choice page or the homepage
        document.getElementById("closing-page").classList.add("hidden");
        goHome();  // You can choose where to redirect after submission
    } else {
        alert("Please fill out both fields.");
    }
}
// Simulate search action
function searchSomething() {
    alert("Search functionality coming soon!");
}

// Show Google Map
function showMap() {
    const mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10
    };
    const map = new google.maps.Map(document.getElementById("map-container"), mapOptions);
    document.getElementById("map-container").classList.remove("hidden");
}

// Show problem type options
function showProblemOptions() {
    document.getElementById("problem-options").classList.toggle("hidden");
}

// Select hardware/software and show description box
function selectProblemType(type) {
    alert(`Selected: ${type}`);
    document.getElementById("problem-description-box").classList.remove("hidden");
}

// Submit problem and show retailer details
function submitProblem() {
    const description = document.getElementById("problem-description").value;
    if (description) {
        alert("Problem submitted successfully!");

        // Simulating assigned retailer details
        document.getElementById("retailer-account-name").innerText = "Retailer A";
        document.getElementById("retailer-account-address").innerText = "123 Retailer Street";
        document.getElementById("retailer-account-shop").innerText = "Best Repairs";

        // Show retailer details on the user home page
        document.getElementById("retailer-details-box").classList.remove("hidden");

        // Hide problem submission section
        document.getElementById("submit-problem-section").classList.add("hidden");
    } else {
        alert("Please describe your problem.");
    }
}

// Show/Hide account details box
function showAccountDetails() {
    document.getElementById("account-box").classList.toggle("hidden");
}
