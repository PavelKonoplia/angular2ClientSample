import { Injectable } from "@angular/core";

@Injectable() 
export class CategoryService {

    categories: string[] = ["house", "construction", "garden"];

    getData() {
        return this.categories;
    }    
}

