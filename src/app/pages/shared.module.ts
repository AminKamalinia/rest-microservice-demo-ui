import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateConverterPipe } from 'src/app/pipes/date-converter.pipe';
import { EnumKeyPipe } from 'src/app/pipes/enum-key.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IsInvalidDirective } from '../directives/is-invalid.directive';
import { DeleteModalComponent } from '../components/delete-modal/delete-modal.component';



@NgModule({
  declarations: [
    DateConverterPipe,
    IsInvalidDirective,
    EnumKeyPipe,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IsInvalidDirective,
    ReactiveFormsModule,
    DeleteModalComponent,
    FontAwesomeModule,
    DateConverterPipe,
    EnumKeyPipe
  ]
})
export class SharedModule { }
