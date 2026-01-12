document.getElementById('login-btn').onclick = function() {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
    };
    document.getElementById('signup-btn').onclick = function() {
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
};