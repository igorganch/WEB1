import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../BlogPost';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  getAllPosts(): Observable<BlogPost[]> {
    const perPage = Number.MAX_SAFE_INTEGER.toString();

    let params = {
      page: "1",
      perPage: perPage
    }

    return this.http.get<BlogPost[]>(`https://sleepy-peak-66507.herokuapp.com/api/posts`, { params });
  }
  getPostByID(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://sleepy-peak-66507.herokuapp.com/api/posts/${id}`);
  }
  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://sleepy-peak-66507.herokuapp.com/api/posts`, data);
  }
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://sleepy-peak-66507.herokuapp.com/api/posts/${id}`, data);
  }
  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://sleepy-peak-66507.herokuapp.com/api/posts/${id}`);
  }

  getPosts(page, tag, category): Observable<BlogPost[]> {
    const perPage = 6;
    
    let params = {
      page: page,
      perPage: perPage.toString(),
    }

    if (tag != null || tag != undefined) {
      params["tag"] = tag;
    }

    if (category != null || category != undefined) {
      params["category"] = category;
    }

    return this.http.get<BlogPost[]>(`https://sleepy-peak-66507.herokuapp.com/api/posts`,{ params });
  }
  getCategories(): Observable<any> {
    return this.http.get<any>(`https://sleepy-peak-66507.herokuapp.com/api/categories`);
  }

 
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://sleepy-peak-66507.herokuapp.com/api/tags`);
  }

}