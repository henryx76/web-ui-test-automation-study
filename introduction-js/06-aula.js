const cookie = {
    name: "chocolate is very good",
    isGlutenfree: false,
    eatCookie: function () {
        console.log("i am eating", this.name)
    }

};

cookie.name = "chocolate is very good";
cookie.isGlutenfree = true;
//console.log(cookie["+yummi"]);
//console.log(cookie);
cookie.eatCookie()

class cokkie {
    constructor(isGlutenfree, name){
        this.name = name;
        this.isGlutenfree = isGlutenfree;
    }
    eatCookie(){
        console.log("eating cookie" + this.name)
    }
}
const myCokkie = new cokkie("ice cream", false);
console.log(myCokkie["name"])

myCokkie.eatCookie;