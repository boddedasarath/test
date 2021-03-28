// JavaScript Document


function fillForm(response) {
	console.log("fillform" + response.profile.firstName);
	$('input[name="firstname"]').val(response.profile.firstName);
	$('input[name="lastname"]').val(response.profile.lastName);
    $('input[name="job_title"]').val(response.profile.title)
    $('input[name="email"]').val(response.profile.email);
    $('input[name="std3"]').val(response.data.BUID);
    $('input[name="std4"]').val(response.UID);
    $('input[name="job_function"]').val(response.data.SPECIALITY);
    $('input[name="country"]').val(response.data.ADDRESS.CITY);
}


function getDomain(url) {
	console.log("into function");
	var currenturl = window.location.hostname;
	
	
	
	console.log("URL : " + url);
	
	
	
	console.log("Current URL : " + currenturl);
	
	
	
	var finalURL;
	
	
	console.log("Final URL : " + finalURL);
	
	
	
	if(currenturl == "gskpro-com-preview-cf5.gdsgsk.com") {
		console.log("in if preview");
		finalURL = url + "?apikey=3_wj-v-9jrwee0iot1uIrjD1q0OmaRYMGzu7kjhG6FoiZ2k2QUeexTcKnHPAlhHwzV";
//	} else if(currenturl == "https://gskpro.com/es-mx/") {
	} else if(currenturl == "gskpro.com") {
		console.log("in if live");
		finalURL = url + "?apikey=3_UTLAWneQA65DG_fjmPRsa00BNUjc-hADwdqdZytC9sztDm-7z2Gs3TACap4I1nDm";
	}
	
	return finalURL;
}



//function validateForm(boo) {
//    $('input[name="email"]').val($('input[name="std1-temp"]').val());
//	$('input[name="std1"]').val($('input[name="email-temp"]').val());
//}