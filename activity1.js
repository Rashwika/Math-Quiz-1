score = 0;
display = document.getElementById("score_display");
function update(){
    score+=1;
    display.innerHTML = "score: " + score;
}
function save(){
    localStorage.setItem("score_key",score );
}
function next_page(){
    window.location = "activity_2.html" ; 
}