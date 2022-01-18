import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-nav',
  templateUrl: './detail-nav.component.html',
  styleUrls: ['./detail-nav.component.css']
})
export class DetailNavComponent implements OnInit {
  title:string='Model Details';
  constructor(private router: Router) { }
  back(){
    this.router.navigate(['/products']);
  }
  ngOnInit(): void {
  }

}
