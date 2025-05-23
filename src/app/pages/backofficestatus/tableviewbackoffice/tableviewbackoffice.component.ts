import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Backoffice } from '../../../models/fullmodels';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-tableviewbackoffice',
  templateUrl: './tableviewbackoffice.component.html',
  styleUrl: './tableviewbackoffice.component.css'
})
export class TableviewbackofficeComponent {
  @Input() data: Backoffice[] = [];
  fileName: string = 'Backoffice_Reports_' + new Date().toISOString().replace(/\D/g, '').replace(/-/g, '');
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('Mytable', {static: false}) Mytable!: ElementRef;

exportXLS() {
  if(this.data.length === 0 || this.data === undefined || this.data === null) {
    console.log('No data found to download');
}
else {
import("xlsx").then(xlsx => {
    const worksheet = xlsx.utils.json_to_sheet(this.data);
    let range = xlsx.utils.decode_range('!ref'); // The range can be used fot looping.
    for(var R = 0; R <= this.data.length+1; R++) {
        var addr = xlsx.utils.encode_cell({r:R, c:2}); // To formate second column all rows.
        if(!worksheet[addr]) continue;
        worksheet[addr].z = "#,##0.00000"; // the actual number format, "0.00" for two decimal places, "#,##0.00" for thousands, etc.
    }
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, this.fileName);
});
}
}

getPageSizes(): number[] {
  if (this.dataSource.data.length > 20) {
    return [5, 10, 20, this.dataSource.data.length];
  }
  else {
   return [5, 10, 20];
  }
}
   // Helper function of jsonToExcel()
   saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
}
exportPDF() {
  let DATAhtml = this.Mytable.nativeElement;

  const doc = new jsPDF('p','pt');
  //autoTable(doc, {body: this.posts});
  autoTable(doc, { html:  DATAhtml})

  let columnKeys = Object.keys(this.posts[0]);

// Defining the columns array for autoTable
var processedcolumns = columnKeys.map(key => {
    return { header: key.toUpperCase(), dataKey: key };
});


  autoTable(doc, {
    body: this.posts,
    columns:processedcolumns
  })
  autoTable(doc, { html: DATAhtml })

  doc.save(this.fileName+'.pdf');
}
  rows:any = [];
  columns:any = [];
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;
  posts: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  
  }
}

