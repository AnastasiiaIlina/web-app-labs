var canvas = document.querySelector('#cnvBars');
var ctx = canvas.getContext('2d');  // указываем в каком контексте мы работаем: в 2 или 3Д
canvas.width = 540;
canvas.height = 270;

const objSales = {
   'JAN': {
        'CHN':20,
        'USA': 40,
        'UK': 70
    },
    'FEB': {
        'CHN':40,
        'USA':30,
        'UK': 10
    },

    'MAR': {
        'CHN':15,
        'USA':20,
        'UK': 30
    },

    'APR': {
        'CHN':35,
        'USA':10,
        'UK': 40
    },

    'MAY': {
        'CHN':25,
        'USA':50,
        'UK': 25
    },

    'JUN': {
        'CHN':50,
        'USA':15,
        'UK': 50
    },

    'JUL': {
        'CHN':30,
        'USA':35,
        'UK': 15
    },

    'AUG': {
        'CHN':20,
        'USA':40,
        'UK': 30
    },
}
 let gridScale = 0;
 let scale = 3;
 let y = 240;
 while (gridScale < canvas.height) {
    
    ctx.beginPath();
    ctx.lineWidth = '1';
    ctx.strokeStyle = '#ebedf2';
    ctx.moveTo(0,y);// начальная точка линии
    ctx.lineTo(570,y); // вторая точка линии
    ctx.stroke(); // отрисовали линию
    gridScale +=20;
    y-=60
 } 

const drawBars = function(x, width, mounth) {
    bg = ['#9a55ff', '#fe9296', '#6bbaef'];
    const arrCountries = Object.values(objSales[mounth]); //[20,40,70]

    for (let i = 0; i<arrCountries.length; i++) {
        if  (arrCountries[i]) {
            ctx.fillStyle = bg[i];
            y = 270 -  scale*arrCountries[i] - 30; // 30 - it`s a padding
            ctx.fillRect(x, y, width, arrCountries[i]*scale); 
            x+=10;
        }
    }

    ctx.fillStyle = '#a5a8ae';
        ctx.fillText( mounth, x-28, 260);
}

const janBars = new drawBars(50, 5, 'JAN');
const febBars = new drawBars(110, 5, 'FEB');
const marBars = new drawBars(170, 5, 'MAR');
const aprBars = new drawBars(230, 5,'APR');
const mayBars = new drawBars(290, 5, 'MAY');
const junBars = new drawBars(350, 5, 'JUN');
const julBars = new drawBars(410, 5, 'JUL');
const augBars = new drawBars(470, 5, 'AUG');




