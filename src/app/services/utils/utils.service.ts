import { Injectable } from '@angular/core';
import { AlertInterface } from 'src/app/interfaces';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  async showToast(title: string, icon: SweetAlertIcon) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon,
      title
    })
  }

  async updateStatusPersonModal() {
    Swal.fire({
      title: 'Desbloquear persona',
      text: "¿Esta seguro de desbloquear el acceso a esta persona?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro'
    }).then((result) => {
      return result
    })
  }

  async simpleModal(title: string, message: string) {
    Swal.fire(
      title,
      message,
      'success'
    )
  }
  
  confirm(params: AlertInterface): Promise<any> {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: params.title,
        text: params.text,
        icon: params.icon ? params.icon : 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: params.cancel ? params.cancel : 'Cancelar',
        confirmButtonText: params.confirm ? params.confirm : 'Aceptar'
      })
      .then((result) => resolve(result))
    })
  }

  notify(params: Partial<AlertInterface>): Promise<any> {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: params.title,
        text: params.text,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar' 
      })
      .then((result) => resolve(result))
    })
  }

}
