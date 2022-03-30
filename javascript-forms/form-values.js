var contactform = document.querySelector('form');
contactform.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {};
  messageData.email = contactform.elements.email.value;
  messageData.name = contactform.elements.name.value;
  messageData.message = contactform.elements.message.value;
  console.log(messageData);
  contactform.reset();
}
);
