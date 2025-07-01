let home_score = document.getElementById("score-home")
let away_score = document.getElementById("score-guest")
let count_home = 0
let count_away = 0

function home_one_point(){
    count_home += 1
    home_score.textContent = count_home
}

function home_two_point(){
    count_home += 2
    home_score.textContent = count_home
}

function home_three_point(){
    count_home += 3
    home_score.textContent = count_home
}