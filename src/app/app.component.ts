import { Component, OnInit } from '@angular/core';
import { GetDemosService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data: any[];
    constructor(private demoService: GetDemosService) { }

    ngOnInit() {
        this.demoService.getDemos()
            .subscribe(demos => {
                this.data = demos;
            });
    }

}
