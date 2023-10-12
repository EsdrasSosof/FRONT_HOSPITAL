import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { GraficaService } from '../../../app/services/grafica/grafica.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnDestroy, OnInit {

  graphData: any[] = [];
  myChart: Chart | null = null;

  constructor(private graficaService: GraficaService) {}
//primer código no muestra la gráfica

  ngOnInit() {
    this.graficaService.getGraphData().subscribe((data) => {
      // Almacenar los datos de la API en la propiedad graphData
      this.graphData = data;
      //console.log('Datos de graphData en ngOnInit:', this.graphData);
  
      // Luego de obtener los datos de la API, genera la gráfica
      this.generateChart(this.graphData);
    });
  }

  ngAfterViewInit() {
    this.generateChart(this.graphData);
    // console.log('Datos de graphData en ngAfterView:', this.graphData);
  }

  ngOnDestroy() {
    // Destruir el gráfico antes de abandonar la página para evitar errores
    if (this.myChart) {
      this.myChart.destroy();
    }
    // console.log('prueba');
  }

  generateChart(data: any[]) {
    const labels = data.map((item) => item.date); // Usar las fechas de los datos
    const values = data.map((item) => item.count); // Usar los valores de los datos
  
    //setup
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Cantidad de consultas',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    //conf
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    // Destruir el gráfico anterior si existe
    if (this.myChart) {
      this.myChart.destroy();
    }
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: options,
    });
  }

//segundo código funciona con botón

// ngOnInit() {
//   this.fetchGraphData(); // Llama a la función para obtener los datos al cargar el componente
// }

// ngOnDestroy() {
//   // Destruir el gráfico antes de abandonar la página para evitar errores
//   if (this.myChart) {
//     this.myChart.destroy();
//   }
// }

// fetchGraphData() {
//   this.graficaService.getGraphData().subscribe((data) => {
//     // Almacenar los datos de la API en la propiedad graphData
//     this.graphData = data;
//     //console.log('Datos de graphData en ngOnInit:', this.graphData);
//   });
// }

// generateChart(data: any[]) {
//   const labels = data.map((item) => item.date); // Usar las fechas de los datos
//   const values = data.map((item) => item.count); // Usar los valores de los datos
//   console.log(labels, values);

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Cantidad de eventos',
//         data: values,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   const ctx = document.getElementById('myChart') as HTMLCanvasElement;
//   // Destruir el gráfico anterior si existe
//   if (this.myChart) {
//     this.myChart.destroy();
//   }
//   this.myChart = new Chart(ctx, {
//     type: 'bar',
//     data: chartData,
//     options: options,
//   });
// }

// generateChartOnClick() {
//   // Llamar a la función para generar la gráfica cuando se haga clic en el botón
//   this.generateChart(this.graphData);
// }
}
