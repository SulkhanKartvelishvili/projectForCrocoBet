import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  @Input() post: any;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
