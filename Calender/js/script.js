class Calendar{
    currentYear;
    currentMonth;
    constructor(){
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.currentMonth = this.date.getMonth();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.makeCalendar();
        this.fillCalendar();
        this.clicked();
    }
    makeCalendar = () => {
        this.currentDate = document.getElementById("list");
        this.prevClick = document.getElementById("js--prev");
        this.nextClick = document.getElementById("js--next");
        this.day = document.getElementById("day");

        this.firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 0).getDay();
        this.lastDateOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); //dit is om te weten hoeveel dagen in de maand zitten
        this.lastDayOfMonth = new Date(this.currentYear, this.currentMonth, this.lastDateOfMonth).getDay();
        this.lastDateOfLastMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();

        for(let i = this.firstDayOfMonth; i > 0; i--){
            this.dag = document.createElement("li");
            this.dag.classList.add("calendarDays__day");
            this.dag.classList.add("calendarDays__day--lastMonth");
            this.dag.innerText = this.lastDateOfLastMonth - i + 1;
            this.currentDate.appendChild(this.dag);
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
        this.thisDate = document.querySelector(".calendarHeader__buttons--date");
        this.thisDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
        
        this.prevClick.onclick = () => {
            this.currentDate.innerHTML = "";
            this.currentMonth = this.prevClick.id === "js--prev" ? this.currentMonth - 1 : this.currentMonth + 1;
            this.thisDate = document.querySelector(".calendarHeader__buttons--date");
            this.thisDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
    
            if(this.currentMonth < 0 || this.currentMonth > 11){
                this.date = new Date(this.currentYear, this.currentMonth);
                this.currentYear = this.date.getFullYear();
                this.currentMonth = this.date.getMonth();
                this.thisDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
            }
            else{
                this.date = new Date();
            }
            this.makeCalendar();
        }
    }
    clicked = () => {
        this.nextClick.onclick = () => {
            this.currentDate.innerHTML = "";
            this.currentMonth = this.nextClick.id === "js--next" ? this.currentMonth + 1 : this.currentMonth - 1;
            this.thisDate = document.querySelector(".calendarHeader__buttons--date");
            this.thisDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
            
            if(this.currentMonth < 0 || this.currentMonth > 11){
                this.date = new Date(this.currentYear, this.currentMonth);
                this.currentYear = this.date.getFullYear();
                this.currentMonth = this.date.getMonth();
                this.thisDate.innerText = this.months[this.currentMonth] + " " + this.currentYear;
            }
            else{
                this.date = new Date();
            }   
            this.makeCalendar();
        }
    }
}

let date = new Calendar();