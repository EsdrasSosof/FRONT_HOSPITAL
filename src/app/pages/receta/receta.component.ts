import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecetaService } from 'src/app/services/receta/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent {

  formData = {
    dose:'',
    correlative_id:0
  }

  formData2 = {
    medicine_id:0,
    prescription_id:0
  }

  medicinas: any []=[];
  diagnosticos: any []=[];

  constructor(private recetaService: RecetaService,   private router: Router){}
  
  @Input() title?: string = 'CREAR UNA RECETA';

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.dose = this.formData.dose.toString();

    // Llama al servicio para crear un nuevo médico
    this.recetaService.createPrescriptions(this.formData).subscribe(
      (response) => {
        console.log('Receta creada exitosamente:', response);
        this.resetForm();
      // Muestra un mensaje de éxito
        alert('Receta creada se creó exitosamente');
      // Redirige a otra página
        this.router.navigate(['/consultas']);
      },
      (error) => {
        console.error('Error al crear la Receta:', error);
        // Maneja el error de creación aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al crear la receta. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  resetForm() {
    this.formData = {
      dose:'',
      correlative_id:0
    };
  }

  ngOnInit(): void {
    // Obtiene la lista de medicinas cuando se carga el componente
    this.recetaService.getMedicines().subscribe((medi) => {
      this.medicinas = medi;
    });
    // Obtiene la lista de diagnósticos cuando se carga el componente
    this.recetaService.getDiagnostic().subscribe((diagnostico) => {
      this.diagnosticos = diagnostico;
    });
  }
}
