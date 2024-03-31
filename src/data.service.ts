import myData from "./assets/climate.data.echterdingen.json"

class DataService{

    getMonthDataOfYear(year: number) {
        return myData.filter(el => el.MESS_DATUM_BEGINN.toString().startsWith(year.toString())).map(el => el.MO_TT);
    }

    getMonthData(year1: number, year2: number) {

        const year1Data = this.getMonthDataOfYear(year1);
        const year2Data = this.getMonthDataOfYear(year2);

        return [
            { month: 'Jan', year1: year1Data[0], year2: year2Data[0]},
            { month: 'Feb', year1: year1Data[1], year2: year2Data[1]},
            { month: 'Mar', year1: year1Data[2], year2: year2Data[2]},
            { month: 'Apr', year1: year1Data[3], year2: year2Data[3]},
            { month: 'May', year1: year1Data[4], year2: year2Data[4]},
            { month: 'Jun', year1: year1Data[5], year2: year2Data[5]},
            { month: 'Jul', year1: year1Data[6], year2: year2Data[6] },
            { month: 'Aug', year1: year1Data[7], year2: year2Data[7]},
            { month: 'Sep', year1: year1Data[8], year2: year2Data[8]},
            { month: 'Oct', year1: year1Data[9], year2: year2Data[9]},
            { month: 'Nov', year1: year1Data[10], year2: year2Data[10]},
            { month: 'Dec', year1: year1Data[11], year2: year2Data[11]}
        ];
    }

}

export { DataService };
