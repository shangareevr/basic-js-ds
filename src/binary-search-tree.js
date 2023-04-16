const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootElem = null;
  }
  root() {
    return this.rootElem;
  }

  add(data) {
    this.rootElem = addElem(this.rootElem, data);
    function addElem(elem, data) {
      // проверяем есть ли корневой узел
    if (!elem) {
      // если нет то добавляемый узел становится корневым узлом
      return new Node(data);
    }
    // исключаем случай когда доавляемый элемент равен элементу в дереве
    if (elem.data === data) {
      return elem;
    }
    // если текущее значение меньше добавляемого значения
    if (data > elem.data) {
      // запускаем функцию добавления в правую ветку
      elem.right = addElem(elem.right, data)
      // иначе добавляем в левую ветку
    } else {
      elem.left = addElem (elem.left, data)
    }
    return elem;
    }
  }

  has(data) {
    // получим текущее значение
    let currentElem = this.rootElem;
    // пока есть текущее значение прогоняем цикл
    while(currentElem) {
      // если текущий элемент равен искомому то возвращаем true, иначе сравниваем значения
      if (currentElem.data === data) {
        return true;
        // в зависимости от значения ищем в правой или левой ветке
      } else if (currentElem.data > data) {
        currentElem = currentElem.left;
      } else {
        currentElem = currentElem.right
      }
    }
      return false;
  }

  find(data) {
    function findElem (elem, data) {
      // проверка наличия элемента 
      if (!elem) {
        return null;
      }
      // если значения равны то возвращаем значение
      if (elem.data === data) {
        return elem;
      }
      // сравниваем искомое значение с текущим значением и продолжаем поиск по левой или правой ветке
      if (elem.data > data) {
        return findElem (elem.left, data);
      } else {
        return findElem (elem.right, data);
      }
    }
    return findElem (this.rootElem, data);
    // решение аналогично с поиском узла, только возвращаем значение узла
  }

  remove(data) {
    this.root = removeElem(this.rootElem, data);
    function removeElem (elem, data) {
      // проверка наличия элемента 
      if (!elem) {
        return null;
      }
      // находил узел узел со значением которое надо удалить
      if (data === elem.data) {
        // удаление листового элемента т.е без дочерних элементов
        if(elem.left === null && elem.right === null) {
          return null;
        }
        // если есть только один дочерный элемент то обнавляем elem этим элементом
        if (elem.right === null) {
          return elem.left;
        }
        if (elem.left === null) {
          return elem.right;
        }
        // если несколько дочерних элементов то надо удаляемый элемент заменить на минимальное значение из ветки правого дочернего элемента
        // получаем значение правого дочерного элемента
        let tempRight = elem.right;
        // повторяем пока есть левый дочерний элемент
        while (tempRight.left) {
          // заменяем значение правого дочернего элемента на значение левого потомка
          tempRight = tempRight.left;
          // получаем минимальное значение из правой ветки
        }
        // заменяем значение на минимальное значение из правой ветки
        elem.data = tempRight.data;
        // удаляем элементы из правой ветки 
        elem.right = removeElem(elem.right, tempRight.data);
        return elem;
      } else if (data < elem.data) {
        // удаляем элементы из левой половины
        elem.left = removeElem(elem.left, data);
        return elem;
      } else {
        // удаляем элементы из правой половины
        elem.right = removeElem(elem.right, data);
        return elem;
      }
    }
  }   

  min() {
    if(!this.rootElem) {
      return null;
    }
    let elem = this.rootElem;
    while (elem.left) {
      elem = elem.left;
    }
    return elem.data
  }

  max() {
    // if(!this.rootElem) {
    //   return null;
    // }
    let elem = this.rootElem;
    while (elem.right !== null) {
      elem = elem.right;
    }
    return elem.data
  }
}

module.exports = {
  BinarySearchTree
};