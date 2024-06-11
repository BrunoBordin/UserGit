import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  constructor(public dialogRef: MatDialogRef<UserDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  fecharModal(): void {
    this.dialogRef.close();
  }

}

