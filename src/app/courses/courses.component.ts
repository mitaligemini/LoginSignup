import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  id:string='';

  constructor( private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(data =>   //params or queryParams
      this.id=data['id']
    
    );
    

   }

  ngOnInit(): void {
  }

}
