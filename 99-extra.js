class User {
    constructor() {
        this._levels = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
        this._pointer = 0;

        this.rank = this._levels[this._pointer];
        this.progress = 0;
    }
    setProgress(points){
        this.progress += points;
        while (this.progress >= 100){
            this._pointer++;
            this.rank = this._levels[this._pointer];
            this.progress -= 100;
        }
        if (this.rank == 8) this.progress = 0;
    }

    incProgress (lvl){
        if(!this._levels.find(el => el == lvl)){ throw Error("error")}
        let points = 0;
        switch (true) {
            case (lvl > this.rank):
                let diference = this._levels.indexOf(lvl) - this._levels.indexOf(this.rank);
                points += (10 * diference * diference);
                break;
            case (this._levels.indexOf(this.rank) - this._levels.indexOf(lvl) == 1 || this._levels.indexOf(this.rank) - this._levels.indexOf(lvl) == 1):
                points ++;
                break;
            case (lvl == this.rank):
                points += 3;
                break;
        }
        if (this.rank < 8){
            this.setProgress(points);
        } else {
            this.progress = 0;
        }
    }
}
let user = new User();

user.incProgress(8)
//user.incProgress(-1)
//user.incProgress(-4)
console.log(user.progress)
console.log(user.rank)
console.log(1- -1)