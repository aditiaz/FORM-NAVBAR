function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("telp").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("Nama tidak boleh kosong");
  } else if (email == "") {
    return alert("Email tidak boleh kosong");
  } else if (phoneNumber == "") {
    return alert("Telpon tidak boleh kosong");
  } else if (subject == "") {
    return alert("Subject tidak boleh kosong");
  } else if (message == "") {
    return alert("Pesan tidak boleh kosong");
  }

  const emailReceiver = "aditiaan96a@gmail.com";

  const mailTo = document.createElement("a");
  mailTo.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name}, ${message}, nomor telpon saya ${phoneNumber}`;
  mailTo.click();

  // let users = {
  //   myName: name,
  //   myEmail: email,
  //   myPhone: phoneNumber,
  //   mySubject: subject,
  //   myMessage: message,
  // };

  // console.log(users);
}
