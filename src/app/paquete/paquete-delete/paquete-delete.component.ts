import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../shared/models/paquete';
import { PaqueteService } from '../../shared/services/paquete.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paquete-delete',
  templateUrl: './paquete-delete.component.html',
  styleUrls: ['./paquete-delete.component.css']
})
export class PaqueteDeleteComponent implements OnInit {

  paquete: Paquete;

  constructor(private paqueteservice: PaqueteService,
              private activatedroute: ActivatedRoute ) { 

              }


  ngOnInit() {

    
  }

}
