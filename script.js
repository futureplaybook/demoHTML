// function loadHTML(fileName){
//     fetch(fileName + '.html')
//     .then(response=> response.text())
//     .then(text=> document.getElementById('content').innerHTML = text);
//   }

function loadHTML(fileName) {
    $("#content").load(fileName + ".html");
};



