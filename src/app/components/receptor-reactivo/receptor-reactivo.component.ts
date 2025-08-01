import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receptor-reactivo',
  templateUrl: './receptor-reactivo.component.html',
  styleUrls: ['./receptor-reactivo.component.css']
})
export class ReceptorReactivoComponent implements OnInit, OnDestroy {

  message: string = '';
  suscription!: Subscription;

  constructor(
    private messageService: MessageService,
  ){}

  ngOnInit():void{
    this.suscription = this.messageService.currentMessage.subscribe(
      msg => {
        this.message = msg;
      }
    )
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
