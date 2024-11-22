import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReferenciasMaterialModule } from '../../../share/modulos/referencias-material.module';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/festivo';
import { FestivoService } from '../../servicios/festivo.service';

@Component({
  selector: 'app-obtener',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './obtener.component.html',
  styleUrls: ['./obtener.component.css']
})
export class obtenerComponent {
  public textYear: string = ""; 
  public festivos: Festivo[] = [];
  public columnas = [
    { name: "Festivo", prop: "festivo" },
    { name: "Fecha", prop: "fecha" }
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  constructor(private festivoServicio: FestivoService) {}


  public obtener() {
    const year = Number(this.textYear);
    if (!this.textYear || isNaN(Number(this.textYear))) {
      alert('Por favor, ingresa un año válido');
      return;
    }

    this.festivoServicio.obtener(year).subscribe(
      (festivos) => {
        this.festivos = festivos;
      },
      (error) => {
        console.error('Error al obtener los festivos', error);
        alert('Hubo un error al obtener los festivos. Inténtalo de nuevo.');
      }
    );
  }
}


