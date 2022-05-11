

// CHapter 6 

//========a vector type========== 
class Vec{
    constructor(x,y) {
      this.x = x;
      this.y = y;
    }
    plus(vec2){
      let x = this.x + vec2.x 
      let y = this.y + vec2.y
      return new Vec(x,y)
    }
  
    minus(vec2){
      let x = this.x - vec2.x 
      let y = this.y - vec2.y
      return new Vec(x,y)
    }
  
    get length(){
      let r = this.x * this.x + this.y * this.y
      return Math.sqrt(r);
    }
  }
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5
  


  //=======Groups=============


  class Group {
    constructor() {
        this.list = []

    }
    add(number){
        this.list.push(number);
    }

    delete(num){
        this.list = this.list.filter(item => item !== num);
        }
    

    static from(collection) {
        let group = new Group;
        collection.forEach(element => {
            group.add(element);
        });
        return group;
      }

    has(number){
        return this.list.includes(number);
    }

  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false