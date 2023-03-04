function sum(a, b) {
    return a + b;
}

const increment = sum.bind(null, 1);
increment(1); // 2
