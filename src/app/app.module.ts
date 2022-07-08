import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive'
import { UnlessDirective } from './unless.directive'
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightDirective,
    UnlessDirective,
    BasicHighlightDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
