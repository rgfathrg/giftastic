$(document).ready(function() {
   
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HuGV3gRl0oqKFxJaysFFsXHirUlgKdNe&q=&limit=25&offset=0&rating=G&lang=en";
    
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
      
    });
});