function Intersection(x, y) {

    var a=0;
    var b=0;
    inter=[];

    while (a<x.length && b<y.length) {

    
        if (x[a] === y[b]){
            inter.push(x[a]);
            a++;
            b++;

    
        } else if (x[a]<y[b]){
        a++;


        } else {
        b++;
        }
    }
    
    return inter;
}


console.log(Intersection([1,2,2,7],[2,2,2,6,6,7]));
// console.log(Intersection([2,3,3,4,8],[2,2,6,6,7]));