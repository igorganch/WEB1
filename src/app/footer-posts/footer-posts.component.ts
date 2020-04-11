import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { BlogPost } from '../../BlogPost';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {
  blogPosts: Array<BlogPost>;
  private posts;

  constructor(private data: PostService) { }


  ngOnInit(): void {
    this.posts = this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));
  }

}
