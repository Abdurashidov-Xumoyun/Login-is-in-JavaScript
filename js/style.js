document.querySelector(".username").addEventListener("focusout", myText);
document.querySelector(".password").addEventListener("focusout", myPass);

document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();
  myText();
  myPass();
  serverJob();
});

function myText() {
  let elementErr = document.querySelector(".username");
  let userNameValue = document.querySelector("#username").value;
  let userErrorText = document.querySelector(".userError");

  try {
    if (userNameValue == "") {
      elementErr.classList.add("error");
      elementErr.classList.remove("true");
      throw "kiritilmagan";
    }

    if (userNameValue.length < 3) {
      elementErr.classList.add("error");
      elementErr.classList.remove("true");
      throw `3 ta belgidan ko'p bo'lishi kerak`
    }

    if (userNameValue.length > 0) {
      elementErr.classList.remove("error");
      elementErr.classList.add("true");
      userErrorText.innerHTML = ""
    }
  } catch (e) {
    userErrorText.innerHTML = `Malumot ${e}`
  }
}

function myPass() {
  let elementErr = document.querySelector(".password");
  let userNameValue = document.querySelector("#password").value;
  let userErrorPass = document.querySelector(".passError");

  try {
    if (userNameValue == "") {
      elementErr.classList.add("error");
      elementErr.classList.remove("true");
      throw "kiritilmagan";
    }

    if (userNameValue.length < 5) {
      elementErr.classList.add("error");
      elementErr.classList.remove("true");
      throw `5 ta belgidan katta bo'lishi kerak`;
    }

    if (userNameValue.length > 0) {
      elementErr.classList.remove("error");
      elementErr.classList.add("true");
      userErrorPass.innerHTML = "";
    }
  } catch (e) {
    userErrorPass.innerHTML = `Parol ${e}`;
  }
}

function serverJob() {
  let userNameValue = document.querySelector("#username").value;
  let userNamePassValue = document.querySelector("#password").value;
  if (
    userNameValue.length >= 3 && userNamePassValue.length >= 5
  ) {
    if (confirm(`Siz muvaffaqiyatli ro'yhatdan o'tdingiz`)) {
      window.document.querySelector("#username").value = "";
      window.document.querySelector("#password").value = "";
    } else {
      alert(`Malumotlaringizni o'zgartirishingiz mumkin, Marhamat`)
    }
  } else {
    alert("Iltimos to'liq malumot kriting va kritgan malumotlaringizni tekshirib ko'ring !")
  }
}