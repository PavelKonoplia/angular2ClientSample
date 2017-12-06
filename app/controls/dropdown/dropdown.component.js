"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this._items = [];
        this.defaultName = "All";
        this.currentItemChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DropdownComponent.prototype, "items", {
        get: function () { return this._items; },
        set: function (value) {
            if (!value) {
                this._items = [];
                return;
            }
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.select = function (item) {
        this.currentItemChange.emit(item);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DropdownComponent.prototype, "items", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "currentItem", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "defaultName", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DropdownComponent.prototype, "currentItemChange", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dropdown',
            templateUrl: './dropdown.component.html'
        })
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map