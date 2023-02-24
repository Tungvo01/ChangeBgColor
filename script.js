var index = 0;

var changeBgColor = function handleClick(){
    var color = ['red', 'blue', 'green', 'brown', 'orange']
    document.getElementsByTagName("body")[0].style.background = color[index++];
    if(index > color.length - 1){
        index = 0;
    }
}