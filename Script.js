var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')


form.addEventListener('submit' , addItem)

itemList.addEventListener('click' , removeItem)

filter.addEventListener('keyup', filterItem)

function addItem(e){

    e.preventDefault()
    
    var newItem = document.getElementById('item').value

    var li = document.createElement('li')

    li.className = 'list-group-item'

    li.appendChild(document.createTextNode(newItem))

    var delbtn = document.createElement('button')

    delbtn.className = 'btn btn-danger btn-sm float-right delete'

    delbtn.appendChild(document.createTextNode('X'))

    li.appendChild(delbtn)

    itemList.appendChild(li)
    
}



function removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?!')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }


}

function filterItem(e){
    var text = e.target.value.toLowerCase()
   var items = itemList.getElementsByTagName('li')
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent

    if(itemName.toLowerCase().indexOf(text) != -1 ){
        item.style.display = ' block'

    }else{
        item.style.display = 'none'
    }
   })
}