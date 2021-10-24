document.addEventListener("DOMContentLoaded", function () {
    let ComplT = parseInt(document.getElementById('ComplNumb').innerHTML);
    let OpenT = parseInt(document.getElementById('TaskNumb').innerHTML);
    document.getElementById('ComplTs').onclick = function () {
        let sumbit = confirm("Are you sure you want to change the number of tasks?");
        if (sumbit == true && OpenT > 0){
        ComplT++
        OpenT--
        document.getElementById('ComplNumb').innerHTML = ComplT;
        document.getElementById('TaskNumb').innerHTML = OpenT;
    }
            }


    let images = ["img/Picture.png","img/Picture.png","img/Picture.png","img/Picture.png"]
    images.forEach(function (element, index) {
        let pict = document.createElement('img');
        pict.weight = '100';
        pict.height = '100';
        pict.src = element;
        document.getElementById('pict').appendChild(pict);
        pict.onclick = function (){
            document.getElementById('NtNumb').innerHTML = index;
        }
    })
})