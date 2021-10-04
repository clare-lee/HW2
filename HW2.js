
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
Array.prototype.myReduce = function(callbackFn) {
// reduce((previousValue, currentValue) => { ... } )
// reduce((previousValue, currentValue, currentIndex) => { ... } )
// reduce((previousValue, currentValue, currentIndex, array) => { ... } )
// reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
    for (let i = 0; i < this.length; i++) {
        initialVal = callbackFn(this[i-1], this[i], i, this)
    }
    return initialVal;
    
};
// TEST
// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// console.log(array1.reduce(reducer));    // 1 + 2 + 3 + 4 =1 0
// console.log(array1.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4 = 15

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
        return false;
    }
    // if fromIndex is provided
    else {
        // for fromIndex greater than array length
        if (index > this.length) {
            return false;
        }
        // for positive fromIndex 
        else if ( index > 0 ) {
            for ( let i = index; i < index.length; i++) {
                if ( this[i] === element) {
                    return true;
                }
            }
            return false;
        }
        // for negative fromIndex 
        else {
            for (let i = (index + this.length); i < this.length; i++) {
                if (this[i] === element) {
                    return true;
                }
            }
            return false;
        }
    }
};
// TEST
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, NaN];
// const arr3 = ["1", "2", "3"];
// const arr4 = ['a', 'b', 'c'];

// // reg examples
// console.log(arr1.myIncludes(2))         // true
// console.log(arr1.myIncludes(4))         // false
// console.log(arr1.myIncludes(3, 3))      // false
// console.log(arr1.myIncludes(3, -1))     // true     
// console.log(arr2.myIncludes(NaN))       // true     error Can't seem to fix this no matter what
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

    // if fromIndex is not provide or is equal to 0
    if (index === undefined || index === 0) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) {
                return i;
            }
        }
        return -1;
    }
    else {
        // if fromIndex is greater than or equal to array length 
        if (index >= this.length) {
            return -1;
        }
        // if fromIndex is positive
        else if (index > 0) {
            for (let i = index; i < this.length; i++) {
                if (this[i] === element) {
                    return i;
                }
            }
            return -1;
        }
        // if from index is negative
        else (index < 0) ;{
            for (let i = (index + this.length); i <= 0; i++) {
                if (this[i] === element) {
                    return i;
                }
            }
        }
        return -1;

    }
};
// TEST
// const arr = [2, 9, 9];
// console.log(arr.myIndexOf(2));     // 0
// console.log(arr.myIndexOf(7));     // -1
// console.log(arr.myIndexOf(9, 2));  // 2
// console.log(arr.myIndexOf(2, -1)); // -1
// console.log(arr.myIndexOf(2, -3)); // 0

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
// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)

    // if fromIndex is not provided or is greater than array length, search whole array starting from the back
    if (index === undefined || index >= this.length) {
        // search backwards
        for (let i = this.length - 1; i > -1 ; i--) {
            if (this[i] === element) {
                return i;
            }
        }
        return -1;
    }
    else {
        // if fromIndex is positive but not greater than or equal to array length
        if (index >= 0) {
            for (let i = index; i >= 0; i--) {
                if (this[i] === element) {
                    return i;
                }
            }
            return -1;
        }
        // if fromIndex is negative, array is still searched backwards
        else {
            for (let i = (index + this.length); i >= 0; i--) { 
                //console.log(i)
                if (this[i] === element) {
                    return i;
                }
            }
            return -1;
        }
    }
};
// TEST
// const arr1 = [2, 5, 9, 2];
// console.log(arr1.myLastIndexOf(2));         // 3
// console.log(arr1.myLastIndexOf(7));         // -1
// console.log(arr1.myLastIndexOf(2, 3));      // 3
// console.log(arr1.myLastIndexOf(2, 2));      // 0
// console.log(arr1.myLastIndexOf(2, -2));     // 0
// console.log(arr1.myLastIndexOf(2, -1));     // 3

// KEYS //
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
// TEST
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

    for (const [key, value] of Object.entries(obj)) {
        if (key ===  undefined)     // simple array
            obj_arr.push(value);
        else                        // key:value object
            obj_arr.push(value);
    }
    return obj_arr;
};
// TEST
// const notArr1 = 'asdf'
// const notArr2 = 1234
// const arr1 = {a: 1, b: 2, c: 3};
// const arr2 = ['a', 'b', 'c'];

// console.log( Object.grabValues(notArr1) );  // [ 'a', 's', 'd', 'f' ]
// console.log( Object.grabValues(notArr2) );  // []
// console.log( Object.grabValues(arr1) );     // [ 1, 2, 3 ]
// console.log( Object.grabValues(arr2) );     // [ 'a', 'b', 'c' ]