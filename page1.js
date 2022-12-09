var buses = [
    {
        tavag:"Yashoda Travels",
        from: "Bangalore",
        to:"Hyderabad",
        time:"1:00",
        type:"A/C",
        price:1000
    },
    {
        tavag:"Red Travels",
        from: "Bangalore",
        to:"Hyderabad",
        time:"11:00",
        type:"NON A/C",
        price:700
    },
    {
        tavag:"Blue Travels",
        from: "Bangalore",
        to:"Hyderabad",
        time:"22:00",
        type:"Sleeper",
        price:1500
    },

    {
        "tavag":"Yashoda Travels",
        "from": "Hyderabad",
        "to":"Bangalore",
        "time":"16:00",
        "type":"NON A/C",
        "price":700
    },

    {
        "tavag":"Green Travels",
        "from": "Hyderabad",
        "to":"Bangalore",
        "time":"20:00",
        "type":"A/C",
        "price":800
    },

    {
        "tavag":"Green Travels",
        "from": "Hyderabad",
        "to":"Bangalore",
        "time":"9:00",
        "type":"Sleeper",
        "price":1000
    },

    
    {
        "tavag":"Green Travels",
        "from": "Udipi",
        "to":"Bangalore",
        "time":"10:00",
        "type":"NON A/C",
        "price":800
    },
    
    {
        "tavag":"Green Travels",
        "from": "Udipi",
        "to":"Bangalore",
        "time":"10:00",
        "type":"A/C",
        "price":700
    },

    {
        "tavag":"Green Travels",
        "from": "Udipi",
        "to":"Bangalore",
        "time":"10:00",
        "type":"Sleeper",
        "price":600
    },
    
];
buses.sort((a, b) => {
    return a.price - b.price;
});

function myFunction() 
{
    tex = document.getElementById("pr");
    buses.forEach((e) => {
        tex.innerHTML=(`${e.price}`);
    });
    document.getElementById("tav").innerHTML = "thank you!";
}
