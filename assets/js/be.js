var APP_ID = 'A4AF74D8-D1DC-7FFB-FFF5-AA32A7E1E900';
var API_KEY = '9A7A74D9-856F-295C-FF23-A46633EB2A00';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

var email = "web@hi.bye";
var password="waleed123";

Backendless.UserService.login(email,password,true)
.then (function(loggedUser){
	console.log(loggedUser);
})
.catch (function(error){
	console.log("error message:"+error.message);
	console.log("error code:"+error.statusCode);
})
console.log("i logged");

function newContact()
{
	console.log("i in newContact()")
	var newEmployee = {
		name : userName.value,
		tel : userPhone.value,
		email : userMail.value,
		memo: userMsg.value
	}

	Backendless.Data.of("Contacts").save(newEmployee)
	.then(function(savedObject){
		alert("information of " +newEmployee.name+" was saved");
	})
	.catch(function(Err){
	alert(err.message);
	});

}