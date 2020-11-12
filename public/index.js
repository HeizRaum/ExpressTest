function buttonClick(inputElement) {
  const xmlhttp = new XMLHttpRequest();
  const string = document.getElementById(inputElement).value;
  xmlhttp.open('POST', '/city?test');
  xmlhttp.setRequestHeader('Content-type', 'application/json');
  xmlhttp.send(JSON.stringify({name: "Json", string: string}));
}