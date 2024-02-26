const isLessThanMaxSize = (checkedString, maxSize) => {
  return checkedString.length <= maxSize;
};


const isPalindrome = (checkedString) => {
  let normolizedString = checkedString.replaceAll(' ','').toLowerCase();
  let reverseString = normolizedString.split('').reverse().join('');
  return normolizedString === reverseString;
};


const getNumber = (checkedString) => {
  checkedString = checkedString.toString();
  let number = '';
  checkedString.split('').forEach(element => {
    if (!isNaN(element)){
      number += element;
    }
  });

  return parseInt(number.replaceAll(' ', ''));
};

