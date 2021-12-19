// import { Component, OnInit } from '@angular/core';
// // import * as io from 'socket.io-client';

// import * as moment from 'moment';
// import {environment} from '../../environments/environment'; 
// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent implements OnInit {
//   message: string="";
//   messages: string[] = [];
//   private socket ;

//   constructor() {
//     this.socket = io(environment.chaturl);
//     }

//     ngOnInit(): void {
//       this.socket.on('server-message', (message :any) => {
//         const currentTime = moment().format('hh:mm:ss a');
//         const messageWithTimestamp = `SERVER : ${currentTime}: ${message}`;
//         this.messages.push(messageWithTimestamp);   
//       });
  
//     }

//     sendMessage() {
//       const currentTime = moment().format('hh:mm:ss a');
//       const messageWithTimestamp = `YOU :${currentTime}: ${this.message}`;
//       this.messages.push(messageWithTimestamp);
 
//       this.socket.emit('client-message', this.message);
//       this.message = '';
//     }
  

// }
