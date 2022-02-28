$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    const item1 = $("#item1").val()
    const list = new Todo(item1)
    const response = list.addItem();
    $("#response").append("<p>"+ response + "</p>")
    });
});