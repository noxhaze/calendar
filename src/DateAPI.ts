export function getCurrentDateFull(): String {
    return new Date().toDateString();
}

export class Event {
    public name: String = "";
    public description: String = "";
    public time: String = "";

    constructor(name: String = "", description: String = "", time: String = "") {
        this.name = name;
        this.description = description;
        this.time = time;
    }
}

export class Day {
    public number: Number = 0;
    public monthName: String = "";
    public events: Event[] = [];

    constructor(number: Number, monthName: String) {
        this.number = number;
        this.monthName = monthName;
    }
}

export class Month {
    public name: String = "";
    public daysAmount: number = 0;
    public days: Day[] = [];

    constructor(cName: String, cDays: number) {
        this.name = cName;
        this.daysAmount = cDays;
    }

    static getMonthFromIndex(index: Number): Month {
        let month = new Month("", 0);
        switch (index) {
            case 0:
                month = new Month("January", 31);
                break;

            case 1:
                month = new Month("February", 28);
                break;

            case 2:
                month = new Month("March", 31);
                break;

            case 3:
                month = new Month("April", 30);
                break;

            case 4:
                month = new Month("May", 31);
                break;

            case 5:
                month = new Month("June", 30);
                break;

            case 6:
                month = new Month("July", 31);
                break;

            case 7:
                month = new Month("August", 31);
                break;

            case 8:
                month = new Month("September", 30);
                break;

            case 9:
                month = new Month("October", 31);
                break;

            case 10:
                month = new Month("November", 30);
                break;

            case 11:
                month = new Month("December", 31);
                break;

            default:
                console.error("Invalid index for retrieving month");
                break;
        }
        
        for (let i = 0; i < month.daysAmount; i++) {
            month.days.push(new Day(i+1, month.name));
        }

        return month;
    }
}

export class Year {
    months: Month[] = [];
    yearNumber: number = 0;
    isLeapYear: boolean = false;

    checkLeapYear() {
        this.isLeapYear = (this.yearNumber % 4 == 0) ? true : false;
    }

    setFebruaryMonth() {
        this.months[1].daysAmount = (this.isLeapYear) ? 29 : 28;

    }

    getPreviousMonth(index: number): Month {
        if (index != 0) {
            return this.months[index-1];
        } else {
            return new Year(this.yearNumber-1).months[11];
        } 
    }

    getNextMonth(index: number): Month {
        if (index != 11) {
            return this.months[index+1];
        } else {
            return new Year(this.yearNumber+1).months[0];
        } 
    }

    constructor(yearNumber: number) {
        this.yearNumber = yearNumber;

        for (let i = 0; i < 12; i++) {
            this.months.push(Month.getMonthFromIndex(i));
        }

        this.checkLeapYear();
        this.setFebruaryMonth();
    } 
}


