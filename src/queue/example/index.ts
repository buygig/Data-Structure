import Deque from '../deque'
import Queue from '../queue'
interface Potato {
  eliminated: string[],
  winner: string
}


/**
 * 击鼓传花游戏
 * @param nameList 
 * @param num 
 * @returns Potato
 */

function hotPotato(nameList: string[], num: number): Potato {
  const queue = new Queue<string>()
  const eliminatedList: string[] = []

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      const player = queue.dequeue()
      if (player) queue.enqueue(player)
    }
    const eliminated = queue.dequeue()
    if (eliminated) eliminatedList.push(eliminated)
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue() || ""
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 9);

console.log(result);


/**
 * 回文检测
 * @param str 
 * @returns boolean
 */

function palindromeChecker(str: string): boolean {
  if (str === undefined || str === null) return false;
  if (str.length === 0) return true;

  const deque = new Deque<string>();
  const lowerStr = str.toLowerCase().split(' ').join('');
  let isEqual = true
  for (let i = 0; i < lowerStr.length; i++) {
    deque.addFront(lowerStr[i]);
  }

  let first: string | undefined
  let last: string | undefined
  while (deque.size() > 1 && isEqual) {
    first = deque.removeFront();
    last = deque.removeBack();
    if (first !== last) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
console.log('Hello world', palindromeChecker('Hello world'));