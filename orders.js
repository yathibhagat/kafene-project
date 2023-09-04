$(document).ready(function () {
    if (localStorage.getItem('loginStatus') !== 'true') {
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout-button');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./index.html')
    }
    var responseArr;
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        function (data) {
            responseArr = data;
            data.map((item, pos) => {
                createRows(item)
                $('#count').html(data.length);
            })
        },
    );
    function createRows(data) {
        let x = (`
        <tr class="table-row">
            <td class="secondary-text">${data.id}</td>
            <td class="primary-text">${data.customerName}</td>
            <td class="primary-text">${data.orderDate}<br><span class="secondary-text">${data.orderTime}</span></td>
            <td class="secondary-text">$${data.amount}</td>
            <td class="primary-text">${data.orderStatus}</td>
        </tr>`)
        $('#t2').append(x);
    }


    let n_s = document.getElementById('newCheckBox');
    n_s.addEventListener('change', function (e) {
        e.preventDefault();
        let t_body = document.getElementById('t2');
        let y = t_body.getElementsByTagName('tr');
        for (let i = 0; i < y.length; i++) {
            let td = y[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'New'){
                    if(this.checked === true){
                        y[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        y[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
        console.log(t_body.getElementsByTagName('tr').length)
    })



    let devivered = document.getElementById('DeliveredCheckBox');
    devivered.addEventListener('change', function (e) {
        e.preventDefault();
        let t_b = document.getElementById('t2');
        let b = t_b.getElementsByTagName('tr');
        for (let i = 0; i < b.length; i++) {
            let tb = b[i].getElementsByTagName('td')[4];
            if (tb) {
                let values = tb.textContent || tb.innerHTML;
                if (values === 'Delivered'){
                    if(this.checked === true){
                        b[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        b[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })




    let IntransitcBox = document.getElementById('IntransitcheckBox');
    IntransitcBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tb = document.getElementById('t2');
        let tr = tb.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let tb = tr[i].getElementsByTagName('td')[4];
            if (tb) {
                let value = tb.textContent || tb.innerHTML;
                if (value === 'InTransit'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })




    let PackedCBox = document.getElementById('PackedCheckBox');
    PackedCBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tb = document.getElementById('t2');
        let trow = tb.getElementsByTagName('tr');
        for (let i = 0; i < trow.length; i++) {
            let tb_d = trow[i].getElementsByTagName('td')[4];
            if (tb_d) {
                let value = tb_d.textContent || tb_d.innerHTML;
                if (value === 'Packed'){
                    if(this.checked === true){
                        trow[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        trow[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })
});
