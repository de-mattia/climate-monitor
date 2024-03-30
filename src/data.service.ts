class DataService{

    getMonthData() {
        return [
            { month: 'Jan', 2005: 0.69, 2023:2.64},
            { month: 'Feb', 2005: -1.9, 2023:3.01},
            { month: 'Mar', 2005: 3.48, 2023:6.1},
            { month: 'Apr', 2005: 8.95, 2023:7.39},
            { month: 'May', 2005: 12.57, 2023:13.09},
            { month: 'Jun', 2005: 16.95, 2023:18.73},
            { month: 'Jul', 2005: 17.35, 2023:18.97 },
            { month: 'Aug', 2005: 15.14, 2023:18.57},
            { month: 'Sep', 2005: 14.68, 2023: 17.31},
            { month: 'Oct', 2005: 10.81, 2023:12.1},
            { month: 'Nov', 2005: 3.37, 2023:5.27},
            { month: 'Dec', 2005: -0.25, 2023:3.95}
        ];
    }

}

export { DataService };
