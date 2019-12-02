import React from 'react';
import { Chart } from '@bit/primefaces.primereact.chart';

const chart = (props) =>{
    const data = {
        labels: ['Yes', 'No'],
        datasets: [
          {
            data: [50, 100],
            backgroundColor: ['#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#36A2EB', '#FFCE56']
          }
        ]
      };
    return (
        <div style={{ width: 400 }}>
            <Chart type='doughnut' data={data} />
            <p>{props.questionTitle}</p>
        </div>
    )
} 

 
export default chart;