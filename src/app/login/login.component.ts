import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    model: any = {};
    lblresult;

    constructor(
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {

    }

    login() {
        this.userService.login(this.model.username, this.model.password).subscribe(data => {
            this.lblresult = JSON.parse(data).userId;
            this.router.navigate(['/home']);
        });
    }
}