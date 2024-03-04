
// Simulating existing users 
var existingUsers = [
  { username: "user1", email: "user1@example.com" },
  { username: "user2", email: "user2@example.com" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  try {
    var email = document.getElementById('loginEmail').value.trim();
    var password = document.getElementById('loginPassword').value.trim();
    
    // Checking to ensure if email and password are provided
    if (!email || !password) {
      throw "Email and password are required.";
    }
    // Checking to ensure if the email ends with .com, .edu, .org, or .gov
    var domainPattern = /\.com$|\.edu$|\.org$|\.gov$/;
    if (!domainPattern.test(email)) {
      throw "Email must end with .com, .edu, .org, or .gov.";
    }

    // Checking to ensure if the password meets the criteria
    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[`;:?!<>.=_-~!@#$%^&*])(?=.*[0-9999])(?=.{8,})/;
    if (!passwordPattern.test(password)) {
      throw "Password must be at least 8 characters long and must be contains uppercase letters,symbols and numbers.";
    }
    
    // Check if the account exists
    var userExists = false;
    for (var i = 0; i < existingUsers.length; i++) {
      if (existingUsers[i].email === email) {
        userExists = true;
        break;
      }
    }

    /*if (!userExists) {
      throw "This account does not exist.";
    }*/
    
    // You can add more login validation logic here
    
    alert("Login successful!");
    // You can proceed with further actions like sending data to the server, etc.
    
  } catch (error) {
    alert(error);
    
  } finally {
    // Reset form fields
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
  }
});



document.getElementById('signupForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent default form submission
  
  try {
    var username = document.getElementById('signupUsername').value.trim();
    var email = document.getElementById('signupEmail').value.trim();
    var password = document.getElementById('signupPassword').value.trim();
    
    // Checking to ensure username, email, and password are provided
    if (!username || !email || !password) {
      throw "Username, email, and password are required.";
    }
  
    // Example usage:
    var username1 = "JohnDoe";
    var username2 = "John123";

    
     // username protocol that accepts containing letters-and/or numbers only
    var lettersAndNumbers = /^[a-zA-Z0-9]+$/;
     if (!username.match(lettersAndNumbers)) {
        throw "Username must contain letters and numbers only.";
        }
    
    // Checking to ensure if the email ends with .com, .edu, .org, or .gov
    var domainPattern = /\.com$|\.edu$|\.org$|\.gov$/;
    if (!domainPattern.test(email)) {
      throw "Email must end with .com, .edu, .org, or .gov.";
    }

    // Checking to ensure if the password meets the criteria
    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[`;:?!<>.=_-~!@#$%^&*])(?=.*[0-9999])(?=.{8,})/;
    if (!passwordPattern.test(password)) {
      throw "Password must be at least 8 characters long and contain uppercase letters and symbols.";
    }
   
    
    // Check if the email already exists
    for (var i = 0; i < existingUsers.length; i++) {
      if (existingUsers[i].email === email) {
        throw "This email is already registered.";
      }
    }
    
    alert("Sign up successful!");
    // You can proceed with further actions like sending data to the server, etc.
    
  } catch (error) {
    alert(error);
    
  } finally {
    // Reset form fields
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
  }
});
