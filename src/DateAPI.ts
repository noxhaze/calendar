export function getCurrentDateFull(): String {
    return new Date().toDateString();
}

export class Month {
    name: String = "";
    days: Number = 0;

    constructor(cName: String, cDays: Number) {
        this.name = cName;
        this.days = cDays;
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
        return month;
    }
}


