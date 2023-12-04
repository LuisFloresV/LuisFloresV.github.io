const fullName = document.getElementById('name');
const email = document.getElementById('email');
const amount = document.getElementById('amount');
const years = document.getElementById('years');
const phone = document.getElementById('phone');

function sendEmail() {

  const bodyMessage = `Nombre completo: ${fullName.value} <br> Email: ${email.value}
  <br> Cantidad de inversion: ${amount.value}
  <br> Años de inversion: ${years.value}
  <br> Telefono: ${phone.value}`

  Email.send({
    SecureToken: '',
    To: 'luisdanielfloresvelazquez51@gmail.com',
    From: 'luisdanielfloresvelazquez51@gmail.com',
    Subject: 'Nueva cotizacion',
    Body: bodyMessage
  }).then(
    message => {
      if (message === "OK") {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-success alert-dismissible" role="alert">`,
          `   <div>Cotizacion enviada exitosamente! :)</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
      }
    }
  );
}