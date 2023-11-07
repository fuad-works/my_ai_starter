// الوزن والانحراف
let weights = [Math.random(), Math.random()];
let bias = Math.random();

// وظيفة الإشارة
function sign(x) {
  return x >= 0 ? 1 : -1;
}

// الوظيفة الخطية
function linearFunction(input) {
  return input[0] * weights[0] + input[1] * weights[1] + bias;
}

// تدريب النموذج لعمل بسيط (وظيفة XOR)
for (let i = 0; i < 10000; i++) {
  let input = [Math.round(Math.random()), Math.round(Math.random())];
  let target = input[0] ^ input[1]; // XOR

  let output = sign(linearFunction(input));
  let error = target - output;

  // تحديث الوزن والانحراف
  weights[0] += error * input[0];
  weights[1] += error * input[1];
  bias += error;
}

// اختبار النموذج
console.log(sign(linearFunction([0, 0]))); // يجب أن يكون -1
console.log(sign(linearFunction([0, 1]))); // يجب أن يكون 1
console.log(sign(linearFunction([1, 0]))); // يجب أن يكون 1
console.log(sign(linearFunction([1, 1]))); // يجب أن يكون -1
