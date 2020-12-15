const balls = ['merah', 'merah', 'hijau', 'biru', 'merah', 'putih', 'biru'];

let counts = {};

for (let i = 0; i < balls.length; i++) {
   let value = balls[i];
    if (typeof counts[value] === "undefined") {
        counts[value] = 1;
    } else {
        counts[value]++;
    }
}

console.log(counts);