// Given an integer x, return true if x is a palindrome and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const isPalindrome = (x) => {
    let strX = x.toString();
    let y = "";
    for (let i = strX.length - 1; i >= 0; i--) {
        y += strX[i];
    }
    // if (strX == y) {
    //     return true;
    // }
    // return false;

    return strX == y;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1001));
console.log(isPalindrome3(1234));
console.log(isPalindrome3(0));
console.log(isPalindrome3(10));

const isPalindrome2 = (x) => {
    let strX = x.toString();
    let left = 0;
    let right = strX.length - 1;
    for (let i = 0; i < Math.floor(strX.length / 2); i++) {
        if (strX[left] !== strX[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome2(121));
console.log(isPalindrome2(-121));
console.log(isPalindrome2(1001));
console.log(isPalindrome3(1234));
console.log(isPalindrome3(0));
console.log(isPalindrome3(10));

const isPalindrome3 = (x) => {
    if (x < 0) {
        return false;
    }

    let original = x;
    let reversed = 0;

    while (x > 0) {
        let lastDigit = x % 10;
        reversed = reversed * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
};

console.log(isPalindrome3(121));
console.log(isPalindrome3(-121));
console.log(isPalindrome3(1001));
console.log(isPalindrome3(1234));
console.log(isPalindrome3(0));
console.log(isPalindrome3(10));
