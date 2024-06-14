//List= javascript array
//math.random=returns a floating point
//math.floor= rounds a number 
//hasOwnProperty method = is a built-in function in JavaScript that is used to check whether
//  an object has a specific property as its own property, as opposed to inheriting 
// it from its prototype chain.

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    debugger
    this.map = {}; 
    this.list = []; 
};


RandomizedSet.prototype.insert = function(val) {
    debugger
    if (this.map.hasOwnProperty(val)) {
        return false; // Value already present
    }
    
    this.map[val] = this.list.length; // Store value-index pair in map
    this.list.push(val); // Add value to end of list
    return true; // Insertion successful
};


RandomizedSet.prototype.remove = function(val) {
    
    if (!this.map.hasOwnProperty(val)) {
        return false; 
    }
    
    //we we pop from middle then we have to shift elements it take o(n), so we will replace element 
    let index = this.map[val]; // Get index of val in list
    let lastElement = this.list[this.list.length - 1]; // Get last element in list
    
    // Move last element to the position of the element to delete
    this.list[index] = lastElement; 
    this.map[lastElement] = index; // Update index of lastElement in map
    
    this.list.pop(); // Remove last element from list
    delete this.map[val]; // Delete val from map
    return true; // Removal successful
};


RandomizedSet.prototype.getRandom = function() {
    debugger
    let randomIndex = Math.floor(Math.random() * this.list.length); // Generate random index
    return this.list[randomIndex]; // Return random element from list
};

// Example usage:
var obj = new RandomizedSet();
console.log(obj.insert(1)); // Output: true, [1] is inserted
console.log(obj.insert(2)); // Output: true, [1, 2] is inserted
console.log(obj.insert(1)); // Output: false, 1 is already present
console.log(obj.getRandom()); // Output: 1 or 2 (randomly selected)
console.log(obj.remove(1)); // Output: true, 1 is removed
