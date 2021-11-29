const tabItems = document.querySelectorAll('.tab-items');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item

function selectItem(e){
    removeBorder();
    removeShow();
    //add border t(o current tab
    this.classList.add('tab-border');
    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//listen for a tab click.

tabItems.forEach(item => item.addEventListener('click', selectItem));