import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent implements OnInit {
  slider = [
    {
      url: '/assets/images/man1.jpg',
      name: 'John Doe',
      description:
        "I've been a member of this church for years, and I'm constantly amazed by the love and kindness that radiates from our community. It's a place where I can grow in my faith and serve others.",
    },
    {
      url: '/assets/images/woman1.jpg',
      name: 'Sarah Johnson',
      description:
        "This church has been a sanctuary for me during difficult times. The sermons are inspiring, and the people are warm and welcoming. I'm grateful for this community.",
    },
    {
      url: '/assets/images/woman2.jpg',
      name: 'Vikky Smith',
      description:
        "I've found a true home in this church. The pastor's messages are relevant and impactful, and the fellowship is real. I'm so thankful to be a part of this family.",
    },
    {
      url: '/assets/images/man1.jpg',
      name: 'John Doe',
      description:
        'This church has helped me deepen my relationship with God and understand His love for me. The worship services are uplifting, and the community is supportive and encouraging.',
    },
    {
      url: '/assets/images/woman1.jpg',
      name: 'Becky Johnson',
      description:
        "I've been blessed by the church's outreach programs and ministries. It's amazing to see how we're making a difference in our community and beyond.",
    },
    {
      url: '/assets/images/woman2.jpg',
      name: 'Tayor Swift',
      description:
        "The church's emphasis on discipleship and evangelism has helped me grow in my faith and share it with others. I'm proud to be a part of this community.",
    },
    {
      url: '/assets/images/woman1.jpg',
      name: 'Ruth Boaz',
      description:
        "This church has been a source of comfort, guidance, and strength for me and my family. We're grateful for the love and support we've received from the congregation and leadership.",
    },
  ];
  currentIndex: number = 0;
  autoSlide: any;

  constructor() {}

  ngOnInit(): void {
    this.autoSlide = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slider.length) % this.slider.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.slider.length;
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }
}
