import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CreateBookComponent } from 'src/app/component/modal/create-book/create-book.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private dialog: MatDialog) {
    // this.openDialog() 
  }

  ngOnInit() {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig()
    dialogConfig.minWidth = '950px'
    dialogConfig.minHeight = '450px'
    dialogConfig.panelClass = ['background-secondary', 'pa-0', 'border-radius']

    this.dialog.open(CreateBookComponent, dialogConfig);
  }

}
