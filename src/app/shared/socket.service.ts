import io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { tap, share, switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SocketService {
    private socket;

    subscriptions = new Map();
    connected = false;

    constructor() {}

    connect() {
        this.socket = io.connect('https://gbotapi.herokuapp.com');

        this.socket.on('connect', () => {
            this.connected = true;
            console.log('connection to socket created');
        });

        this.socket.on('disconnect', () => {
            this.connected = false;
            console.log('connection to socket destroyed');
        });
    }

    emit(topic: string, payload: any) {
      this.socket.emit(topic, payload);
    }

    subscribe(topic) {
        if (this.socket && this.connected) {
          if (this.subscriptions.has(topic)) {
            return this.subscriptions.get(topic);
          }
          const subscription = new Observable(observer => {
            this.socket.on(topic, (event) => {
              observer.next(event);
            });
            return () => {
              this.socket.removeListener(topic, (data) => observer.next(data));
            };
          }).pipe(share());
          this.subscriptions.set(topic, subscription);
          return subscription;
        } else {
          return timer(1000)
            .pipe(switchMap(() => {
              return this.subscribe(topic);
            }));
        }
    }
}
