const button = document.querySelector(".button");
const text1 = document.getElementById("input");
button.addEventListener("click", () => {
    createPassword();
  });


  function createPassword() {
    const chars =
      "0123456ясмиси78кегртмит9abфывcdefghijklmфывnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGйцуйцуHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
      const randomNum = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNum, randomNum + 1);
    }
    text1.value = password;
  }