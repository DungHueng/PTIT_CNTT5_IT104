abstract class Animal{
    // method thường các con dùng chung 
    print():void{
        console.log(" day la con vat"); 
    }
    // abstract method  mỗi class con khác nhau
  abstract  sound():void;
}
class Dog extends Animal{
  sound(): void {
      console.log(`gau gau`);
  }
}
let dog =new Dog();
dog.print();//method thuong
dog.sound();//abstract method
