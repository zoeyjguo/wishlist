import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
}) 
export class EventService {
    private subject = new Subject(); // allows us to pass messages/events from Observable object to the subscriber objects

    emit(eventName: string, payload: any) {
        this.subject.next({eventName, payload}); // pass in the object we want the subscribers to work with
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj: any) => {
            if (eventName == nextObj.eventName) {
                callback(nextObj.payload);
            }
        })
    }
}
