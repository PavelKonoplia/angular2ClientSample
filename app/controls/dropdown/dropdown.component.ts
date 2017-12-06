import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent<T> {
    private _items: T[] = [];

    public get items(): T[] { return this._items; }

    @Input()
    public set items(value: T[]) {
        if (!value) {
            this._items = [];
            return;
        }
      this._items = value;
    }

    @Input()
    public currentItem: T;

    @Input()
    public defaultName: string = "All";

    @Output()
    public currentItemChange: EventEmitter<T> = new EventEmitter();

    select(item: T) {
        this.currentItemChange.emit(item);
    }
}