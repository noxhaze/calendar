export function getCurrentDateFull(): String {
    return new Date().toDateString();
}

export class Event {
    public name: String = "";
    public description: String = "";
    public time: String = "";

    constructor(name: String = "", description: String = "") {
        this.name = name;
        this.description = description;
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


