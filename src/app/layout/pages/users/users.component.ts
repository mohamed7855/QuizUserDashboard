import { RouterLink } from '@angular/router';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { User } from '../../../shared/interfaces/users';
import { isPlatformBrowser } from '@angular/common';
import { PaginationComponent } from "../../additions/pagination/pagination.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, PaginationComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  allUsers!: User[]
  totalPages!: number

  constructor(private _ApiService: ApiService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.getAllUsers();
    }
  }

  getAllUsers(page: string = '1') {
    this._ApiService.getUsers(page).subscribe({
      next: (res) => {
        this.allUsers = res.data
        this.totalPages=res.total_pages
      },
      error: (err) => { },
      complete: () => { }
    })
  }
}
