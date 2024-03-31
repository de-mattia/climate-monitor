import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import { DataService } from "./data.service"


const Chart = () =>  {


    useEffect(() => {

      const dataService = new DataService();

      const data = dataService.getMonthData(1965, 2022);

      setChartOptions({
        data: data,
        series: [{ type: 'line', xKey: 'month', yKey: 'year1', yName: '1965' },
                 { type: 'line', xKey: 'month', yKey: 'year2', yName: '2022' }],
      })
    } 
    ,[]);

    const [chartOptions, setChartOptions] = useState({

      });
    
      return (
        // AgCharsReact component with options passed as prop
        <AgChartsReact options={chartOptions} />
      );
}

export default Chart;