canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_x = 10;
car1_y = 10;
car2_x = 20;
car2_y = 20;
car_width = 100;
car_height = 90;

background_img = "racingground.jpeg";
car1_img = "car1.png";
car2_img = "car2.png";

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground();
    background_imgtag.src = background_img;

    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1();
    car1_imgtag.src = car1_img;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2();
    car2_imgtag.src = car2_img;

}

function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {    
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car_width, car_height);
}
function uploadcar2() {    
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car_width, car_height);
}