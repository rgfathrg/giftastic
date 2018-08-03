$(document).ready(function() {
    var gifCats = ["elephant", "kangaroo", "peacock", "eel", "eagle"];
    var bCount = 0;
    // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HuGV3gRl0oqKFxJaysFFsXHirUlgKdNe&q=&limit=25&offset=0&rating=G&lang=en";
    
    // $.ajax({
    //     url: queryURL,
    //     method: "GET",
    // }).then(function(response) {
      
    // });

    function pubButtons() {
        $("#bPlace").empty();
        bCount = 0;
        for (var i = 0; i < gifCats.length; i++) {
            var bId = $("<button>" + gifCats[i] + "</button>").addClass("bButton").attr("data-bcount", + bCount).attr("id", "item-" + bCount);
            $("#bPlace").append(bId);
            bCount++;
            console.log(bId);
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
        $("#item-" + clearBox).remove();
    });
});