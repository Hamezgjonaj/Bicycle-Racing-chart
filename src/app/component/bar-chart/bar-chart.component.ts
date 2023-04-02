import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  public chart: any;

  createChart() {

    const racingData = {
      Time: ['36:50', '36:55', '37:15', '37:36', '37:42', '38:05', '38:14', '38:14', '38:16'],
      Place: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      Seconds: [2210, 2215, 2235, 2256, 2262, 2285, 2294, 2294, 2296],
      Name: ['Marco Pantani', 'Marco Pantani', 'Marco Pantani', 'Lance Armstrong', 'Jan Ullrich', 'Lance Armstrong', 'Miguel Indurain', 'Alex Zülle', 'Bjarne Riis'],
      Year: [1995, 1997, 1994, 2004, 1997, 2001, 1995, 1995, 1995],
      Nationality: ['ITA', 'ITA', 'ITA', 'USA', 'GER', 'USA', 'ESP', 'SUI', 'DEN'],
      Doping: ['Alleged drug use during 1995 due to high hematocrit levels', 'Alleged drug use during 1997 due to high hermatocrit levels', 'Alleged drug use during 1994 due to high hermatocrit levels', '2004 Tour de France title stripped by UCI in 2012', 'Confessed later in his career to doping', '2001 Tour de France title stripped by UCI in 2012', '1994 Failed test for salbutemol, not a banned drug at that time', 'Confessed in 1998 to taking EPO', 'Alleged drug use during 1995 due to high hermatrocite levels'],
      URL: ['https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use', 'https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use', 'https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use', 'https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations', 'https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case', 'https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations', 'http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html', 'https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair', 'https://en.wikipedia.org/wiki/Bjarne_Riis#1996-1998:_Team_Deutsche_Telekom_and_Tour_de_France_win']
    };

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: racingData.Time,
        datasets: [{
          label: 'Bicycle Racing Chart',
          data: racingData.Seconds,
          borderColor: 'blue',
          // fill: false
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
