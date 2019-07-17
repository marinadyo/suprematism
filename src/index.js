import './styles/index.scss';

// Сохранаем DOM-элемент с именем класса '.artboard' в переменную artboard
var artboard = document.querySelector('.artboard');

// Сохраняем все элементы с именем класса '.artboard__figure', которые мы нашли в artboard
// и сохраняем их в массив figures
var figures = artboard.querySelectorAll('.artboard__figure');

// Получаем ширину DOM-элемента artboard из его свойства,
// которое называется offsetWidth
var artboardWidth = artboard.offsetWidth;

// Высчитываем половину ширины artboarda
var halfArtboardWidth = artboardWidth / 2;

// Функция onMouseMove, которая вызывается при каждом движении мыши,
// т.е. при срабатывании события 'mousemove'
var onMouseMove = function(event) {
  // Из параметра event, который передается джаваскриптом при каждом
  // срабатывании события 'mousemove'
  // мы получаем координату мышки по горизонтали относительно artboard
  // и из этой величины вычисляем положеие мышки относительно
  // середины artboard
  var mouseXRelatingToArtboardCenter = event.x - halfArtboardWidth;

  // Ниже мы описываем цикл, который пробегается по массиву с фигурами
  // и двигает каждую фигуру относительно положения мыши
  for (var i = 0; i < figures.length; i++ ) {
    // сохраняем в переменную currentElement текущий элемент массива figures
    var currentElement = figures[i];

    // Сохраняем в переменную xRange значение атрибута 'data-x-range'
    // каждого элемента фигуры (диапазон смещения фигуры)
    var xRange = currentElement.getAttribute('data-x-range');

    // Вычислаем половину xRange
    var halfRangeX = xRange / 2;

    // Вычисляем соотношение половины диапазона смещения фигуры
    var ratio = halfRangeX / halfArtboardWidth;

    // Вычисляем смещение фигуры
    var shiftX = mouseXRelatingToArtboardCenter * ratio;

    // Сохрраняем смещение фигуры в ее css-свойство margin-left
    currentElement.style = `margin-left: ${shiftX}px`;
  }
};

// На DOM-элементе artboard с помощью метода addEventListener
// мы регистрируем слушателя события 'mousemove',
// которое обеспечивает реагирование на движение мыши по артборду.
// При каждом движении срабатывает функция обратного вызова(callback)
// с именем onMouseMove
artboard.addEventListener('mousemove', onMouseMove);

//
