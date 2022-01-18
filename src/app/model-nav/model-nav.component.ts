import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-nav',
  templateUrl: './model-nav.component.html',
  styleUrls: ['./model-nav.component.css']
})
export class ModelNavComponent implements OnInit {
title:string='Model'
  constructor(private router: Router) { }
  goBack(){
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
  }

}
