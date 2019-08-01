
$(document).ready(function () {
	var movies = ["Hercules", "The Lion King", "The Dark Knight", "Jaws", "Star Wars", "The Great Gatsby", "Minions"];

	// add buttons for movies i picked
	function renderButtons() {
		$("#movie-buttons").empty();
		for (i = 0; i < movies.length; i++) {
			$("#movie-buttons").append("<button class='btn btn-success' data-movie='" + movies[i] + "'>" + movies[i] + "</button>");
		}
    }
    
    renderButtons();

	// adding a button for movie entered in bar
	$("#add-movie").on("click", function () {
		event.preventDefault();
		var movie = $("#movie-input").val().trim();
		movies.push(movie);
		renderButtons();
		return;
    });
} )
