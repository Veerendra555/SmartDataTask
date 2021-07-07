import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import  Axios from 'axios';
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  patientsData:any=[];
  formTitle:any="Add"
  patientDetails:any={};
  constructor() {
    this.getPatientsData();
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  getLocalStorageData()
  {
     var data = JSON.parse(localStorage.getItem('patientData'))
       .sort(function(person1, person2) {
      return person1.startDate > person2.startDate;
  });
     return data;
  }

  setLocalStorageData()
  {
    localStorage.setItem("patientData",JSON.stringify(this.patientsData));
  }

  ////////////Get Patients Data
  getPatientsData()
  {
     Axios.get("assets/data.json")
      .then(response=>{
        this.patientsData = response.data.sort(function(person1, person2) {
          console.log(person1.startDate +" "+ person2.startDate)
          console.log(person1.startDate > person2.startDate)
          return person1.startDate - person2.startDate;
        });
        console.log(this.patientsData)
         this.setLocalStorageData();
      })
      .catch(error=>{
        console.log(error);
      })
  }

/////////Add Patient Details
addPatient(form : NgForm)
{
  var data:any=[];
     data = this.getLocalStorageData();
    data.push(this.patientDetails);
    localStorage.setItem("patientData",JSON.stringify(data));
    this.patientsData = this.getLocalStorageData();
    form.resetForm("");
}
//////////Update Patient Details
assignPatient(data)
{
  this.formTitle="Update "
  this.patientDetails = data;
}

updatePatient(form:NgForm)
{
  var data:any=[];
   data = this.getLocalStorageData();
  console.log(data)
    var data = data.filter(person=>{
          if(person.patientId != this.patientDetails.patientId)
            return person;
     });
     data.push(this.patientDetails);
     console.log(data)
     localStorage.setItem("patientData",JSON.stringify(data));
     this.patientsData = this.getLocalStorageData();   
     this.formTitle="Add";  
     form.resetForm("");
}
  ///Delete Patient Details
   deletePatient(id)
   {
     if(confirm("Are You Sure To Delete This Record"))
     {
      var data:any=[];
         data = this.getLocalStorageData();
        this.patientsData = data.filter(person=>{
           if(person.patientId != id)
           return person;
        }) 
        this.setLocalStorageData()
     }
   }
}
