import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-mat-header',
  templateUrl: './mat-header.component.html',
  styleUrls: ['./mat-header.component.css']
})
export class MatHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
