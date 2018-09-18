var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var request = new XMLHttpRequest();

  request.open("GET", "animal.json", true);  
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(request.responseText);
      var animal = response.animal;
      var output = ''

      output += '<ul>'
      for (let i = 0; i < animal.length; i++) {
        output += '<li>' + animal[i].name + '</li>'
      }
      output += '</ul>'

      document.getElementById('animal').innerHTML = output;
    }
  };
  request.send();
})