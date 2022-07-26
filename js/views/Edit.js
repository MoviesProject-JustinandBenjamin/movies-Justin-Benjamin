

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
<!--    button selector or Genre types-->
    <label for="genre-selector">Genre</label>
    <input button selector to choose options for Genre types><br>
<!--    Rating selector section-->
     <label>Rate</label>
    <input button selector to choose how many stars. up to ><br>
<!--director field to be filled in-->
    <label for="directorname">Director</label>
    <input id="directorname" name="directorname" type="text" placeholder="Movie-director"><br>
    <button>Reset</button> <button>Send</button>
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
