const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function changeTabContent(e){
    reomveBorder();
    /* Change the border */
    this.classList.add('tab-border');
    /* Show Content */
    let index = findIndex(this , tabItems);
    removeContent(index);
    tabContentItems[index].classList.remove('hide-on-click');
    

}

function removeContent(index){
    tabContentItems.forEach(item => {
        if(item.index != index) {
            item.classList.add('hide-on-click');
        }
    }
    );
}


function reomveBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function findIndex(item , list){
    for(let i = 0 ; i < list.length ; i++){
        if(list[i] == item){
            return i;
        }else{
            console.log("Your Item is not found.");
        }
    }
}
tabItems.forEach(item => item.addEventListener('click' , changeTabContent));