import { TODOLIST2 } from "./adatok.js";

class Model{
    #list = []
    constructor(){
        this.#list=TODOLIST2;
    }

    getList(){
        return this.#list;
    }

    torol(index){
        this.#list.splice(index, 1);
    }

    boolean(index){
        if(this.#list[index].kesz == false){
            this.#list[index].kesz = true;
        }
        else{
            this.#list[index].kesz = false
        }
        console.log(this.#list[index].kesz)
    }
    ujAdat(obj){
        this.#list.push(obj);
    }
}
export default Model;