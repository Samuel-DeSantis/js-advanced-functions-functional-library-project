function standardizeInput (collection) {return collection instanceof Array ? collection.slice() : Object.values(collection)}

function myEach (collection, callback) {
    let newCollection = standardizeInput(collection)

    for ( let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

function myMap (collection, callback) {
    let newCollection = standardizeInput(collection)
    let newArray = []

    for ( let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]))
    }
    return newArray
}

function myReduce (collection, callback, acc) {
    let newCollection = standardizeInput(collection)
    
    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    for ( let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind (collection, predicate) {
    let newCollection = standardizeInput(collection)

    for ( let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) return newCollection[i] 
    }
    return undefined
}

function myFilter (collection, predicate) {
    let newCollection = standardizeInput(collection)
    let newArray = []

    for ( let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) newArray.push(newCollection[i])
    }
    return newArray
}

function mySize (collection) {
    let newCollection = standardizeInput(collection)
    return newCollection.length
}

function myFirst (array, stop = false) {return stop ? array.slice(0, stop) : array[0]}

function myLast (array, start = false) {return start ? array.slice(array.length - start, array.length) : array[array.length - 1]}

function mySortBy () {}

function myFlatten () {}

function myKeys (object) {return Object.keys(object)}

function myValues (object) {return standardizeInput(object)}