// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
 console.log("Hello World! document loaded");

// $(function() {
    $(document).on("click", "#change-devoured", function(event) {
      console.log("Clicked new devoured");
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
      console.log(newDevoured);
      
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("Burger with id = ${id} has been devoured!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#create-form").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#myburger").val().trim(),
        devoured: 0
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(document).on("click", "#delete-burger", function(event) {
      //console.log("Clicked delete burger");
      var id = $(this).data("id");
        console.log(id);
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }); //End delete on click function
  // }); 
});// Document ready function