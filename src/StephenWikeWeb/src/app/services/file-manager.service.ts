import { Injectable } from '@angular/core';
// import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  constructor() { }

  getFiles(path: string): any[] {
    var results = [];
    
    // fs.readdirSync(path).forEach((file) => {
    //   file = path+'/'+file;
    //   var stat = fs.statSync(file);
  
    //   if (stat && stat.isDirectory()) {
    //     results = results.concat(this.getFiles(file))
    //   } else results.push(file);
  
    // });
  
    return results;
  };

}
