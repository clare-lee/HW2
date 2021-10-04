
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
