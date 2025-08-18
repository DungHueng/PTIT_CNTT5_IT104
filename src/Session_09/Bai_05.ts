class dataStore<T>{
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItems(): T[] {
        return this.data;
    }

    remove(index: number): void {
        if (index > -1 && index < this.data.length) {
            this.data.splice(index, 1);
        }else{
            console.log("Invalid index");
        }
    }
}

const stringStore = new dataStore<string>();
stringStore.addItem("Hello");
stringStore.addItem("World");
console.log(stringStore.getItems());

stringStore.remove(0);
console.log(stringStore.getItems());

const numberStore = new dataStore<number>();
numberStore.addItem(10);
numberStore.addItem(20);
numberStore.addItem(30);
console.log(numberStore.getItems());

numberStore.remove(1);
console.log(numberStore.getItems());