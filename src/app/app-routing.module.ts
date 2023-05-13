import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./pages/vehicle/vehicle.module').then(m => m.VehicleModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./pages/department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: '',
    redirectTo: '/home/default',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home/default'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
