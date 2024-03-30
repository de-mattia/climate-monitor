import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import { DataService } from "./data.service"


const Chart = () =>  {


    useEffect(() => {

      const dataService = new DataService();

      const data = dataService.getMonthData();

      setChartOptions({
        data: data,
        series: [{ type: 'line', xKey: 'month', yKey: '2005', yName: '2005' },
                 { type: 'line', xKey: 'month', yKey: '2023', yName: '2023' }],
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