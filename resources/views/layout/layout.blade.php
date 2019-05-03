<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title') - Christopher Santana</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>

@include('layout.header')

@yield('hero_banner')

@yield('content')



@include('layout.footer')

@include('utilities.scroll-button')

@include('utilities.cursor')

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://unpkg.com/@glidejs/glide@3.2.6/dist/glide.js"></script>
<script type="text/javascript" src="/js/main.js"></script>

</body>
</html>

