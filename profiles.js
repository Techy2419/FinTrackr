document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ profiles Loaded");

  // Open the modal automatically when user logs in
  var createProfileModal = new bootstrap.Modal(
    document.getElementById("createProfileModal")
  );
  createProfileModal.show();

  // Get elements
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const nextStepButton = document.getElementById("nextStep");
  const createProfileButton = document.getElementById("createProfile");
  const progressBar = document.getElementById("progressBar");

  // ✅ Move to Step 2
  nextStepButton.addEventListener("click", function () {
    step1.style.display = "none";
    step2.style.display = "block";
    progressBar.style.width = "100%"; // Progress Bar to 100%
  });

  // ✅ Handle Profile Creation
  createProfileButton.addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const profileName = document.getElementById("profileName").value;
    const profileCategory = document.getElementById("profileCategory").value;
    const currencyType = document.getElementById("currencyType").value;

    if (!firstName || !lastName || !profileName) {
      alert("❌ Please fill out all fields.");
      return;
    }

    console.log("✅ Profile Created:", {
      firstName,
      lastName,
      profileName,
      profileCategory,
      currencyType,
    });

    alert("🎉 Profile Created Successfully!");
    createProfileModal.hide(); // Hide modal after completion
  });
});
