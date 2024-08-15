import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { User } from '../../../shared/interfaces/users';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  x=null
  id!: string | null
  userData!: User
  constructor(private _ActivatedRoute: ActivatedRoute, private _ApiService: ApiService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this._ActivatedRoute.paramMap.subscribe(
        params => {
          this.id = params.get("id");
          if(typeof this.id == "string"){
            this.getUserDetails(this.id)
          }
        })
    }
  }

  getUserDetails(id: string) {
    this._ApiService.getUserDetails(id).subscribe({
      next: (res) => {
        this.userData = res.data;
      },
      error: (err) => { },
      complete: () => { }
    })
  }
}

