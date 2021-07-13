import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';
import { FooterComponent } from './component/footer/footer.component';
import { BackgroundComponent } from './component/background/background.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FooterComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadingSpinnerComponent,
    FooterComponent,
    BackgroundComponent
  ]
})
export class SharedModule { }
