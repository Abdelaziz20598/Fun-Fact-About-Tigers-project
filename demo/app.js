// setting variables
const addMovie = document.getElementById('addMovie');
let Animal = {};
const container = document.getElementById("contentjs");

const postData = async ( url ='', data = {name, type})=>{
    console.log(data);
    const response = await fetch(url, {
        method:'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
    },
    //Body data type must match 'Content-Type' header
    body: JSON.stringify(data),
    });

    try {
        console.log("response data");
        const newData = await response.json();
        console.log("hello there is the data recieved", newData);
        return newData
    }catch(error){
        console.log("error", error);
    }
}
/*
const removeUi = (funFactDiv)=>{
    console.log('hi this is the data in app and removing');
    if(typeof(funFactDiv) != 'undefined' && funFactDiv != null){
        console.log(funFactDiv.id);
        console.log(typeof(funFactDiv));
        console.log(funFactDiv);
        funFactDiv.remove();
        //TigerImg.remove(); 
        
        }

}*/

const updatUi = async (url ='', container, divGenerate)=>{
    const request = await fetch(url, {
        method:'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    try{
        const allData = await request.json();
        console.log('hi this is the data in app', allData);
        allData.forEach(function(element, index){
            if (element.name ==="Tiger" || element.name ==="tiger" || element.name ==="Tigers" || element.name ==="tigers"){
                divGenerate = `<div id="funFactDiv">
                <p>
                ${allData[index].name} is ${allData[index].type} and look like they're wearing stripy orange pyjamas, but these cuddly carnivores are fast, strong, and dangerous hunters.
                If you ever meet one, RUN… and don't even think about inviting it over for tea! Read on for some fabulously fun tiger facts about these beautiful and ferocious giant cats — and we do mean giant.
                They’re the biggest cats in the world! And they’re not all orange.
                Did you know that the Bengal tiger is sometimes the colour of snow? Delve into more white tiger facts below.
                </p>
                <img src="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_full/77ic6i4qdj_Medium_WW226365.jpg" alt="Tigers" id="TigerImg"></div>
                `
                console.log("data after updating ", allData);
                container.innerHTML = divGenerate;
                const funFactDiv = document.getElementById("funFactDiv");
                //const TigerImg = document.getElementById("TigerImg");
            }
            else if( typeof(funFactDiv) != 'undefined' && funFactDiv != null){
                console.log('hi this is the data in app and removing');
                console.log(funFactDiv.id);
                console.log(typeof(funFactDiv));
                console.log(funFactDiv);
                funFactDiv.remove();
                //TigerImg.remove(); 
            }
           // allData.splice(index, 1);
             });
             //removeUi(funFactDiv); // function doesnt play will becaues i need else if , if the condition of updating (element.name = tiger) is not satisfied then the funFactDiv hasnot been created yet so it is = undefined so else if (funFactDiv != undefined) not satisfied it only satisfied if (funFactDiv != undefined) and the if above it (if element.name = tiger) is also not satified.
        }catch(error){
            console.log("error", error);
        }
    }



addMovie.onclick = function(){
    Animal.name = document.getElementById("aName").value;
    Animal.type = document.getElementById("tyl").value; //why 'type' should be the same name of id and same name of Animal.'type' if i change it it will cause error
    let divGenerate = "";
    (postData('/postall', Animal))
    .then(updatUi('/updatURL', container, divGenerate));

};






























// Async js
/*
setTimeout(()=>{
    console.log("Third");
}, 2000);
function sync(){
    console.log("First");
}

sync();

console.log("Second")*/
