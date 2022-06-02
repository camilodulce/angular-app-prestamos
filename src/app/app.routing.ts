import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '**', 
        pathMatch : 'full', 
        redirectTo: 'prestamos'
    },
    {
        path       : 'prestamos',
        loadChildren: () => import('src/app/modules/prestamos/prestamos.module').then(m => m.PrestamosModule)
    },
    {
        path       : 'solicitudes',
        loadChildren: () => import('src/app/modules/solicitudes/solicitudes.module').then(m => m.SolicitudesModule)
    }
];
