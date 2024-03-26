class CreateCalendar{
    constructor(){
        this.weekday = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

        this.calendar = document.createElement("section");
        this.calendar.classList.add("calendar");

        this.header = document.createElement("header");
        this.header.classList.add("calendarHeader");

        this.buttons = document.createElement("span");
        this.buttons.classList.add("calendarHeader__buttons");

        this.leftButton = document.createElement("button");
        this.leftButton.classList.add("calendarHeader__buttons--button");
        this.leftButton.setAttribute("id", "js--prev");

        this.leftArrow = document.createElement("i");
        this.leftArrow.classList = "fa-solid fa-angle-left";

        this.headerDate = document.createElement("h2");
        this.headerDate.classList.add("calendarHeader__buttons--date");

        this.rightButton = document.createElement("button");
        this.rightButton.classList.add("calendarHeader__buttons--button");
        this.rightButton.setAttribute("id", "js--next");

        this.rightArrow = document.createElement("i");
        this.rightArrow.classList = "fa-solid fa-angle-right";

        this.week = document.createElement("ul");
        this.week.classList.add("calendarWeek");

        for(let i = 0; i < this.weekday.length; i++){
            this.weekDay = document.createElement("li");
            this.weekDay.classList.add("calendarWeek__weekDay");
            this.weekDay.innerText = this.weekday[i];
            this.week.appendChild(this.weekDay);
        }
        

        this.render();
    }
    render(){
        const main = document.getElementById("js--main");
        main.appendChild(this.calendar);
        this.calendar.appendChild(this.header);
        this.header.appendChild(this.buttons);
        this.buttons.appendChild(this.leftButton);
        this.leftButton.appendChild(this.leftArrow);
        this.buttons.appendChild(this.headerDate);
        this.buttons.appendChild(this.rightButton);
        this.rightButton.appendChild(this.rightArrow);
        this.calendar.appendChild(this.week);
    }
}

class Calendar{
    currentYear;
    currentMonth;
    constructor(){
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.currentMonth = this.date.getMonth();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        this.currentDate = document.createElement("ul");
        this.currentDate.classList.add("calendarDays");
        document.querySelector(".calendar").appendChild(this.currentDate);
        this.prevClick = document.getElementById("js--prev");
        this.nextClick = document.getElementById("js--next");

        this.addDates();
        this.fillCalendar();
        this.clicked();
    }
    addDates = () => {
        
        this.firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 0).getDay();
        this.lastDateOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); //dit is om te weten hoeveel dagen in de maand zitten
        this.lastDayOfMonth = new Date(this.currentYear, this.currentMonth, this.lastDateOfMonth).getDay();
        this.lastDateOfLastMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();


        for(let i = this.firstDayOfMonth; i > 0; i--){
            this.day = document.createElement("li");
            this.day.classList.add("calendarDays__day");
            this.day.classList.add("calendarDays__day--lastMonth");
            this.day.innerText = this.lastDateOfLastMonth - i + 1;
            this.currentDate.appendChild(this.day);
        };

        for(let i = 1; i <= this.lastDateOfMonth; i++){ //for loop is zo anders omdat anders er vanaf 0 wordt begonnen en niet de juiste dagen te zien zijn
            this.today = i === this.date.getDate() && this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear() ? "calendarDays__day--active" : "class";
            this.d = document.createElement("li");
            this.d.classList.add("calendarDays__day");
            this.d.classList.add(this.today);
            this.d.innerText = i;
            this.currentDate.appendChild(this.d);
        };
    }
    fillCalendar = () => {
        this.headerDate = document.querySelector(".calendarHeader__buttons--date");
        this.headerDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
    }
    clicked = () => {
        this.prevClick.onclick = () => {
            this.currentDate.innerHTML = "";
            this.currentMonth = this.prevClick.id === "js--prev" ? this.currentMonth - 1 : this.currentMonth + 1;
            this.headerDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
    
            if(this.currentMonth < 0 || this.currentMonth > 11){
                this.date = new Date(this.currentYear, this.currentMonth);
                this.currentYear = this.date.getFullYear();
                this.currentMonth = this.date.getMonth();
                this.headerDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
            }
            else{
                this.date = new Date();
                console.log(this.d);
            }
            this.addDates();
        }
        this.nextClick.onclick = () => {
            this.currentDate.innerHTML = "";
            this.currentMonth = this.nextClick.id === "js--next" ? this.currentMonth + 1 : this.currentMonth - 1;
            this.headerDate = document.querySelector(".calendarHeader__buttons--date");
            this.headerDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
            
            if(this.currentMonth < 0 || this.currentMonth > 11){
                this.date = new Date(this.currentYear, this.currentMonth);
                this.currentYear = this.date.getFullYear();
                this.currentMonth = this.date.getMonth();
                this.headerDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
            }
            else{
                this.date = new Date();
            }
            this.addDates();
        }
    }
}

class App{
    constructor(){
        this.create = new CreateCalendar();
        this.datum = new Calendar();
    }
}

let p = new App();