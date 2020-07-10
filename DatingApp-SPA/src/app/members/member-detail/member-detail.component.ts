import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AltertifyService } from 'src/app/_services/altertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private alertify: AltertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  // loadUser() {
  //   // tslint:disable-next-line: no-string-literal
  //   this.userService.getUser(+this.route.snapshot.params.id).subscribe(
  //     (user: User) => {
  //       this.user = user;
  //     }, error => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }
}
