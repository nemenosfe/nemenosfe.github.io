function getTime(data) {
  var d = new Date(data.substring(0,4),(data.substring(5,7))-1,data.substring(8,10),data.substring(11,13),data.substring(14,16),data.substring(17,19),data.substring(20,23))



  console.log(data);
  console.log(d);
  var seconds = Math.floor((new Date() - d) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {

    var textnode = document.createTextNode(interval + " years");         // Create a text node
    document.body.appendChild(textnode);
      return
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {

    var textnode = document.createTextNode(interval + " months");         // Create a text node
    document.body.appendChild(textnode);
      return
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    var textnode = document.createTextNode(interval + " days");         // Create a text node
    document.body.appendChild(textnode);
      return
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    var textnode = document.createTextNode(interval + " hours");         // Create a text node
    document.body.appendChild(textnode);
      return
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    var textnode = document.createTextNode(interval + " minutes");         // Create a text node
    document.body.appendChild(textnode);
      return
  }

  //document.body.appendChild(form);
  var textnode = document.createTextNode(Math.floor(seconds) + " seconds");         // Create a text node
  document.body.appendChild(textnode);
}
