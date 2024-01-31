const containerNode = document.querySelector(".img_container")

// containerNode.addEventListener("click", () => {
//     //проверка на наличие класса "clicked"
//     if (containerNode.classList.contains("clicked")) {
//         containerNode.classList.remove("clicked")
//     } else {
//         containerNode.classList.add("clicked")
//     }
// })

containerNode.addEventListener("click", () => {
    //toggle - проверка на наличие класса "clicked"
    containerNode.classList.toggle("clicked")
})



// получение NodeList из картинок по селекту
const imagesNodeList = document.querySelectorAll(".small img");
console.log(imagesNodeList);

/* imagesNodeList.forEach(imgNode => {
    console.log(imgNode);
}) */

// берем элемент добавляем ему обработчик события "клик", когда кликнут на элемент выполнится событие
/* imagesNodeList.forEach(ingNode => {
        ingNode.addEventListener('click', () => {
            console.log("click!");
        })
    }) */

   /*  при нажатии считывает адрес картинки (ссылку) */

  /*  подставляется ссылка объекта */

    imagesNodeList.forEach(imgNode =>{
        imgNode.addEventListener('click', event =>{
            console.log(event.target.src);

            const bigNode = document.querySelector('.big')
            bigNode.src = event.target.src;

            // процесс удаления селекта у всех элементов
            imagesNodeList.forEach(elem => elem.classList.remove('selected'));

            event.target.classList.add('selected'); // добавляем новый класс (которы модифицируем в CSS)
        })
    })