$(document).ready(function () {
    if(localStorage.getItem('loginStatus') !== 'true'){
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout-button');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./index.html')
    }
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
        function (data) {
            data.map((item,pos) => {    
                createRows(item)
                $('#count').html(data.length)
            })
        },
    );
    function createRows(data) {
        let tab_row = (`
        <tr class="table-row">
            <td class="secondary-text">${data.id}</td>
            <td class="primary-text">${data.medicineName}</td>
            <td class="secondary-text">${data.medicineBrand}</td>
            <td class="primary-text">${data.expiryDate}</td>
            <td class="secondary-text">$${data.unitPrice}</td>
            <td class="secondary-text">${data.stock}</td>
        </tr>`)
        $('#t2').append(tab_row);
    }


    
    let expiredCBox = document.getElementById('expiredCheckBox');
    expiredCBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tb = document.getElementById('t2');
        let t_r = tb.getElementsByTagName('tr');
        for (let i = 0; i < t_r.length; i++) {
            let td = t_r[i].getElementsByTagName('td')[3];
            if (td) {
                let value = myParser(td.textContent || td.innerHTML);
                if (new Date(value).getTime() < new Date().getTime()){
                    if(this.checked === true){
                        t_r[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        t_r[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })


    let lowStockCBox = document.getElementById('lowStockCheckBox');
    lowStockCBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tb = document.getElementById('t2');
        let t_r = tb.getElementsByTagName('tr');
        for (let i = 0; i < t_r.length; i++) {
            let td = t_r[i].getElementsByTagName('td')[5];
            if (td) {
                let value = td.textContent || td.innerHTML;
                if (value < 100){
                    if(this.checked === true){
                        t_r[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        t_r[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })


    function myParser (date) {
        let arr = date.split('-');
        return arr.join(' ')
    }
});
