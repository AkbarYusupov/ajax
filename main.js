$(document).ready(function(){
    const listDIv = $(".list-group").first();
    $.get("https://gorest.co.in/public/v1/users", function(data, status) {
        if (status == "success") {
           for (let index = 0; index < data.data.length; index++) {
            const link = $("<a href='#' class='list-group-item list-group-item-action'></a>")
            link.text(data.data[index].name )
            link.attr({"href": `./detail.html?id=${data.data[index].id}`})

           listDIv.append(link)

           const container = $("#container my-5")
           container.append(listDIv)
               
           }

        } else {
            console.log("Nimadir xato ketdi")
        }
    })
})
