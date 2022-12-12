// import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
// declare var $: any;

// declare var this: any;
// import * as $ from 'jquery';
// import * as variable from 'variableName';
// declare function test(): void;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // data_setbg:any;
    categories_section_begin:any;
    customOptions: any = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      // navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
      navSpeed: 700,
      navText: ['<', '>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
  constructor( private admin: AdminService ) { }
  private subscription: Subscription
  ngOnInit(): void {

      this.getall_categories_section_begin();
  

  }
  getall_categories_section_begin(){
    this.subscription = this.admin.get_index_product().subscribe((data:any)=>{
      console.log(data.product);
      this.categories_section_begin=data.product;
    },error =>{
      console.log(error);
    }
    )
}

}
