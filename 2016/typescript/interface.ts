/*
function printLabel (labelObj: {label: string }) {
    console.log(labelObj.label)
};

let myObj = {size: 10, label: 'Size 10 Object'};

printLabel(myObj);*/


interface labelValue {
    label: string;
}
function printLabel (labelObj: labelValue) {
    console.log(labelObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);

class Animal {
    name:string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        super()
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}


