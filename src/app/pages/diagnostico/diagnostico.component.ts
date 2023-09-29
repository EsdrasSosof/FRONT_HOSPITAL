import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticoService } from 'src/app/services/diagnostico/diagnostico.service';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent {

  formData = {
    symptom_detail: '',
    pre_existing: '',
    Detected_disease: '',
    consultation_id: 0
  }
  consultas: any []=[];

  constructor(private diagnosticoService: DiagnosticoService,   private router: Router){}

  @Input() title?: string = 'CREAR UN DIAGNÓSTICO MÉDICO';

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.symptom_detail = this.formData.symptom_detail.toString();
    this.formData.pre_existing = this.formData.pre_existing.toString();
    this.formData.Detected_disease = this.formData.Detected_disease.toString();

    // Llama al servicio para crear un nuevo médico
    this.diagnosticoService.createDiagnostics(this.formData).subscribe(
      (response) => {
        console.log('Diagnóstico creado exitosamente:', response);
        this.resetForm();
        alert('El diagnóstico se creó exitosamente');
        this.router.navigate(['/consultas']);
      },
      (error) => {
        console.error('Error al crear el diagnóstico:', error);
        // Maneja el error de creación aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al crear el diagnóstico. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  resetForm() {
    this.formData = {
      symptom_detail: '',
      pre_existing: '',
      Detected_disease: '',
      consultation_id: 0
    };
  }

  ngOnInit(): void {
    // Obtiene la lista de consultas cuando se carga el componente
    this.diagnosticoService.getConsultation().subscribe((consultas) => {
      this.consultas = consultas;
    });
  }
}
