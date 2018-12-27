import { NgModule } from '@angular/core';
import { NewYearComponent } from './new-year.component';
import { HappyNewYearComponent } from './happy-new-year/happy-new-year.component';

@NgModule({
  declarations: [NewYearComponent, HappyNewYearComponent],
  imports: [
  ],
  exports: [NewYearComponent]
})
export class NewYearModule { }
