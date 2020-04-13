var message = "Dear Andrew, happy birthday! ";
var colors = new Array("#ff0000","#00ff00","#0000ff"); // red, green, blue

for (var i = 0; i < message.length; i++){
  document.write("<span style=\"color:" + colors[(i % colors.length)] + ";\">" + message[i] + "</span>");
}