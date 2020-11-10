//1-3
// A number, n, is a prime if it isn't divisible by any other number other than by 1 and itself.
//  Also, it's sufficient to check the numbers [2, sqrt(n)].


function isPrime (n)
{
    if (n < 2) return false;

    /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **/

    var q = Math.floor(parseInt(Math.sqrt(n)));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {   
            console.log(i)
            return false;
            
        }
    }
    
    return true;
}

console.log(isPrime(100000));
console.log(isPrime(1000000));




// //4
// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// // const reversed1 = story.split("").reverse().join("");


// function reverse(str){
//     if(str === ""){
//      return str 
//     }else{
//      return reverse(str.substr(1)) + str[0]
//     }
//    }

// console.log(reverse(story));