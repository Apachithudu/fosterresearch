import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  Name: string = '';
  Email: string = '';
  Subject : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  info:any = "info@fosterresearch.org";
  contact:any = "contact@fosterresearch.org";
  isMenuOpen = false;

  onSubmit() {
     const payload: any = {
      Name: this.Name,
      Email: this.Email,
      Subject: this.Subject,
    
    }
    }

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }

}
