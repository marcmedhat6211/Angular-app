import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{
  username = 'Marc Medhat';

  constructor() {}

  saveBtn(ev){
    const saveBtn = <HTMLInputElement>document.getElementById('saveBtn');
    if(this.username !== null && this.username !== ''){
      console.log('saved successfully');
      this.username = '';
    }
    else{
      saveBtn.disabled = true;
    }
  }  
}
