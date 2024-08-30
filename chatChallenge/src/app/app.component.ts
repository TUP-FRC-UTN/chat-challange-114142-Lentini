import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajesComponent } from './mensajes/mensajes.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MensajesComponent, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'chatChallenge'
  @Input() mensaje : string = "";
  @Input() mensaje2 : string = "";
  emitirMensaje(){
    console.log(this.mensaje)
  }
  
}
