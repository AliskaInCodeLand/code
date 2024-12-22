function getFunc() {
  let value = "test";

  let func = new Function("alert(value)");

  return func;
}

getFunc()(); // ошибка: value не определено

function getFunc() {
  let value = "test";

  let func = function () {
    alert(value);
  };

  return func;
}

getFunc()(); // "test", из лексического окружения функции getFunc

// вывод
alert(obj);

// используем объект в качестве ключа
anotherObj[obj] = 123;
