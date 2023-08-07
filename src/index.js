module.exports = function check(str, bracketsConfig) {
  // your solution
  //   if (str.length % 2 != 0) {
//     return false;
//   };

// bracketsConfig = []
//   for (const el of str.split('')) {
//     switch (el) {
//         case '(':
//             bracketsConfig.push(1) ;
//             break;
//         case '[':
//             bracketsConfig.push(2);
//             break;
//         case '{':
//             bracketsConfig.push(3);
//             break;
//         case '}':
//             if (bracketsConfig[bracketsConfig.length - 1] != 3) return false;
//             bracketsConfig.pop();
//             break;
//         case ']':
//             if (bracketsConfig[bracketsConfig.length - 1] != 2) return false;
//             bracketsConfig.pop();
//             break;
//         case ')':
//             if (bracketsConfig[bracketsConfig.length - 1] != 1) return false;
//             bracketsConfig.pop();
//             break;
//         default:
//             break;
//       }
//   }

  // return bracketsConfig.length === 0;
  const pairs = new Map(bracketsConfig); 
  const stack = []; 
  for (let item of str) { 
    if (pairs.get(stack.at(-1)) == item) { 
      stack.pop(); 
    } else { 
      stack.push(item); 
    }
  }
  return stack.length == 0;
}
