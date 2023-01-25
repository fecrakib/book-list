const title=document.querySelector('#title');
const author=document.querySelector('#author');
const year=document.querySelector('#year');
const btn=document.querySelector('.btn');
const book=document.querySelector('#book-list');
btn.addEventListener('click',function(e){
    e.preventDefault();
   
    if(title.value==''){
        alert("enter book name");
    }
    else if(author.value==''){
        alert("Enter author name");
    }
    else if (year.value==''){
        alert("Enter year");
    }
    else {
        const newrow=document.createElement('tr');
        // creating new title
        const newtitle=document.createElement('th');

        newtitle.innerHTML=title.value;
       
        newrow.appendChild(newtitle);
        const newauthor=document.createElement('th');
        newauthor.innerHTML=author.value;
        newrow.appendChild(newauthor);
      
        const newyear=document.createElement('th');
        newyear.innerHTML=year.value;
        newrow.appendChild(newyear);
        
       book.appendChild(newrow);
    }

})
