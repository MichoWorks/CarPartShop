import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() message: string = ''; // טקסט ההודעה
  @Input() visible: boolean = false; // האם הפופאפ מוצג
}
