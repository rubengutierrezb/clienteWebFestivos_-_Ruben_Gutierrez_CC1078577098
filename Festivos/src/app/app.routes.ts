import { Routes } from '@angular/router';
import { verificarComponent } from './features/componentes/verificar/verificar.component';
import { obtenerComponent } from './features/componentes/obtener/obtener.component';

export const routes: Routes = [
    { path: "verificar", component: verificarComponent},
    { path: "obtener", component: obtenerComponent},
];
