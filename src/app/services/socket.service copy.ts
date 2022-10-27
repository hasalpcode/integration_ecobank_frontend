import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client"; 


var socket = io('http://localhost:3333');
@Injectable({
	providedIn: 'root'
})
export class SocketService {
	
	public message$: BehaviorSubject<string> = new BehaviorSubject('');
	constructor(private toastr: ToastrService) {}
  
	
  public hook:any
	
  
	getsocket(){
		return socket.on('news', (data) => {
		
	  console.log(data)
	  this.hook = data
	  socket.emit('my other event', { my: 'data' })
	  })
	}
	notification(){
		return socket.on('message',(data) => {
			if (data == 'APPROVED') {
				alert('PAYMENT IS '+ data)
				
			}
			//window.location.reload()
			socket.emit('my other event', { my: 'message recu' })
		})

	}
	

}