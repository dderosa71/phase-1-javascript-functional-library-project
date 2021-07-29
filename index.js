const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      if (Array.isArray(collection)) {
        for (let x = 0; x < collection.length; x++) {
          callback(collection[x], x, collection)
        }
        return collection
      }
      else {
        for (let item in collection) {
          callback(collection[item], item, collection)
        }
        return collection
      }

    },

    map: function (collection, callback) {
      if (Array.isArray(collection)) {
        let finalArray = [];
        for (let x = 0; x < collection.length; x++) {
          finalArray.push(callback(collection[x], x, collection))
        }
        return finalArray
      }
      else {
        let finalObject = [];
        for (let item in collection) {
          finalObject.push(callback(collection[item], item, collection))
        }
        return finalObject
      }

    },

    reduce: function (collection, callback, accumulator) {
      if (!accumulator) {
        accumulator = collection[0]
        collection = collection.slice(1)
      }
      for (let x = 0; x < collection.length; x++) {
        accumulator = callback(accumulator, collection[x], collection)
      }
      return accumulator
    },

    find: function (collection, predicate) {
      for (let x = 0; x < collection.length; x++) {
        let key = Object.keys(collection)[x];
        if (predicate(collection[key])) {
          return collection[key]
        }
      }
    },

    filter: function (collection, predicate) {
      let newArray = [];
      for (let x = 0; x < collection.length; x++) {
        let key = Object.keys(collection)[x];
        if (predicate(collection[key])) {
          newArray.push(collection[key])
        }
      }
      return newArray
    },

    size: function (collection) {
      let sizeArray = Array.isArray(collection) ? collection : Object.keys(collection)
      return sizeArray.length
    },

    first: function (array, n) {
      return n ? array.slice(0, n) : array[0];
    },

    last: function (array, n) {
      return n ? array.slice(array.length - n) : array[array.length - 1];
    },

    compact: function (array) {
      let newArray = []
      for (let item of array) {
        if (item) {
          newArray.push(item)
        }
      }
      return newArray
    },

    sortBy: function (array, callback) {
      return array.sort((a, b) => callback(a) - callback(b))
    },



    uniq: function (array) {
      let newArray = [];
      for (let item of array) {
        if (newArray.find(element => element === item)) {
          newArray.push(item)
        }
      }
      return newArray
    },

    functions: function () {

    },


  }
})()

fi.libraryMethod()




