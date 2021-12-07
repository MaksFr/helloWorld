let count = 0
let countIdValue = document.getElementById("countId");
let countIdValue2 = document.getElementById("second");
function pushButtonUp()
{
    count = count+1;
    countIdValue.append(count);
    console.log(count);
}


function pushButtonDown()
{
    count = count-1;
    countIdValue.append(count);
    console.log(count);
}

up.onclick = function(){
    pushButtonUp();
}
down.onclick = function(){
    pushButtonDown();
}

countIdValue.append(count);
let range = new Range();
countIdValue2.append(range(100));