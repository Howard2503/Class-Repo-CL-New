window.addEventListener('load', () => {

  console.log("Client side js is loaded!");

  fetch('/messages')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      //Select for element on the page
      let feed = document.getElementById('feed');
      //Loop through data and append to the page
      for (let i = 0; i < data.length; i++) {
        let currentName = data[i].name;
        let currentMessage = data[i].message;

        let currentEl = document.createElement('p');
        currentEl.innerHTML = currentName + " - " + currentMessage;

        feed.appendChild(currentEl);
      }


    })
    .catch(error => {
      console.log(error)
    });


  //Create an event listener to collect and POST data
  let msgButton = document.getElementById('msg-submit');
  msgButton.addEventListener('click', () => {
    console.log("Button was clicked!");

    let nameInput = document.getElementById('name-input');
    let currentName = nameInput.value;

    let msgInput = document.getElementById('msg-input')
    let currentMessage = msgInput.value;

    let messageObj = {
      name: currentName,
      message: currentMessage
    };
    console.log(messageObj);

  });

});
