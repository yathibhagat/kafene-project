$(document).ready(function () {
    if(localStorage.getItem('loginStatus') == 'true'){
        location.assign('./orders.html')
    }
    let loginDOM = window.document.getElementById('signinform');
    loginDOM.onsubmit = function (e) {
        e.preventDefault();
        let loginDetails = {
            username: this.username.value,
            password: this.password.value
        }
        if (loginDetails.username === loginDetails.password) {

            window.localStorage.setItem('loginStatus',true)
            alert('Login Successful!!')
            location.replace('./orders.html')

            //api call (api call is not working so I made login direct)
            $.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",loginDetails,
                function (data, textStatus, jqXHR) {
                    window.localStorage.setItem('loginStatus',true)
                    alert('Login Successful!!')
                    location.replace('./orders.html')
                },
                
            );
        } else {
            alert(`Please Enter Valid Credentials `)
        }
    }
    $('.navbar-menu-items').click(function (e) { 
        e.preventDefault();
        $('.active').removeClass('active');
        $(e.target).addClass('active')
        
    });
});