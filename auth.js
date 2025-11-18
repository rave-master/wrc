import {
  auth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "./firebase-config.js";

const btnGoogle = document.getElementById("btnGoogle");
const btnFacebook = document.getElementById("btnFacebook");
const spinnerLogin = document.getElementById("spinnerLogin");
const statusMsg = document.getElementById("statusMsg");
const authCard = document.getElementById("authCard");
const imageCard = document.getElementById("imageCard");

function showSpinner(){ spinnerLogin.style.display = "block"; }
function hideSpinner(){ spinnerLogin.style.display = "none"; }
function showStatus(text, isSuccess=false){
  statusMsg.textContent = text;
  statusMsg.style.display = "block";
  statusMsg.classList.toggle("success", isSuccess);
}

function redirectAfterSuccess(){
  authCard.style.transition = "transform .35s, box-shadow .35s";
  authCard.style.transform = "scale(1.03)";
  authCard.style.boxShadow = "0 28px 60px rgba(0,180,255,0.18)";
  setTimeout(()=> window.location.href="/main/index.html", 1100);
}

btnGoogle.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  showSpinner();
  try {
    await signInWithPopup(auth, provider);
    hideSpinner();
    showStatus("Google sign-in successful — redirecting…", true);
    redirectAfterSuccess();
  } catch(err){
    hideSpinner();
    showStatus(err.message || "Google sign-in failed.", false);
  }
});

btnFacebook.addEventListener("click", async () => {
  const provider = new FacebookAuthProvider();
  showSpinner();
  try {
    await signInWithPopup(auth, provider);
    hideSpinner();
    showStatus("Facebook sign-in successful — redirecting…", true);
    redirectAfterSuccess();
  } catch(err){
    hideSpinner();
    showStatus(err.message || "Facebook sign-in failed.", false);
  }
});

imageCard.addEventListener("click", () => {
  window.location.href = "/About/index.html";
});

onAuthStateChanged(auth, (user)=>{
  if(user && !window.location.pathname.startsWith("/main")){
    setTimeout(()=> window.location.href="/main/index.html",400);
  }
});
