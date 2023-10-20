const button = document.getElementById("run");
button.addEventListener("click", runCode);

function runCode() {
  var html = document.getElementById("html").value;
  var css = document.getElementById("css").value;
  var js = document.getElementById("js").value;
  var output = document.getElementById("output").contentWindow.document;

  output.open();
  output.writeln(html+"<style>"+css+"* {margin:8px; word-wrap:break-word; white-space:pre-wrap;} html {margin:0px;}"+"</style>"+"<script>"+js+"</script>");
  output.close();
}

// Create a variable to store the number of visits
var visits = 0;

// Add a listener to the window's load event
window.addEventListener('click', function() {

  // Increment the number of visits
  visits++;

  // Display the number of visits
  document.querySelector("#visit").innerText = visits;
});

