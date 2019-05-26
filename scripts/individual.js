window.onload=function(){
//process data
    var decode =  decodeURI(location.href);
    var url = decode.split("?");
    var paramter = url[1].split("=");
    name = paramter[1];
    color = new Array("#CCCCCC", "#CCCCFF", "#7744FF", "#A500CC", "#FF8800");
    document.getElementsByTagName("nav")[0].style.background = color[obj[name].cost-1];
    document.getElementById("card").style.border = "5px groove" + color[obj[name].cost-1];
    document.querySelector(".tabs").style.border = "2px dotted " + color[obj[name].cost-1];
    var imgLabel = document.getElementById("figure");
    imgLabel.alt = name;
    imgLabel.src = "../" + obj[name].image[0];
    document.getElementById("detail").innerHTML = obj[name].ability.description;
    var property = document.getElementsByName("property");
    for(var i=0;i<obj[name].nature.length;i++)
        property[i].innerHTML = obj[name].nature[i];
    index = 0;
    updateData();
}
updateData=function(){
    document.getElementById("minAttack").innerHTML = obj[name].property.attack.min_damage[index];
    document.getElementById("maxAttack").innerHTML = obj[name].property.attack.max_damage[index];
    document.getElementById("blood").innerHTML = obj[name].property.defense.health[index];
    document.getElementById("armor").innerHTML = obj[name].property.defense.Armor[index];
    document.getElementById("skillDefense").innerHTML = obj[name].property.defense.ability_defense[index] + "%";
    document.getElementById("bloodRetrieve").innerHTML = obj[name].property.defense.health_recovery[index];
    document.getElementById("attackSpeed").innerHTML = obj[name].property.attack.speed + "s";
    if(name == "不死鸟"){
        if(index != 0)
            document.getElementsByName("property")[1].innerHTML = "异能";
        else
            document.getElementsByName("property")[1].innerHTML = "爆破";
    }
    
}

change=function(value){			
    if (value.id == "1")				
        index = 0			
    if (value.id == "2")
        index = 1;
    if (value.id == "3")
        index = 2;			
    var active = document.querySelector(".active");
    active.classList.remove("active");				
    value.classList.add("active");			
    updateData();
}