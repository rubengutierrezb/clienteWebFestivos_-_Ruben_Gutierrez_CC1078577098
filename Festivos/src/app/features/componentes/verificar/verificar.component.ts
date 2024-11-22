import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../share/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { FestivoService } from '../../servicios/festivo.service';

@Component({
  selector: 'app-verificar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './verificar.component.html',
  styleUrl: './verificar.component.css'
})
export class verificarComponent {
  fecha: Date | null = null;
  resultado: string = '';

  constructor(private festivoServicio: FestivoService) {}
  
  public verificar() {
    if (!this.fecha) {
      alert('Por favor, selecciona una fecha válida.');
      return;
    }
  
    const fechaStr = this.fecha
      ? `${this.fecha.getFullYear()}/${(this.fecha.getMonth() + 1)
          .toString()
          .padStart(2, '0')}/${this.fecha.getDate().toString().padStart(2, '0')}`
      : '';
  
    this.festivoServicio.verificar(fechaStr).subscribe(
      (respuesta: string) => {
        this.resultado = respuesta;
        alert(this.resultado);
      },
      (error) => {
        alert('Hubo un error al verificar la fecha. Inténtalo de nuevo.');
      }
    );
  }  
}
