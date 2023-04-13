import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { UserData } from 'src/app/models/user.model';
import { WalletData } from 'src/app/models/wallet.model';
import { BackService } from 'src/app/services/back.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id_wallet', 'amount', 'user_id', 'crypto_id'];
  list : WalletData[]
  dataSource: MatTableDataSource<WalletData>;
  selection = new SelectionModel<WalletData>(true, []);



  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  constructor(private router: Router, private backService : BackService) {

    this.dataSource = new MatTableDataSource(this.list);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.backService.getWallets()
      .subscribe(
        (data: WalletData[]) => {
          console.log(data);
          this.list = data;
        },
        (err: any) => {
          this.handleError(err)
        }
      )
  }

  handleError(error: any) {
    if (error.status === 500) {
      //  Show error message
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

