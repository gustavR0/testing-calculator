import { Component, OnInit } from '@angular/core';
import { addition } from '../addition/addition';
import { substraction } from "../substraction/substraction";
import { division } from "../division/division";
import { multiplication } from "../multiplication/multiplication";
import { exp } from '../exp/exp';
import { sqr } from '../sqr/sqr';
import { sqrt } from '../sqrt/sqrt';



@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }
  result = 0;
  operator1 = 0;
  operator2 = 0;

  ngOnInit(): void {
  }

  addition() {
    let myresult = 0;
    myresult = addition(this.operator1, this.operator2);
    this.result = myresult;
  }

  substraction() {
    let myresult = 0;
    myresult = substraction(this.operator1, this.operator2);
    this.result = myresult;
  }

  multiplication() {
    let myresult = 0;
    myresult = multiplication(this.operator1, this.operator2);
    this.result = myresult;
  }

  division() {
    let myresult = 0;
    myresult = division(this.operator1, this.operator2);
    this.result = myresult;
  }

  exp(){
    let myResul = 0;
    myResul = exp(this.operator1,this.operator2);
    this.result = myResul;
  }

  sqr(){
    let myResul = 0;
    myResul = sqr(this.operator1);
    this.result = myResul;
  }

  sqrt(){
    let myResul = 0;
    myResul = sqrt(this.operator1);
    this.result = myResul;
  }

}
