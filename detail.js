$(document).ready(function () {
   const params = window.location.search;
   const urlsParams = new URLSearchParams(params)
   const id = urlsParams.get("id")
   $.get(`https://gorest.co.in/public/v1/users/${id}`,function (data, status) {
    if (status == "success") {
    const card = $('<div class="card"></div>') 

    const h3 = $('<p class="name"></p>')
    h3.text(data.data.name)

    const p = $('<p class="name"></p>')
    p.text(data.data.email)  

    const h4 = $('<p class="name"></p>')
    h4.text(data.data.gender)  

    const  span = $('<span class="name"></span>')
    span.text(data.data.status)

    const link = $("<a href='#' class='name'></a>")
    link.text(data.data.id)  

    card.append("Id:",link,"Name:",h3,"Email:",p,"Gender:",h4,"status",span,)
    $(".container ").first().append(card)
    
    }
    else{
        console.log("error")
    }

   })
})