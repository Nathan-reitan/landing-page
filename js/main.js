function buildContact(){
  var nine = "9";
  var four = "4";
  var seven = "7";
  var zero = "0";
  var one = "1";
  var six = "6";
  var contactCard = document.getElementById('contactCard')
  var phone = document.createElement('div');
  var phoneLink = document.createElement('a');
  phoneLink.setAttribute("href", "949" + "701" + "96" + "46")
  phoneLink.textContent = `Phone: (${nine}${four}${nine}) ${seven}${zero}${one}-${nine}${six}${four}${six}`
  var email = document.createElement('div');
  var emailLink = document.createElement('a');
  emailLink.setAttribute("href", "nathan"+"reitan"+"@"+"gmail.com")
  emailLink.textContent = "Email:" + " nathan" + "reitan" + "@" + "gmail" + "." + "com";
  phone.appendChild(phoneLink)
  contactCard.appendChild(phone);
  email.appendChild(emailLink);
  contactCard.appendChild(email)
}

buildContact();
