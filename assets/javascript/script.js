$(document).ready(function() {
    var gifCats = ["elephant", "kangaroo", "peacock", "eel", "eagle"];
    var bCount = 0;
    
    function pubButtons() {
        $("#bPlace").empty();
        bCount = 0;
        for (var i = 0; i < gifCats.length; i++) {
            var bId = $("<button>" + gifCats[i] + "</button>").addClass("bButton").attr("data-bcount", bCount).attr("id", "item-" + bCount).val(gifCats[i]);
            $("#bPlace").append(bId);
            bCount++;
            console.log(bId.val());
            console.log(bCount);
        }
    }

    $("#b-add").on("click", function(event) {
        event.preventDefault();
        gifCats.push($("#bInput").val());
        $("#bInput").val("");
        pubButtons();
    });
    
    pubButtons();

    $(document.body).on("click", ".bButton", function() {
        var clearBox = $(this).attr("data-bcount");
        console.log(clearBox);
        
        var search = $("#item-" + clearBox).val();
        console.log(search);
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HuGV3gRl0oqKFxJaysFFsXHirUlgKdNe&q=&limit=10&offset=0&rating=G&lang=en";
    
        $.ajax({
            url: queryURL,
            method: "GET",
            data: {
                q: search, 
            }
        }).then(function(response) {
          var getData = response.data;
          $("#gifPlace").empty();
          console.log(getData);
          for (var i = 0; i < getData.length; i++) {
              var gifDiv = $("<div>");

              var ratings = getData[i].rating;
              var p = $("<p>").text("Ratings: " + ratings);

              var $img = $("<img>");
              $img.attr("src", getData[i].images.fixed_height.url);

              gifDiv.prepend(p);
              gifDiv.prepend($img);

              $("#gifPlace").prepend(gifDiv);

          }
        });

    });
});