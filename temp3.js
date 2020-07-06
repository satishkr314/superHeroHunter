var GameName=document.getElementById('gameNam');

setInterval(function()
{
    GameName.style.color="red";
    //console.log("hello");
    
},500);
setInterval(function()
{
    GameName.style.color="white";
    //console.log("hello");
    
},1000);
function getHero()
{
    var xhrRequest=new XMLHttpRequest();
    document.getElementById('suggestionList').innerHTML="";
    xhrRequest.onload=function(){
        let responseJson=JSON.parse(xhrRequest.response);
        //console.log(responseJson);
        
        for(var i=0;i<responseJson.results.length;i++)
        {
            function saved()
            {
                localStorage.setItem('hero',name);
            }
            var imgUrl=responseJson.results[i].image.url;
            var img=document.createElement('img');
            img.setAttribute('src',imgUrl);
            var divimg=document.createElement('div');
            divimg.setAttribute("class","imga");
            var name=responseJson.results[i].name;
            var para=document.createElement('p');
            para.innerHTML=name;
            var button=document.createElement('button');
            button.innerHTML="Like";
            var divNB=document.createElement('div');
            divimg.appendChild(img);
            divNB.appendChild(para);
            divNB.appendChild(button);
            var button2=document.createElement('button');
            button2.innerHTML="Know More";
            button2.addEventListener('click',saved);
            var form=document.createElement('form');
            form.appendChild(button2);
            form.setAttribute('action','temp4.html')
            var finaldiv=document.createElement('div');
            finaldiv.setAttribute('class',"detail");
            finaldiv.appendChild(divimg);
            finaldiv.appendChild(divNB);
            finaldiv.appendChild(form);
            suggestionList.append(finaldiv);


        }

    }
    xhrRequest.open('get',"https://superheroapi.com/api.php/2397775803848130/search/"+inputHero.value,true);
    xhrRequest.send();
}
var inputHeroa=document.getElementById("inputHero");
inputHeroa.addEventListener('keyup',getHero);