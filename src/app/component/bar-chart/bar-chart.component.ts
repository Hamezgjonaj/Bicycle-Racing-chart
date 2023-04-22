
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  myChart = new Chart("", {
    type: 'bubble',
    data: {
      labels: ['1994-01-01', '1996-01-01', '1998-01-01', '2000-01-01', '2002-01-01', '2004-01-01', '2006-01-01', '2008-01-01', '2010-01-01', '2012-01-01', '2014-01-01', '2016-01-01'],
      datasets: [{
        label: 'My Dataset',
        data: [2, 5, 3, 4, 1, 5, 2, 6, 4, 5, 3, 4], // Replace with your own data
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'currentColor',
        borderWidth: 2
      }]
    },
  })
  ngOnInit() {
    this.myChart = new Chart("MyChart", {
      type: 'bubble',
      data: {
        labels: ['1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016'],
        datasets: [{
          label: 'My Dataset',
          data: [2, 5, 3, 4, 1, 5, 2, 6, 4, 5, 3, 4], // Replace with your own data
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'currentColor',
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          x: {
            ticks: {
              font: {
                size: 10,
                family: 'sans-serif'
              },
              align: 'center',
              padding: 10
            },
            title: {
              display: true,
              text: 'Year',
              align: 'end'
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              font: {
                size: 10,
                family: 'sans-serif'
              },
              padding: 10
            },
            title: {
              display: true,
              text: 'Time',
              align: 'end',
            },
            grid: {
              display: true,
              color: '#ccc'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
