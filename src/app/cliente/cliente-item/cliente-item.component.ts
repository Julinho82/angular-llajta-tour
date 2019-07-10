import { Component, OnInit , Input} from '@angular/core';
import {Cliente } from '../../shared/models/cliente';

@Component({
  selector: 'app-cliente-item',
  templateUrl: './cliente-item.component.html',
  styleUrls: ['./cliente-item.component.css']
})
export class ClienteItemComponent implements OnInit {

  @Input()
  cliente: Cliente;




  constructor() { }

  ngOnInit() {
  }

}
