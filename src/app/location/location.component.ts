import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location:Location;

  constructor(private _locationService:LocationService) { }

  ngOnInit() {
    this.location ;
    this._locationService.getlocation().subscribe( data => {
      this.location = data;
    })
  }

}
