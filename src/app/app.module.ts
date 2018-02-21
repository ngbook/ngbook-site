import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetDemosService } from './services/demo.service';
import { GlobalErrorHandler } from './services/global-error.event';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
    ],
    providers: [
        GetDemosService,
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
