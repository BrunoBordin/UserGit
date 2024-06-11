import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user-service';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-user-git',
  templateUrl: './list-user-git.component.html',
  styleUrl: './list-user-git.component.css'
})

export class ListUserGitComponent implements OnInit {

  displayedColumns = ['type','login','id'];
  users: any[] = [];
  dataSource = new MatTableDataSource<any>([]);


  constructor(private serviceuser: UserService, private dialog: MatDialog) {

  }

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;    
  }

  

  ngOnInit(): void {
    this.loadData();
  }
  
  public loadData() {

    this.serviceuser.getUsers().subscribe((data: any) => {
      this.dataSource.data = data;      
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  public recarregar() {
    this.loadData();
  }

  viewDetails(user: any) {
    this.dialog.open(UserDetailComponent, {
      data: user
    });
  }

}


