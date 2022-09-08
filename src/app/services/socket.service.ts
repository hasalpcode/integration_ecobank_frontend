import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client"; 

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	
	public message$: BehaviorSubject<string> = new BehaviorSubject('');
	constructor() {}
  
	socket = io('http://localhost:3333');
  
	
  
	getsocket(){
		return this.socket.on('news', (data) => {
	  console.log(data)
	  this.socket.emit('my other event', { my: 'data' })
	  })
	}
	notification(){
		return this.socket.on('message',(data) => {
			console.log(data)
			this.socket.emit('my other event', { my: 'message recu' })
			})
	}
	
	
	
 



}