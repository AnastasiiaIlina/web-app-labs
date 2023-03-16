var canvas = document.querySelector('#cnvDonut');
var ctx = canvas.getContext('2d');  // указываем в каком контексте мы работаем: в 2 или 3Д
canvas.width = 350;
canvas.height = 175;
// отсчет градусов начинается справа
// ctx.arc(175, 85, 75, 0, 2*Math.PI*0.3, false);
// // ctx.arc(Х центра круга, У центра круга, radius,angle-start, angle-end, anticlockwise);
// ctx.stroke();
// ctx.fill(); //зарисует окружность цветом 
const xDonut = canvas.width/2;
const yDonut = canvas.height/2;
const drawArc = function(bg,share, start, end) {
    ctx.beginPath();
    ctx.lineWidth = '90';
    ctx.strokeStyle=bg;
    ctx.arc(xDonut, yDonut, 0.5 * xDonut/2-10, start, end, false);
    ctx.stroke();
}

const directClick = new drawArc('#44c8b7', 0.3, 0, 108*Math.PI/180);
const bookmarks = new drawArc('#fe7096', 0.4,  108*Math.PI/180, 108*Math.PI/180+144*Math.PI/180);
const  search = new drawArc('#63beee', 0.3, 108*Math.PI/180+144*Math.PI/180, 2*108*Math.PI/180+144*Math.PI/180);

ctx.beginPath();

ctx.fillStyle = '#fff';
ctx.arc(xDonut, yDonut, 35, 0, 2*Math.PI, false);
ctx.fill();


  

