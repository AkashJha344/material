import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserlistService } from '../../../material/services/userlist.service';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {
  details: any = [];
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(private userlist: UserlistService) {
    this.userlist.getUserList().subscribe((response) => {
      this.details = response;
      this.dataSource = new MatTableDataSource<any>(this.details.data);
      console.log(this.details);
    });
  }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}