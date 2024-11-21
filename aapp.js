let ageinput = document.querySelector("#ageinput")
let calcbtn = document.querySelector("#calcbtn")
let result = document.querySelector("#result")
let display = document.querySelector("#display")
let rstbtn = document.querySelector("#rstbtn")
let refresh = document.querySelector(".refresh")

let mytimer;
let age;

calcbtn.addEventListener('click', function(){
    age = ageinput.value.trim();

    if(age == ""){

        clearInterval(mytimer)

        let alert = document.querySelector(".alert");
        alert.classList.add('active')

        mytimer = setInterval(function(){
            alert.classList.remove('active')
        }, 3000)
    }else if  (isNaN(age) == true ) {

        clearInterval(mytimer);

        let alert2 = document.querySelector(".alert2");
        alert2.classList.add('active');

        mytimer = setInterval(function(){
            alert2.classList.remove('active')
        }, 3000)
    }else{
        let answer = document.querySelector(".answer");
        answer.classList.add('active')

        let remaining_years = 90 - age;
        let remaining_weeks = remaining_years * 52;

        result.innerHTML =sepratenumbersincomma (remaining_weeks);
        ageinput.value = "";


    }
});

function sepratenumbersincomma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

rstbtn.addEventListener('click', function(){
    refresh.click();
})


