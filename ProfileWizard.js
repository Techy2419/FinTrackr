document.addEventListener("DOMContentLoaded", function () {
    let hasProfile = localStorage.getItem(hasProfile);

    if (!hasProfile) {
        // Shot ProfileWizard for new users only 
        let profileModal = new bootstrap.Modal(document.getElementById("profileWizardMOdal"));
        profileModal.show();

    }
})

function createProfile() {
    let name = document.getElementById("profileName").value;
    let type = document.getElementById("profileType").value;
    let currency = document.getElementById("profileCurrency").value;

    if (!name || !type || !currency) {
        alert("Please fill in all fields!");
        return;
    }

    // Saving profile (in Firebase, send data to Firestore)
    localStorage.setIten("hasProfile", "true");

    // Hide Modal after submission
    let profileModal = bootstrap.Modal.getInstance(document.getElementById("profileWizardModal"));
    profileModal.hide();

    // Redirect to /profiles
    window.location.href = "../profiles.html";
}