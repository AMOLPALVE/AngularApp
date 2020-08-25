import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
   constructor(private http: HttpClient) {

    //this.http.get("/assets/data.json").toPromise().then(data=>{
      //   console.log(data);
      //   this.columnDefs=data['columnDefs'];
      //  this.rowData=data['rowData']
      // });
 };


 columnDefs = [
       {headerName: 'Sr.No', field: 'SR'},
       {headerName: 'Name', field: 'Name'},
       {headerName: 'Gender', field: 'Gender'},
       {headerName: 'Age', field: 'Age',editable: true}
   ];
  
  rowData = [
       {SR: 1, Name: 'Gill',Gender:'M', Age: 28},
       {SR: 2, Name: 'Ravi',Gender:'M', Age: 29},
       {SR: 3, Name: 'Rai',Gender:'F', Age: 19},
       {SR: 4, Name: 'Roy',Gender:'M', Age: 19},
       {SR: 5, Name: 'Rani',Gender:'F', Age: 30},
       {SR: 6, Name: 'Ram',Gender:'M', Age: 20},
       {SR: 7, Name: 'Rajesh',Gender:'M', Age: 40},
       {SR: 8, Name: 'Rupa',Gender:'F', Age: 40},
       {SR: 9, Name: 'Rupesh',Gender:'M', Age: 11},
       {SR: 10, Name: 'Ropa',Gender:'F', Age: 40},


       {SR: 11, Name: 'Lill',Gender:'M', Age: 28},
       {SR: 12, Name: 'Avi',Gender:'M', Age: 29},
       {SR: 13, Name: 'Pai',Gender:'F', Age: 19},
       {SR: 14, Name: 'Joy',Gender:'M', Age: 19},
       {SR: 15, Name: 'Sani',Gender:'F', Age: 30},
       {SR: 16, Name: 'Jam',Gender:'M', Age: 20},
       {SR: 17, Name: 'Prajesh',Gender:'M', Age: 40},
       {SR: 18, Name: 'Papa',Gender:'F', Age: 40},
       {SR: 19, Name: 'Mupesh',Gender:'M', Age: 11},
       {SR: 20, Name: 'Kapa',Gender:'F', Age: 40},

       {SR: 21, Name: 'Sill',Gender:'M', Age: 28},
       {SR: 22, Name: 'Yuvi',Gender:'M', Age: 29},
       {SR: 23, Name: 'Palak',Gender:'F', Age: 19},
       {SR: 24, Name: 'joy',Gender:'M', Age: 19},
       {SR: 25, Name: 'anil',Gender:'F', Age: 30},
       {SR: 26, Name: 'Jami',Gender:'M', Age: 20},
       {SR: 27, Name: 'Prestesh',Gender:'M', Age: 40},
       {SR: 28, Name: 'Prasad',Gender:'F', Age: 40},
       {SR: 29, Name: 'Ali',Gender:'M', Age: 11},
       {SR: 30, Name: 'KAka',Gender:'F', Age: 40},

       {SR: 31, Name: 'Phill',Gender:'M', Age: 28},
       {SR: 32, Name: 'Rameshvi',Gender:'M', Age: 29},
       {SR: 33, Name: 'Aak',Gender:'F', Age: 19},
       {SR: 34, Name: 'Monu',Gender:'M', Age: 19},
       {SR: 35, Name: 'Kapoor',Gender:'F', Age: 30},
       {SR: 36, Name: 'Tope',Gender:'M', Age: 20},
       {SR: 37, Name: 'Atesh',Gender:'M', Age: 40},
       {SR: 38, Name: 'patil',Gender:'F', Age: 40},
       {SR: 39, Name: 'jafar',Gender:'M', Age: 11},
       {SR: 40, Name: 'KAki',Gender:'F', Age: 40},

       {SR: 41, Name: 'Philps',Gender:'M', Age: 28},
       {SR: 42, Name: 'Asish',Gender:'M', Age: 29},
       {SR: 43, Name: 'Aaki',Gender:'F', Age: 19},
       {SR: 44, Name: 'Mona',Gender:'M', Age: 19},
       {SR: 45, Name: 'Kaor',Gender:'F', Age: 30},
       {SR: 46, Name: 'pepe',Gender:'M', Age: 20},
       {SR: 47, Name: 'Atiesh',Gender:'M', Age: 40},
       {SR: 48, Name: 'patil',Gender:'F', Age: 40},
       {SR: 49, Name: 'jar',Gender:'M', Age: 11},
       {SR: 50, Name: 'KAki',Gender:'F', Age: 40},

   ];

}
