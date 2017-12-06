import { Injectable } from "@angular/core";

let categories: string[] = ["house", "construction", "garden"];

let categoriesPromise = Promise.resolve(categories);

@Injectable() 
export class CategoryService {

    getData(): Promise<string[]> {
        return categoriesPromise;
    }
}

