// const itemsCategory = document.querySelectorAll('.item');
// console.log(`Number of categories: ${itemsCategory.length}`);

// itemsCategory.forEach(item => {
//     console.log(`Categories: ${item.querySelector('h2').textContent}`) ;
//     console.log(`Elements: ${item.querySelectorAll('li').length}`)
// });

const categories = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    console.log(`Categories: ${item.firstElementChild.textContent}` );
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});


