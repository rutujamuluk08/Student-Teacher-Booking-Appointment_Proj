// auth.js

// Register a new user
function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User Registered: ", userCredential);
        window.location.href = 'login.html';
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  }
  
  // User login
  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User Logged In: ", userCredential);
        window.location.href = 'student-dashboard.html'; // redirect to dashboard based on role
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
      });
  }
  
  // Logout function
  function logout() {
    auth.signOut().then(() => {
      window.location.href = 'login.html';
    }).catch((error) => {
      console.error("Error logging out:", error);
    });
  }
  