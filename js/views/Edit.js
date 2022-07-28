

export default function editPage(props) {
 return `
<div class="container-fluid cont34">
    <form id="edit-movie">
        <h3>Edit Movie</h3>
<!--    make each field for the edit form-->
<!--    Make each field inactive until selected with a check-box-->
        <label for="moviename">Name</label>
        <input id="moviename" name="moviename" type="text" placeholder="Movie-name"><br>
<!--   drop-down menu for year selection-->
        <label for="year">Year</label>
        <select id="date-dropdown"></select><br>
<!--    check-box selector for Genre types-->
<<<<<<< HEAD
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
        <label for="Genre5">Mystery</label>
        <input type="checkbox" id="Genre6" name="Genre6" value="Romance">
        <label for="Genre6">Romance</label>
        <input type="checkbox" id="Genre7" name="Genre7" value="Thriller">
        <label for="Genre7">Thriller</label>
        <input type="checkbox" id="Genre8" name="Genre8" value="Western">
        <label for="Genre8">Western</label>
        <input type="checkbox" id="Genre9" name="Genre9" value="Action">
        <label for="Genre9">Action</label>
        <input type="checkbox" id="Genre10" name="Genre10" value="Other">
        <label for="Genre10">Other</label><br>
=======
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
    <input type="checkbox" id="Genre10" name="Genre10" value="Other">
    <label for="Genre10">Other</label><br>
        <h2>Rating:</h2>
<span class="fa fa-star" id="star1"></span>
<span class="fa fa-star" id="star2"></span>
<span class="fa fa-star" id="star3"></span>
<span class="fa fa-star" id="star4"></span>
<span class="fa fa-star" id="star5"></span>
    <br>
>>>>>>> 3a436cee9727a238d3f0213222a225cdbb179566
<!--director field to be filled in-->
        <label for="directorname">Director</label>
        <input id="directorname" name="directorname" type="text" placeholder="Movie-director"><br>        
<!--    Rating selector section-->  
        <h2>Rating:</h2>
        <span class="fa fa-star" id="star1"></span>
        <span class="fa fa-star" id="star2"></span>
        <span class="fa fa-star" id="star3"></span>
        <span class="fa fa-star" id="star4"></span>
        <span class="fa fa-star" id="star5"></span><br>
        <button id="infoSend">Send</button>
    </form>
</div> `;
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
let stars = document.querySelectorAll(".fa-star");
 for (let i = 0; i < stars.length; i++) {
   stars[i].addEventListener("click", () => {
    console.log((i + 1) + " click")
   switch (i) {
    case 0:
     stars[0].classList.add("checked");
     stars[1].classList.remove("checked");
     stars[2].classList.remove("checked");
     stars[3].classList.remove("checked");
     stars[4].classList.remove("checked");
     break;
    case 1:
     stars[0].classList.add("checked");
     stars[1].classList.add("checked");
     stars[2].classList.remove("checked");
     stars[3].classList.remove("checked");
     stars[4].classList.remove("checked");
     break;
    case 2:
     stars[0].classList.add("checked");
     stars[1].classList.add("checked");
     stars[2].classList.add("checked");
     stars[3].classList.remove("checked");
     stars[4].classList.remove("checked");
     break;
    case 3:
     stars[0].classList.add("checked");
     stars[1].classList.add("checked");
     stars[2].classList.add("checked");
     stars[3].classList.add("checked");
     stars[4].classList.remove("checked");
     break;
    case 4:
     stars[0].classList.add("checked");
     stars[1].classList.add("checked");
     stars[2].classList.add("checked");
     stars[3].classList.add("checked");
     stars[4].classList.add("checked");
     break;
   }})}
 console.log(stars);
}
