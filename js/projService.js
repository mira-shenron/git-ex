'use strict';

var gProjs = [
    {
        id: "mineSweeper",
        name: "Mine Sweeper",
        title: "Mine Sweeper Game",
        desc: "Very special Mine Sweeper",
        url: "https://mira-shenron.github.io/mineSweeper/",
        publishedAt: 1448693940000,
        labels: ['Mines', 'War', 'Game'],
        imgUrl : 'img/portfolio/minesweeper.jpg'
    },
    {
        id: "inPicure",
        name: "In Picture",
        title: "In Picture Game",
        desc: "Answer questions about the pictures",
        url: "",
        publishedAt: 1448693940000,
        labels: ['Game', 'Guess', 'Picture'],
        imgUrl : 'img/portfolio/inPicture.jpg'
    },
    {
        id: "touchNums",
        name: "Touch Nums",
        title: "Touch Nums Game",
        desc: "Touch all nums as fast as you can",
        url: "",
        publishedAt: 1448693940000,
        labels: ['Game', 'Numbers'],
        imgUrl : 'img/portfolio/touchNums2.jpg'
    },
    {
        id: "chess",
        name: "Chess",
        title: "Chess Game",
        desc: "It`s Chess Time",
        url: "",
        publishedAt: 1448693940000,
        labels: ['Game', 'Chess', 'Think'],
        imgUrl : 'img/portfolio/chess2.jpg'
    },
    {
        id: "bookShop",
        name: "Book Shop",
        title: "Book Shop App",
        desc: "Use it to manage a book shop",
        url: "",
        publishedAt: 1448693940000,
        labels: ['Book', 'Management App', 'Shop'],
        imgUrl : 'img/portfolio/bookshop.jpg'
    },
    {
        id: "ballBoard",
        name: "Ball Board",
        title: "Ball Board Game",
        desc: "Collect all balls",
        url: "",
        publishedAt: 1448693940000,
        labels: ['Game', 'Ball', 'Board'],
        imgUrl : 'img/portfolio/ball.jpg'
    }
];

function getGProjs(){
    return gProjs;
}

function getProjById(projId){
    var proj = gProjs.find(proj => proj.id === projId);
    return proj;
}
