const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("confirmpassword").value;

  if (!email.split("").includes("@")) {
    console.error("not a valid email");
    return;
  }

  if (password.length < 8 || cpassword.length < 8) {
    console.error("not required length");
    return;
  }

  if (password !== cpassword) {
    console.error("Password not matched");
    return;
  }

  console.log("Registration successful.");
  console.log(`Welcome ${email}`);
});
