let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven() {
    for(let i=0;i<7;i++){
        if(numbers[i]%2==0){
            let num=numbers[i];
            console.log(num + 'は偶数です');
        }
    }
    
}
isEven();

class Car{
    constructor(gas,number){
        this.gas=gas;
        this.number=number;
    }
    getNumGas(){
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です。`);
    }
}
let test1=new Car('レギュラー',1234);
test1.getNumGas();