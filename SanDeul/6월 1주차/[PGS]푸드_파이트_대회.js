// food	result
// [1, 3, 4, 6]	"1223330333221"
// [1, 7, 1, 2]	"111303111"

function solution(food) {
  let result = [];

  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 !== 0) food[i] = food[i] - 1;
    if (food[i] !== 0) result.push((i + "").repeat(food[i] / 2));
  }

  return result.join("") + "0" + result.reverse().join("");
}

// 테스트 1 〉	통과 (0.09ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.6MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.6MB)
// 테스트 8 〉	통과 (0.07ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.5MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.07ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.4MB)
// 테스트 14 〉	통과 (0.06ms, 33.6MB)
// 테스트 15 〉	통과 (0.06ms, 33.4MB)
// 테스트 16 〉	통과 (0.06ms, 33.5MB)
// 테스트 17 〉	통과 (0.07ms, 33.5MB)
// 테스트 18 〉	통과 (0.05ms, 33.4MB)
// 테스트 19 〉	통과 (0.05ms, 33.4MB)
// 테스트 20 〉	통과 (0.06ms, 33.4MB)
