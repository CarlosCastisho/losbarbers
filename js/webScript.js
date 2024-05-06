function validateForm() {
    let cumple= true;
    let nom = document.forms["contacto-form"]["nombre"].value;
    if (nom == "" || nom.length < 3) {
      document.getElementById('errors').innerHTML="*por favor ingrese su nombre de al menos 3 letras*";

      cumple=false;
    }

    let ape = document.forms["contacto-form"]["apellido"].value;
    if (ape == "" || ape.length < 3) {
      document.getElementById('errors').innerHTML+="<br>*por favor ingrese su apellido*";

      cumple=false;
    }

    let email = document.forms["contacto-form"]["email"].value;
    if (email == "" || email.length < 3) {
      document.getElementById('errors').innerHTML+="<br>*por favor ingrese su direccion de correo electrónico*";

      cumple=false;
    }

    let tel = document.forms["contacto-form"]["telefono"].value;
    if (tel == "" || tel.length < 3) {
      document.getElementById('errors').innerHTML+="<br>*por favor ingrese su telefono*";

      cumple=false;
    }

    return cumple;
  }