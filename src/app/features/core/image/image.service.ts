import { Injectable } from '@angular/core';
import { ApiService } from 'app/features/core/api/api.service';
import { Observable } from 'rxjs';

export class UploadFileResponse {
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  path = 'image';

  constructor(private api: ApiService) {}

  uploadImage(file: Blob): Observable<UploadFileResponse> {
    const formData = new FormData();
    formData.append('upFile', file);
    return this.api.post<UploadFileResponse>(`${this.path}/upload`, formData);
  }
}
