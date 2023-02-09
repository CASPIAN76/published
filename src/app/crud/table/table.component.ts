import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder}   from'@angular/forms'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
student:Array<any>=[]
  contactForm!: FormGroup

i=0
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

  this.contactForm=this._fb.group({

    name:new FormControl(""),
    lastName:new FormControl(""),
    email:new FormControl("")

  })






  const local=localStorage.getItem("student")

  if(local !=null){
    this.student=JSON.parse(local)
    console.log(JSON.parse(local))
  }
  }

onClose(){
  const close=document.getElementById('save')
  console.log(close,"close")

}


fil:any
edit(value:any){
console.log(value)

this.fil=this.student.find((item)=>item.id===value)
console.log(this.fil)
this.contactForm.patchValue(this.fil)


}

id=0
  Add(){
if(this.student.length){
this.id=this.student.length
console.log(this.id)
}
  const data={
    id:this.id,
    name:this.contactForm.get('name')?.value,
    lastName:this.contactForm.get('lastName')?.value,
    email:this.contactForm.get('email')?.value,
  }
      this.student.push(data);
      localStorage.setItem("student", JSON.stringify(this.student))


  }


  editSave(){


  }

  remove(i:any){
console.log(i)
this.student.splice(i,1)
localStorage.setItem("student", JSON.stringify(this.student))
  }
}


// //////////////////////
