$('.login-form').on('submit', function () {
    $.ajax({
        type:'post',
        url: '/api/login',
        data: {
            username: $('input[name=username]').val(),
            password: $('input[name=password]').val()
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    })
    return false;
})

$('.register-form').on('submit', function () {
    $.ajax({
        type:'post',
        url: '/api/register',
        data: {
            username: $('input[name=username]').val(),
            password: $('input[name=password]').val()
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    })
    return false;
})


$('.add-category-form').on('submit', function () {

    $.ajax({
        type: 'post',
        url: '/api/addCategory',
        data: {
            name: $('input[name=categoryName]').val()
        },
        success: function (data) {
            console.log(data);
        }
    })

    return false;
})

$('.add-article-form').on('submit', function () {

    $.ajax({
        type: 'post',
        url: '/api/addArticle',
        data: {
            title: $('input[name=title]').val(),
            description: $('textarea[name=description]').val(),
            content: $('textarea[name=content]').val()
        },
        dataType: 'json',
        success: function(data) {
            console.log(data)
        }
    })

    return false;
})