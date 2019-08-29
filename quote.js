const bcg = document.querySelector("body");
const btn=document.querySelector("#btn");
const author=document.querySelector('#authorname');
const quote=document.querySelector('#quote');

const quotes=[
    {
        name:"Coco Chanel",
        quote:"Success is most often achieved by those who don’t know that failure is inevitable."
    },
    {
        name:"Kanye West",
        quote:"I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness."
    },
    {
        name:"Tony Robbins",
        quote:"If you do what you’ve always done, you’ll get what you’ve always gotten."
    },
    {
        name:"Aristotle",
        quote:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
    },
    {
        name:"Lao Tzu",
        quote:"When I let go of what I am, I become what I might be."
    },
    {
        name:"Albert Einstein",
        quote:"I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself."
    },
    {
        quote:"You get what you settle for.",
        name:"Thelma and Louise"
    },
    {
        quote:"Only those who will risk going too far can possibly find out how far one can go.",
        name:"T. S. Eliot"
    },
    {
        quote:"Only those who play to win. Only those who risk to win. History favors risk-takers. Forgets the timid. Everything else is commentary.",
        name:"Iveta Cherneva"
    },
    {
        quote:"I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of Wow, I’m not really sure I can do this, and you push through those moments, that’s when you have a breakthrough.",
        name:"Marissa Mayer"
    }
];

const hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

btn.addEventListener("click",changeColor);
btn.addEventListener("click",changeQuote);

function changeColor(){
    let colors="#";
    for(i=0;i<6;i++){
        let random=Math.floor(Math.random()*hex.length);
        //console.log(random);
        colors+=hex[random];
        //console.log(colors);
    }
    bcg.style.backgroundColor=colors;
}

function changeQuote(){
    let number=Math.floor(Math.random()*quotes.length);
    author.innerHTML=quotes[number].name;
    quote.innerHTML=quotes[number].quote;
}