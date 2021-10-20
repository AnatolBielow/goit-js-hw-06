const itemsCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsCategory.length}`);

itemsCategory.forEach(item => {
    console.log(`Categories: ${item.querySelector('h2').textContent}`) ;
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
});
