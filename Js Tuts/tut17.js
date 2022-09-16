console.log("tutorial 17 on Events");

document.getElementById('heading').addEventListener('mouseover',function(e){
    console.log('clicked Heading');
    // location.href = '//codewithharry.com';

    let vari = e.target;
    // vari = vari.className;
    vari = vari.classList;
    // vari = e.target.id;

    // vari = Array.from(e.target.classList);
    // vari = e.offsetX;    
    // vari = e.offsetY;
    // vari = e.clientX;
    // vari = e.clientY;


    console.log(vari);

});