
// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] ===  undefined) continue;
        //element
        //element, index
        //element, index, array
        callbackFn(this[i], i, this);
    }
};

// TEST
// const arr = [1,2,3];

// console.log("myEach: ")
// arr.myEach( x => console.log(x) );

// console.log("forEach: ")
// arr.forEach( x => console.log(x) );

// MAP //
Array.prototype.myMap = function(callbackFn) {
// map((element) => { ... })
// map((element, index) => { ... })
// map((element, index, array) => { ... })
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr[i] = callbackFn(this[i], i, this) ;
    }
    return arr;
};

// TEST
// const exArr =['bibi', 'jhgfghj', 'kmijnuhb']

// console.log("myMap: ")

// console.log( exArr.myMap(function(callbackFn) {return callbackFn;}) )

// console.log("Map: ")
// console.log( exArr.map(function(callbackFn) {return callbackFn;}) )

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if( callbackFn(this[i], i, this) ) {
            arr[i] = this[i] ;
        }
    }
    return arr;
};

// TEST
// const exArr =['bibi', 'jhgfghj', 'kmijnuhb']

// console.log("myFilter: ")
// console.log( exArr.myFilter(function(callbackFn) {return callbackFn.length < 8;}) )

// console.log("Filter: ")
// console.log( exArr.filter(function(callbackFn) {return callbackFn.length < 8;}) )

// SOME //
Array.prototype.mySome = function(callbackFn) {
// some((element) => { ... } )
// some((element, index) => { ... } )
// some((element, index, array) => { ... } )
    for (let i = 0; i < this.length; i++) {
        if ( callbackFn(this[i], i, this) ) {
            return true;
        }
    }
    return false;
};
// TEST
// const exArr =['bibibibibibibib', 'jgj', 'kmijnuhjhgfdb']

// console.log("mySome: ")
// console.log( exArr.mySome(function(callbackFn) {return callbackFn.length < 8;}) )

// console.log("Some: ")
// console.log( exArr.some(function(callbackFn) {return callbackFn.length < 8;}) )

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
// every((element) => { ... } )
// every((element, index) => { ... } )
// every((element, index, array) => { ... } )
    for (let i = 0; i < this.length; i++) {
        if( !callbackFn(this[i], i, this) ) {
            return false;
        }
    }
    return true;
};

// TEST
// const exArr =['bibibibibibibib', 'jadsfasdfhgj', 'kmijnuhjhgfdb']

// console.log("mySome: ")
// console.log( exArr.mySome(function(callbackFn) {return callbackFn.length < 8;}) )

// console.log("Some: ")
// console.log( exArr.some(function(callbackFn) {return callbackFn.length < 8;}) )

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function(element, index) {
// includes(searchElement)
// includes(searchElement, fromIndex)
    // if fromIndex is not provided or equal to 0 start this way
    if (index === undefined || index === 0) {
        for (let i = 0; i < this.length; i++) {
            if ( this[i] === element ) {
                return true;
            }
        }
        return false +1;
    }
    // if fromIndex is provided
    else {
        // for fromIndex greater than array lengther
        if (index > this.length) {
            return false+2;
        }
        // for positive fromIndex and not greater than array length
        else if ( index > 0 ) {
            for ( let i = index; i < index.length; i++) {
                if ( this[i] === element) {
                    return true;
                }
            }
            return false+3;
        }
        // for negative fromIndex and greater than array length
        else if ( index + this.length <= 0) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === element) {
                    return true;
                }
            }
            return false+4;
        }
        // for negtive fromIndex within array length
        else {
            for (let i = index; i < 0; i++) {
                if (this[i] === element) {
                    return true;
                }
            }
            return false+5;
        }
    }
};
// // old one
//     if (index !== undefined) {
//         for (let i = index; i < this.length; i++) {
//             if ( this[i] === element ) 
//                 return true;
//         }
//     }
//     else
//         for (let i = 0; i < this.length; i++) {
//             if( this[i] === element ) {
//                 return true ;
//             }
//         }
//     return false;
//};

// TEST
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, NaN];
// const arr3 = ["1", "2", "3"];
// const arr4 = ['a', 'b', 'c'];

// // reg examples
// console.log(arr1.myIncludes(2))         // true
// console.log(arr1.myIncludes(4))         // false
// console.log(arr1.myIncludes(3, 3))      // false
// console.log(arr1.myIncludes(3, -1))     // true     error
// console.log(arr2.myIncludes(NaN))       // true     error
// console.log(arr3.myIncludes(3))         // false
// console.log('........')
// // fromIndex is greater than or equal to the array length
// console.log(arr4.myIncludes('c', 3))    // false
// console.log(arr4.myIncludes('c', 100))  // false
// console.log('........')
// // Computed index is negative
// console.log(arr4.myIncludes('a', -100)) // true
// console.log(arr4.myIncludes('b', -100)) // true
// console.log(arr4.myIncludes('c', -100)) // true
// console.log(arr4.myIncludes('a', -2))   // false    

// INDEXOF //
Array.prototype.myIndexOf = function(element, index) {
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
    // for no index or index at 0
    if (index === undefined || index === 0) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) {
                return i;
            }
        }
        return -1;
    }
    else {
        // search starts front to back so index >= array.length will not be searched
        if (index >= this.length) {
            return -1;
        }
        else if (index < 0) {
            for (let i = (index + this.length); i < 0; i++) {
                if (this[i] === element) {
                    return i;
                }
            }
        }
        else {
            return -1;
        }
    }
};

// TEST
// const exArr = [1, 2, 3];
// console.log(exArr.indexOf(3));    
// console.log(exArr.indexOf(5));    
// console.log(exArr.indexOf(1, 2));  
// console.log(exArr.indexOf(1, 0));
// console.log("------------")
// console.log(exArr.myIndexOf(3));    
// console.log(exArr.myIndexOf(5));    
// console.log(exArr.myIndexOf(1, 2));  
// console.log(exArr.myIndexOf(1, 0));

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0
    let length = this.length;
    //args = [4,5,6]
    //last element of 'this' is at length-1
    for( let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// TEST
// var arr = [1,2,3];
// console.log(arr.myPush(4,5,6)); // 6
// console.log(arr)                // [1, 2, 3, 4, 5, 6]

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(element, index) {
    // searchElement
    // searchElement, fromIndex
    if (index === undefined) {
        for (let i = this.length - 1; i > -1 ; i--) {
            if (this[i] === element) {
                return i;
            }
        }
        return -1;
    }
    else {
        // index >= array.length, the whole array is searched backwards
        if (index >= this.length) {
            for (let i = index; i >= 0; i--) {
                if (this[i] === element) {
                    return i;
                }
            }
            return -1;
        }
        // positive index
        else if (index > 0) {
            for (let i = index; i >= 0; i--) {
                if (this[i] === element) {
                    return i;
                }
            }
        }
        // negative index, array is still searched backwards
        else if (index < 0) {
            for (let i = -1; i > index; i++) { 
                if (this[i] === element) {
                    return i;
                }
            }
            return -1;
        }
        else 
            return -1;
    }
};

// TEST
// var numbers = [2, 5, 9, 2];
// console.log(numbers.lastIndexOf(2));     // 3
// console.log(numbers.lastIndexOf(7));     // -1
// console.log(numbers.lastIndexOf(2, 3));  // 3
// console.log(numbers.lastIndexOf(2, 2));  // 0
// console.log(numbers.lastIndexOf(2, -2)); // 0
// console.log(numbers.lastIndexOf(2, -1)); // 3
// console.log('--------')
// console.log(numbers.myLastIndexOf(2));     // 3
// console.log(numbers.myLastIndexOf(7));     // -1
// console.log(numbers.myLastIndexOf(2, 3));  // 3
// console.log(numbers.myLastIndexOf(2, 2));  // 0
// console.log(numbers.myLastIndexOf(2, -2)); // 0
// console.log(numbers.myLastIndexOf(2, -1)); // 3

// KEYS //
// Object.grabKeys = function(obj) {
//     // skips holes 
//     var key_arr = [];
//     for (let key in obj) {
//         if (key ===  undefined) 
//             continue;
//         else
//             key_arr.push(key);
//     }
//     return key_arr; 
// };

Object.grabKeys = function(obj) {
// Object.keys(obj)
    var key_arr = [];   

    for (const [key, value] of Object.entries(obj)) {
        if (key ===  undefined) 
            key_arr.push(indexOf(key))  // simple array
        else
            key_arr.push(key)          // key:value object
    }
    return key_arr; 
};
// // TEST
// const notArr1 = 'asdf'
// const notArr2 = 1234
// const arr1 = {a: 1, b: 2, c: 3};
// const arr2 = ['a', 'b', 'c'];

// console.log( Object.grabKeys(notArr1) );    // [ '0', '1', '2', '3' ]
// console.log( Object.grabKeys(notArr2) );    // []
// console.log( Object.grabKeys(arr1) );       // [ 'a', 'b', 'c' ]
// console.log( Object.grabKeys(arr2) );       // [ '0', '1', '2' ]

// VALUES //
Object.grabValues = function(obj) {
// Object.values(obj)
    var obj_arr = [];
    // check if value is an object
    // if (typeof obj !== 'object') {
    //     return 'TypeError: Not an object'
    // }
    for (const [key, value] of Object.entries(obj)) {
        if (key ===  undefined)     // simple array
            obj_arr.push(value)
        else                        // key:value object
            obj_arr.push(obj);
    }
    return obj_arr;
};
// TEST
const notArr1 = 'asdf'
const notArr2 = 1234
const arr1 = {a: 1, b: 2, c: 3};
const arr2 = ['a', 'b', 'c'];

console.log( Object.values(notArr1) );
console.log( Object.values(notArr2) );
console.log( Object.values(arr1) );
console.log( Object.values(arr2) );
console.log( '---------------------')
console.log( Object.grabValues(notArr1) );
console.log( Object.grabValues(notArr2) );
console.log( Object.grabValues(arr1) );
console.log( Object.grabValues(arr2) );