

export default function editPage(props) {
 return `
 <form id="edit-movie">
    <h3>Edit Movie</h3>
<!--    make each field for the edit form-->
<!--    Make each field inactive until selected with a check-box-->
    <label for="moviename">Name</label>
    <input id="moviename" name="moviename" type="text" placeholder="Movie-name"><br>
<!--   drop-down menu for year selection-->
    <label for="year">Year</label>
    <select id="date-dropdown">
    </select><br>
<!--    check-box selector for Genre types-->
    <label for="genre-selector">Genre:</label>
    <input type="checkbox" id="Genre1" name="Genre1" value="Comedy">
    <label for="Genre1">Comedy</label>
    <input type="checkbox" id="Genre2" name="Genre2" value="Drama">
    <label for="Genre2">Drama</label>
    <input type="checkbox" id="Genre3" name="Genre3" value="Fantasy">
    <label for="Genre3">Fantasy</label>
    <input type="checkbox" id="Genre4" name="Genre4" value="Horror">
    <label for="Genre4">Horror</label>
    <input type="checkbox" id="Genre5" name="Genre5" value="Mystery">
    <label for="Genre5">Mystery</label><br>
    <input type="checkbox" id="Genre6" name="Genre6" value="Romance">
    <label for="Genre6">Romance</label>
    <input type="checkbox" id="Genre7" name="Genre7" value="Thriller">
    <label for="Genre7">Thriller</label>
    <input type="checkbox" id="Genre8" name="Genre8" value="Western">
    <label for="Genre8">Western</label>
    <input type="checkbox" id="Genre9" name="Genre9" value="Action">
    <label for="Genre9">Action</label>
    <input type="checkbox" id="Genre10" name="Genre10" value="">
    <label for="genrename">Other</label>
    <input id="genrename" name="genrename" type="text" placeholder="Genre"><br>
<!--    Rating selector section-->
     <label>Rate</label>
    <input button selector to choose how many stars. up to ><br>
<!--director field to be filled in-->
    <label for="directorname">Director</label>
    <input id="directorname" name="directorname" type="text" placeholder="Movie-director"><br>
    <input type="reset" value="Reset" onclick="reset()"> <button>Send</button>
</form> `;

}


export function editPageEvents() {
 let dateDropdown = document.getElementById('date-dropdown');

 let currentYear = new Date().getFullYear();
 let earliestYear = 1942;
 while (currentYear >= earliestYear) {
  let dateOption = document.createElement('option');
  dateOption.text = currentYear;
  dateOption.value = currentYear;
  dateDropdown.add(dateOption);
  currentYear -= 1;
 }


}
