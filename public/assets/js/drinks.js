// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-drink").on("click", function(event) {
      var id = $(this).data("id");
      var newEmpty = $(this).data("newempty");
  
      var newEmptyState = {
        imbibed: newEmpty
      };
  
      // Send the PUT request.
      $.ajax("/api/drinks/" + id, {
        type: "PUT",
        data: newEmptyState
      }).then(
        function() {
          console.log("changed partytime to");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newDrink = {
        name: $("#ca").val().trim(),
        imbibed: 0
      };
  
      // Send the POST request.
      $.ajax("/api/drinks", {
        type: "POST",
        data: newDrink
      }).then(
        function() {
          console.log("created new drink");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-drink").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/drinks/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted drink", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  