export class User {


constructor(private _nameInput: string,
    private _emailInput: string,
    private _occupationInput: string,
    private _subjectInput: string,
    private _contentInput: string) {
   }

get emailInput(): string {
    return this._emailInput;
}
set emailInput(value: string) {
    this._emailInput = value;
}
get nameInput(): string {
    return this._nameInput;
}
set nameInput(value: string) {
    this._nameInput = value;
}
get subjectInput(): string {
    return this._subjectInput;
}
set subjectInput(value: string) {
    this._subjectInput = value;
}

get occupationInput(): string {
    return this._occupationInput;
}
set occupationInput(value: string) {
    this._occupationInput = value;

}

get contentInput(): string {
    return this._contentInput;
}
set contentInput(value: string) {
    this._contentInput = value;
}
}





