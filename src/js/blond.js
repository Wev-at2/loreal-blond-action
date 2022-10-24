const Methods = {
	init() {
		Methods.sendForm();
	},

	sendForm() {
		$('#cnpj').mask('00.000.000/0000-00');
		const submitButton = document.querySelector('.t-loreal__right-form--all');
		if(submitButton) {
			submitButton.addEventListener('submit', (ev) => {
				const $this = ev.currentTarget;
				document.getElementById('form_submit').value = 'Enviando...';
				ev.preventDefault();
				const userName = document.getElementById('name').value;
				const userLastName = document.getElementById('lastName').value;
				const userEmail = document.getElementById('email').value;
				const userSalon = document.getElementById('salon').value;
				const userCNPJ = document.getElementById('cnpj').value;
				const userAddress = document.getElementById('address').value;
				const optionNews = document.getElementById('newsletter').checked;
				const optionSMS = document.getElementById('sms').checked;
				

				const _params = `?fields[EmailAddress]=${userEmail}&?fields[Email]=${userEmail}&fields[Nome]=${userName}&fields[Sobrenome]=${userLastName}&fields[NomeDoSalao]=${userSalon}&fields[CNPJ]=${userCNPJ}&fields[EnderecoDoSalao]=${userAddress}&fields[Optin_Email]=${optionNews}&fields[ OptIn_Termos]=${optionSMS}&unique=Email`;
				const url = `//landfy.smartcampaign.com.br/landfy/api/08e7d408-4304-11ec-b51a-0e128ad531c1${_params}`;

				fetch(url).then(res => {
					res.json();
				}).then(resp => {
					document.getElementById('form_submit').value = 'Enviado';
				});     
			});
		}
	}
};

window.addEventListener("DOMContentLoaded", Methods.init);
