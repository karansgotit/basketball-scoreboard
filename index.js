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

function reset_home_score(){
    count_home = 0
    home_score.textContent = count_home
}

function away_one_point(){
    count_away += 1
    away_score.textContent = count_away
}

function away_two_point(){
    count_away += 2
    away_score.textContent = count_away
}

function away_three_point(){
    count_away += 3
    away_score.textContent = count_away
}

function reset_away_score(){
    count_away = 0
    away_score.textContent = count_away
}


