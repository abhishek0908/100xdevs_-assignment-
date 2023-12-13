/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(t);
      }, t);
    });
  }
  
  function wait2(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(t);
      }, t);
    });
  }
  
  function wait3(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(t);
      }, t);
    });
  }
  
  function calculateTime() {
    const startTime = Date.now();
  
    // Using Promise.all to wait for all promises to resolve
    return Promise.all([wait1(1000), wait2(2000), wait3(3000)])
      .then(() => {
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        return totalTime;
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  }
  
  module.exports = calculateTime;
  