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
