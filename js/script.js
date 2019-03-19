/* для маски формы */
var inputmask = $('.phonemask');
    
    Inputmask.extendDefinitions({
      'f': {"validator": "[9\(\)\.\+/ ]"}
    });
    
 if (inputmask.length) {
  inputmask.inputmask({
   mask: "+7(f99)999-99-99"
  }); 
 }
/* достаем всплывающий контент */
function deployContent() {
	var popUpZvonok = document.getElementById('popUpZvonok');
	console.log("popUpZvonok.length");
	popUpZvonok.style.display = 'block';	
}
/* закрываем popup */
function closeFunction() {
	var closePopup = document.getElementById('signBtnLow');
	console.log(closePopup.length);
	popUpZvonok.style.display = 'none';

	var formBlock = document.getElementById('wf-form-Phone-Form');
	formBlock.style.display = 'block';	

	var validPhoneFail = document.getElementById('validPhoneFail');
	validPhoneFail.classList.remove('show');

	var validPhoneDone = document.getElementById('validPhoneDone');
	validPhoneDone.classList.remove('show'); 
}
/* валидация */
function validForm() {
	/*
	patternPhone = /^[9\(\)\.\+/]+$/;

	var formLowPhone = document.getElementById('Phone')[0];
	console.log(formLowPhone)

	var validPhoneFail = document.getElementById('validPhoneFail');
	validPhoneFail.style.display = 'none';

	var validPhoneDone = document.getElementById('validPhoneDone');
	validPhoneDone.style.display = 'none';

	
	if (formLowPhone == "") {	
		validPhoneFail.style.display = 'block';	
	} else {
		validPhoneDone.style.display = 'block';				
	}
	*/

	var formLowPhone = document.getElementById('Phone');
	console.log(formLowPhone.value);
	var validPhoneFail = document.getElementById('validPhoneFail');
	validPhoneFail.classList.remove('show');
	console.log(formLowPhone);
	console.log(formLowPhone.value);
	console.log(formLowPhone.value.length);
	console.log(formLowPhone.innerHTML);

	var validPhoneDone = document.getElementById('validPhoneDone');
	validPhoneDone.classList.remove('show');

	if (formLowPhone.value >= 1) {
		validPhoneDone.classList.toggle('show');
		var formBlock = document.getElementById('wf-form-Phone-Form');
		formBlock.style.display = 'none'; 	
	} else {
		validPhoneFail.classList.toggle('show');						
	}
}
function formSubmit() {
    var validPhoneDone = document.getElementById('validPhoneDone');
	validPhoneDone.classList.add('show');
	var formBlock = document.getElementById('wf-form-Phone-Form');
	formBlock.style.display = 'none';
}
/* форма с pdf */
/* достаем всплывающий контент */
function deployContentForPdf() {
	var popUpPdfPlan = document.getElementById('popUpPdfPlan');
	popUpPdfPlan.style.display = 'block';	
}
/* закрываем popup */
function closeFunctionForPdf() {
	var closePopUpForPdf = document.getElementById('closePopUpForPdf');
	popUpPdfPlan.style.display = 'none';

	var formBlock = document.getElementById('wf-form-Phone-Form');
	formBlock.style.display = 'block';	

	var validPhoneFailForPdf = document.getElementById('validPhoneFailForPdf');
	validPhoneFailForPdf.classList.remove('show');

	var validPhoneDoneForPdf = document.getElementById('validPhoneDoneForPdf');
	validPhoneDoneForPdf.classList.remove('show'); 
}
/* валидация */
/*
function validFormForPdf() {

	var formUpperPhone = document.getElementById('Phone-2');
	console.log(formUpperPhone.value);
	var validPhoneFailForPdf = document.getElementById('validPhoneFailForPdf');
	validPhoneFailForPdf.classList.remove('show');

	var validPhoneDoneForPdf = document.getElementById('validPhoneDoneForPdf');
	validPhoneDoneForPdf.classList.remove('show');

	if (formUpperPhone.value >= 1) {
		var validPhoneDoneForPdf = document.getElementById('validPhoneDoneForPdf');
		validPhoneDoneForPdf.classList.toggle('show');
		var formBlock = document.getElementById('wf-form-Phone-Form');
		console.log(formBlock.length);
		for (var i = 0; i < formBlock.length; i++) {
			formBlock[i].style.display = 'none'; 
		}
	
	} else {
		validPhoneFailForPdf.classList.toggle('show');						
	}
}
/* достаем сбоку "эксклюзивное предложение" 
window.onscroll = function() {	
	var specBlockExclusiveOffer = document.getElementById('specBlockExclusiveOffer');
	var coords = specBlockExclusiveOffer.getBoundingClientRect();

	console.log("эксклюзивное предложение: " + coords.top)
	if (coords.top < 0) {
		var sideBlock = document.getElementsByClassName('div-block-19');
		console.log(sideBlock.length);
		sideBlock[0].style = "";
		sideBlock[0].classList.add('show');
	}
} */
/* достаем снизу "шкалу времени" 
window.onscroll = function() {	
	var specBlockTimeScale = document.getElementById('specBlockTimeScale');
	var coordsTimeScale = specBlockTimeScale.getBoundingClientRect();

	var specBlockExclusiveOffer = document.getElementById('specBlockExclusiveOffer');
	var coords = specBlockExclusiveOffer.getBoundingClientRect();

	console.log("шкалу времени: " + coordsTimeScale.top)
	if (coordsTimeScale.top < 0) {
		var buttomBlock = document.getElementById('buttomBlockImg');
		console.log(buttomBlock.length);
		buttomBlock.style = "";
		buttomBlock.classList.add('show');
	}

	if (coordsTimeScale.top < -1400) {
		var sideBlock = document.getElementsByClassName('div-block-19');
		console.log(sideBlock.length);
		sideBlock[0].style = "";
		sideBlock[0].classList.add('show');
	}
}*/
/* достаем снизу "" */
$(document).on('is_sucsessful', function(event, response) {
    var form = response.form;
    
    $('.form-2').css('display', 'none');
    console.log($('.form-2').length);
    $('.success-message.w-form-done').css('display', 'block');
    $('.error-message.w-form-fail').css('display', 'none');

});
$(document).on('is_error', function(event, response) {
    $('.form-2').css('display', 'none');
    $('.error-message .w-form-fail').css('display', 'block');
    $('.success-message .w-form-done').css('display', 'none');
});