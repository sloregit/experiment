import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeatroDBService } from '../teatro-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Key: string = '0ef3f513';
  chiaveUtente: string;
  rapido: boolean;
  @Output() rapidoEmitter = new EventEmitter<boolean>();
  @Output() chiaveUtenteEmitter = new EventEmitter<string>();
  constructor() {}
  accedi() {
    this.chiaveUtenteEmitter.emit(this.chiaveUtente);
    this.rapidoEmitter.emit(this.rapido);
  }
  ngOnInit() {}
}
