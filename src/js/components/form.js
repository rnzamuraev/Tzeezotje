function form(selector) {
  const form = document.querySelector(selector);
  const url = "send_mail.php";
  const inputArr = form.querySelectorAll("input");
  const validInputArr = [];

  inputArr.forEach((input) => {
    if (input.hasAttribute("data-reg")) {
      input.setAttribute("is-valid", "0");
      validInputArr.push(input);
    }
  });

  form.addEventListener("input", inputHandler);
  form.addEventListener("submit", formCheck);

  function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }

  async function inputCheck(target) {
    const inputValue = target.value;
    const inputReg = target.getAttribute("data-reg");
    const reg = new RegExp(inputReg);

    const span = target.nextElementSibling;

    if (reg.test(inputValue)) {
      target.setAttribute("is-valid", "1");
      span.innerHTML = "";
    } else {
      span.innerHTML = "The field is filled incorrectly";
      span.style.color = "red";
      target.setAttribute("is-valid", "0");
      if (inputValue === "") {
        span.innerHTML = "";
      }
    }
  }

  function formCheck(e) {
    e.preventDefault();

    const isAllValid = [];

    validInputArr.forEach((input) => {
      isAllValid.push(input.getAttribute("is-valid"));
    });

    const isValid = isAllValid.reduce((acc, current) => {
      return acc * current;
    });
    console.log(isValid);

    // eslint-disable-next-line no-extra-boolean-cast
    if (Boolean(Number(isValid))) {
      formSubmit();
      return;
    }
  }

  async function formSubmit() {
    const data = formData(form);
    console.log(data);

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
          formReset();
        }
      }
    };

    console.log(data);
    xhr.open("POST", url, true);
    xhr.send(data);
  }

  function formData(form) {
    return new FormData(form);
  }

  function formReset() {
    form.reset();
  }
}

export default form;
