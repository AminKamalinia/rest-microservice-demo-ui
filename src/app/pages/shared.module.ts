import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateConverterPipe } from 'src/app/pipes/date-converter.pipe';
import { EnumKeyPipe } from 'src/app/pipes/enum-key.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    DateConverterPipe,
    EnumKeyPipe
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
    ReactiveFormsModule,
    FontAwesomeModule,
    DateConverterPipe,
    EnumKeyPipe
  ]
})
export class SharedModule { }
