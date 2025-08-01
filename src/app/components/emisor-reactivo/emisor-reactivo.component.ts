import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-emisor-reactivo',
  templateUrl: './emisor-reactivo.component.html',
  styleUrls: ['./emisor-reactivo.component.css']
})
export class EmisorReactivoComponent {
  constructor(
    private messageService: MessageService,
  ){}

  sendMessage(){
    this.messageService.changeMessage('Nuevo Mensaje!!');
  }
}
