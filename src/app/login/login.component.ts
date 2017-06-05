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
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {
        sessionStorage.removeItem('onlineUser');
        
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.userService.login(this.model.username, this.model.password).subscribe(data => {

            let onlineUser = JSON.parse(data);

            if (!onlineUser) { this.lblresult = "Bilgilerinizi kontrol ederek tekrar deneyiniz."; return; }

            sessionStorage.setItem('onlineUser', JSON.stringify(onlineUser));

            this.lblresult = onlineUser.userId;

            this.router.navigate(['/home']);
        });
    }
}