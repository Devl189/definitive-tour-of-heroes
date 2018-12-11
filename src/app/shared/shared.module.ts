import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/primeng';

@NgModule({
  /* CommonModule --> Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.
   Re-exported by BrowserModule, which is included automatically in the root AppModule
   when you create a new app with the CLI new command. */
  /* FormsModule --> Exports the required providers and directives for template-driven forms,
  making them available for import by NgModules that import this module.*/
  imports: [MenubarModule, ButtonModule, InputTextModule],
  exports: [CommonModule, FormsModule, MenubarModule, ButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
