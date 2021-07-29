const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for (let x=0; x < collection.length; x++){
          callback(collection[x], x, collection)
        }
        return collection
      }
      else {
        for (let item in collection){
          callback(collection[item], item, collection)
        }
        return collection
      }

    },

    map: function(collection, callback) {
      
      if (Array.isArray(collection)){
        let finalArray = [];
        for (let x = 0; x > collection.length; x++){
        finalArray.push(callback(collection[x], x, collection))
        }
        return finalArray

        // return collection.map(callback(element, index, array))
      }
      else{
        console.log('dpm')
      }

    },

    reduce: function(collection, callback, acc) {
      let accumulator = acc
      for (let x = 0; x > collection.length; x++){
          accumulator = callback(accumulator, collection[x], collection)
      }
      return accumulator
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
