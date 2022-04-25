import { Component, OnInit, ViewChild } from '@angular/core';
import { NgOtpInputConfig } from 'ng-otp-input';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  config: NgOtpInputConfig = {
    length:5,
    allowNumbersOnly: false,
    disableAutoFocus: false,
    letterCase: 'Upper',
    inputStyles: {
      'width': '50px',
      'height': '50px',
      'color':'red'
    }
  };
  chosenWord: any;
  indexArray = [0,1,2,3,4,5];

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.getChoseWord();
    
  }

  getChoseWord(){
    this.gameService.getChosenWord().toPromise().then((res)=>{
      
      this.chosenWord = res.word;
    })
  }
  

}
