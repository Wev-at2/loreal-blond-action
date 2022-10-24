const Methods = {
	init() {
		Methods.sendForm();
	},

	sendForm() {
		const submitButton = document.querySelector('.t-kerastase__right-form--all');
		if(submitButton) {
			submitButton.addEventListener('submit', (ev) => {
				const $this = ev.currentTarget;
				document.getElementById('form_submit').value = 'Enviando...';
				ev.preventDefault();
				const userName = document.getElementById('name').value;
				const userArtisticName = document.getElementById('artistic-name').value;
				const userEmail = document.getElementById('email').value;
				const userInsta = document.getElementById('insta').value;
				const userSalon = document.getElementById('salon').value;
				const userCity = document.getElementById('city').value;
				const userState = document.getElementById('state').value;
				const userExpertK = document.querySelector('input[name="expertK"]:checked').value;
				const optionNews = document.getElementById('news').checked;
				const optionTerms = document.getElementById('terms').checked;
				

				const _params = `?fields[Email]=${userEmail}&fields[NomeCompleto]=${userName}&fields[NomeArtistico]=${userArtisticName}&fields[Instagram]=${userInsta}&fields[Salao]=${userSalon}&fields[Cidade]=${userCity}&fields[Estado]=${userState}&fields[ExpertK]=${userExpertK}&fields[OptIn_Marcas]=${optionNews}&fields[Optin_Termos]=${optionTerms}&unique=Email`

				const url = `//landfy.smartcampaign.com.br/landfy/api/1fd1a19d-3e64-11ec-b51a-0e128ad531c1${_params}`;

				fetch(url).then(res => {
					res.json();
				}).then(resp => {
					document.getElementById('form_submit').value = 'Enviado';
					document.querySelector('.t-kerastase__right-form--all').reset();
				});     
			});
		}
	}
};

window.addEventListener("DOMContentLoaded", Methods.init);
