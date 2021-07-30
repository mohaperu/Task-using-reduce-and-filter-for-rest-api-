var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data = JSON.parse(this.response);
    console.log(data);
    
    //Get all countries from asia continent/region using filter function
    var rdata = data.filter((ele)=>ele.region==='Asia');
    console.log(rdata);
    
    //Get all the countries with population of less than 2 lacs using filter function
    var rdata2 = data.filter((ele)=>ele.population<20000);
    console.log(rdata2);

    //print tht country which us US Dollars as currency
    var rdata3 = data.filter((ele)=>{
        for(let i in ele.currencies){
            if(ele.currencies[i].code==='USD'){
                return true
            }
        }
    });
    console.log(rdata3);

    //Print the sum of the population of the countries by using reduce function
    var rdata4 = data.reduce((acc,red)=>acc+red.population,0);
    console.log(rdata4);

}
