var button = document.getElementById('button1');
var classNames=['red','pink','green','lime','yellow'];
var index=0;

button.addEventListener('click', function(event){
    for (var i=0, n=classNames.length; i<n; i++){
        button.classList.remove(classNames[i]);
    }
    var classToAdd= classNames[index];
    button.classList.add(classToAdd);
    index++;
    if (index>classNames.length-1){
        index=0;
    }
}); 
