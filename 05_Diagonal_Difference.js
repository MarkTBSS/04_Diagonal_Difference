function diagonalDifference(arr) {
    var n = arr.length; 
    var firstSum = 0;
    var secondSum = 0;
  
    for (var i = 0; i < n; i++) {
      firstSum += arr[i][i];
      secondSum += arr[i][n - 1 - i];
    }

    /* var difference = firstSum - secondSum; 
    var absoluteDifference = Math.abs(difference);
    return absoluteDifference; */
    
    var difference = firstSum - secondSum; 
    if (difference < 0) { return -difference }
    return difference;
}

var arr = [ [11,   2,   4],
            [ 4,   5,   6],
            [10,   8, -12]  ]
console.log(diagonalDifference(arr))

var arr2 = [
[-10, 3, 0, 5, -4],
[2, -1, 0, 2, -8],
[9, -2, -5, 6, 0],
[9, -7, 4, 8, -2],
[3, 7, 8, -5, 0]]
console.log(diagonalDifference(arr2))