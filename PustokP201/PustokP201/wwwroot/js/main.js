$(function () {

    $(document).on("click", ".single-eye-btn", function () {

        let id = $(this).attr("data-id");

        fetch(`/home/getbook/${id}`)
            //.then(response => response.json())
            .then(response => response.text())
            .then(data => {

                console.log(data)
                $("#detailModal .modal-content").html(data)
              /*  $("#detailModal").find(".product-title").text(data.name)*/
            })
            
      

        $("#detailModal").modal("show")
    })
})