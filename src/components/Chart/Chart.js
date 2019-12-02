import React from 'react';
import { Chart } from '@bit/primefaces.primereact.chart';

const chart = (props) =>{
    const data = {
        labels: ['Yes', 'No'],
        datasets: [
          {
            data: [ props.noOfYes, props.noOfNo],
            backgroundColor: ['#00C851', '#e53935'],
            hoverBackgroundColor: ['#b71c1c', '#1b5e20']
          }
        ]
      };
    return (
        <div style={{width: 350}}>
            <h5>{props.questionTitle}</h5>
            <Chart  type='doughnut' data={data} />   
        </div>
    )
} 

 
export default chart;