// ✅ Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1JwZKbMl3XTDgQauXbZ4zYTAcio1q_U8",
  authDomain: "fintrackr-3a695.firebaseapp.com",
  projectId: "fintrackr-3a695",
  storageBucket: "fintrackr-3a695.appspot.com",
  messagingSenderId: "324914995959",
  appId: "1:324914995959:web:08fcb9ed108357c3ebe9f2",
};

// ✅ Initialize Firebase App & Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Initialize Google & GitHub Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// ✅ Handle Sign-Up
function handleSignUp(event) {
  event.preventDefault();
  console.log("✅ Sign-Up Button Clicked!");

  // ✅ Get Input Values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("❌ Please enter both email and password.");
    return;
  }

  // ✅ Create New User
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("✅ User Signed Up:", userCredential.user);

      window.location.href = "../dashboard.html"; // ✅ Redirect to Dashboard
    })
    .catch((error) => {
      console.error("❌ Sign-Up Error:", error);
      alert(error.message);
    });
}

// ✅ Handle Sign-In
function handleSignIn(event) {
  event.preventDefault();
  console.log("✅ Sign-In Button Clicked!");

  // ✅ Get Input Values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("❌ Please enter both email and password.");
    return;
  }

  // ✅ Sign In Existing User
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("✅ User Signed In:", userCredential.user);

      window.location.href = "../profiles.html"; // ✅ Redirect to Dashboard
    })
    .catch((error) => {
      console.error("❌ Sign-In Error:", error);
      alert(error.message);
    });
}

// ✅ Handle Google Sign-In
function signInWithGoogle() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log("✅ Google Sign-In Successful:", result.user);

      window.location.href = "../dashboard.html"; // ✅ Redirect to Dashboard
    })
    .catch((error) => {
      console.error("❌ Google Sign-In Error:", error);
      alert(error.message);
    });
}

// ✅ Handle Google Sign-Up
function signUpWithGoogle() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log("✅ Google Sign-Up Successful:", result.user);

      window.location.href = "../profiles.html"; // ✅ Redirect to Dashboard
    })
    .catch((error) => {
      console.error("❌ Google Sign-Up Error:", error);
      alert(error.message);
    });
}

// ✅ Handle GitHub Sign-In
function signInWithGitHub() {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      console.log("✅ GitHub Sign-In Successful:", result.user);

      window.location.href = "../profiles.html"; // ✅ Redirect to Dashboard
    })
    .catch((error) => {
      console.error("❌ GitHub Sign-In Error:", error);
      alert(error.message);
    });
}

// ✅ Handle GitHub Sign-Up
function signUpWithGitHub() {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      console.log("✅ GitHub Sign-Up Successful:", result.user);

      window.location.href = "../profiles.html"; // ✅ Redirect to Dashboard
    })
    .catch((error) => {
      console.error("❌ GitHub Sign-Up Error:", error);
      alert(error.message);
    });
}

// ✅ Attach Event Listeners (Waits for DOM to Load)
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ Firebase SSO Script Loaded!");

  // ✅ Sign-Up Button Event Listener
  const signUpButton = document.getElementById("signUp");
  if (signUpButton) {
    signUpButton.addEventListener("click", handleSignUp);
  }

  // ✅ Sign-In Button Event Listener
  const signInButton = document.getElementById("signIn");
  if (signInButton) {
    signInButton.addEventListener("click", handleSignIn);
  }

  // ✅ Google OAuth Button Event Listeners
  const googleSignUpButton = document.getElementById("google-signup");
  if (googleSignUpButton) {
    googleSignUpButton.addEventListener("click", signUpWithGoogle);
  }

  const googleSignInButton = document.getElementById("google-signin");
  if (googleSignInButton) {
    googleSignInButton.addEventListener("click", signInWithGoogle);
  }

  // ✅ GitHub OAuth Button Event Listeners
  const githubSignUpButton = document.getElementById("github-signup");
  if (githubSignUpButton) {
    githubSignUpButton.addEventListener("click", signUpWithGitHub);
  }

  const githubSignInButton = document.getElementById("github-signin");
  if (githubSignInButton) {
    githubSignInButton.addEventListener("click", signInWithGitHub);
  }
});
