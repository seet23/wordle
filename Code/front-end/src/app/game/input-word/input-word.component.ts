import { GameService } from 'src/services/game.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-input-word',
  templateUrl: './input-word.component.html',
  styleUrls: ['./input-word.component.css']
})
export class InputWordComponent implements OnInit {
  invalidWord: boolean = false;

  form: FormGroup = new FormGroup({
    firstWord: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    secondWord: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    thirdWord: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    fourthWord: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    fifthWord: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')])
  });
  maxLength: any = 1;
  chosenWordArray: any[] = [];
  notExisits: any[] = [true,true,true,true,true];
  exists: any[] = [false,false,false,false,false];
  sequenceMatch: any[] = [false,false,false,false,false];
  hintArray=[]

  @Input() chosenWord:any;
  @Input() index:any

  constructor(private gameService:GameService,
    private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      let word = ""
      for(let i in this.form.value){
        word = word + this.form.value[i];
      }
      this.chosenWordArray = [...this.chosenWord];
      this.resetAllFlags();
      this.checkValidWord(word);
    }
  }

  checkValidWord(inputWord: any) {
    this.gameService.checkValidWord(inputWord).toPromise().then((res)=>{
    },(error)=>{
      if(error.status == 302){
        this.matchChosenWord(inputWord.toLowerCase());
      }else{
        this.notifyService.showWarning("Please enter valid word", inputWord.toUpperCase())
        this.invalidWord = true;
      }
    });
  }

  getHint(chosenWord: any) {
    this.gameService.getHint(chosenWord).toPromise().then((res)=>{
      
      if (res.hints !== '') {
        this.hintArray= res.hints.split(',');
        
      }
      
      
      if(this.hintArray.length !=0 ){
        this.notifyService.showInfo("Hint !!!", this.hintArray[Math.floor(Math.random() * this.hintArray.length)])
      }else{
        this.getSrambleWord();
      }
    });
  }

  getSrambleWord() {
    this.gameService.checkValidWord(this.chosenWord).toPromise().then((res) => {
      this.notifyService.showInfo(res.hints, "")
    })
  }

  matchChosenWord(inputWord: any){
    let inputWordArray = [...inputWord];
    if(inputWord === this.chosenWord){
      for(let i in this.sequenceMatch){
        this.sequenceMatch[i] = true;
      }
    }else{
      if(this.index==2){
        this.getHint(this.chosenWord)
      }
      
      
      for(let i in this.chosenWordArray){
        if(inputWordArray[i] === this.chosenWordArray[i]){
          this.sequenceMatch[i] = true;
        }else if(this.chosenWordArray.includes(inputWordArray[i])){
          this.exists[i] = true;
        }
      }
    }
  }

  resetAllFlags(){
    this.notExisits = [false,false,false,false,false];
    this.exists = [false,false,false,false,false];
    this.sequenceMatch = [false,false,false,false,false];
  }

}
