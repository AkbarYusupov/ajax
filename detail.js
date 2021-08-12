$(document).ready(function () {
   const params = window.location.search;
   const urlsParams = new URLSearchParams(params)
   const id = urlsParams.get("id")
   $.get(`https://reqres.in/api/users/${id}`,function (data, status) {
    if (status == "success") {
    const card = $('<div class="card"></div>') 

    const image = $('<img width="250px" height="250px">')
    image.attr({"src": data.data.avatar});

    const h3 = $('<p class="name"></p>')
    h3.text(data.data.email)

    const p = $('<p class="name"></p>')
    p.text(data.data.first_name)  

    const h4 = $('<p class="name"></p>')
    h4.text(data.data.last_name)  

    const  span = $('<span class="name"></span>')
    span.text(data.support.text)

    const link = $("<a href='#' class='name'></a>")
    link.text(data.support.url)  

    card.append(image,"First_name:",p,"Last_name:",h4,"Email:",h3,"Support:",span,"Link:",link)
    $(".container ").first().append(card)
    
    }
    else{
        console.log("error")
    }

   })
})