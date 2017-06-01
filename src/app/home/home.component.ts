import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.model';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

     currentUser: any = {};

    constructor(private userService: UserService) { }

    ngOnInit() {

        this.userService.getUserDashboard().subscribe(data => {
            this.currentUser = JSON.parse(data);
        });

    }
}