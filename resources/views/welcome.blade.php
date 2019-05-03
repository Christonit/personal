

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Christopher Santana</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a id='logo' class="navbar-item" href="https://bulma.io">
            <img src="img/logo.svg">
        </a>
        <a role="button" class="navbar-burger burger is-hidden-desktop" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-end">

            <a class="navbar-item">
                Work
            </a>

            <a class="navbar-item">
                About me
            </a>

            <a class="navbar-item">
                Reading List
            </a>

            <a class="navbar-item button is-normal is-primary is-cta  is-hidden-mobile ">
                Get in touch
            </a>

            <div id='get-in-touch  ' class="is-hidden-desktop ">
                <div class="navbar-item contact-info">
                    <small>
                        NEED HELP?
                    </small>
                    <a href="http://opensource.org/licenses/mit-license.php">me@chsantana.com</a>
                </div>
                <div class="navbar-item contact-info">
                    <small>
                        WANT TO CHAT?
                    </small>
                    <a href="http://opensource.org/licenses/mit-license.php">+1 829 781 3995</a>
                </div>
                <div class="navbar-item">
                    <a class="button is-text">
                        Download CV
                    </a>
                    <a class="button is-white">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a class="button is-white">
                        <i class="fab fa-dribbble"></i>
                    </a>

                    <a class="button is-white">
                        <i class="fab fa-linkedin-in"></i>
                    </a>


                </div>
            </div>

        </div>
    </div>
    </div>
</nav>

<section class="hero is-primary container is-fluid">
    <div class="columns">
        <div class="column hero-body is-7-desktop is-middle-aligned">
            <h1 class="is-1 has-stroke">
                Greetings world,
            </h1>
            <h1 class="title is-1 is-spaced">
                Christopher Santana

                <span class="highlight">
                      <br> Product designer & <br> front end developer
                    </span>

            </h1>
            <h1 class="is-1 neon">
                AT YOUR SERVICE.
            </h1>
        </div>
        <div class="column is-5-desktop">
            <img src="img/joe-gardner-298306-unsplash.png" alt="" class="image">
        </div>
    </div>
</section>
<!--
      <section class="section container is-fluid is-hidden-tablet">
        <div class="columns">
          <div class="column">
            <a class="button is-cta">
                  Get in touch
            </a>
          </div>
        </div>
      </section>

-->



<section id='portfolio-container' class="section is-large">
    <div  class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides" style="transition: transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s; width: 1912.73px; transform: translate3d(-268.364px, 0px, 0px);">

                <li class="glide__slide" style="width: 570.909px; margin-right: 50px;">
                    <div class="portfolio-el">

                        <div class="portfolio-el-img">
                            <a href="http://www.google.com" target="_blank"> <img src="img/fueltrack-prev.gif" alt=""></a>
                        </div>

                        <div class="portfolio-el-details has-text-centered">
                            <h3 class="is-3">Fueltrack</h3>
                            <p>Web and mobile app to track and manage vehicle maintenance and fuel expenses.</p>
                            <a class="button is-outlined" href="#">View case</a>
                        </div>
                    </div>

                </li>


                <li class="glide__slide glide__slide--active" style="width: 570.909px; margin-left: 50px; margin-right: 50px;">
                    <div class="portfolio-el underconstruction">

                        <h3 class="is-3">CAIMAN</h3>

                        <p><b>Web App.</b> <br>Case coming soon. Contact me for details.</p>
                    </div>

                </li>


                <li class="glide__slide" style="width: 570.909px; margin-left: 50px;">
                    <div class="portfolio-el underconstruction">

                        <h3 class="is-3">CHIMIO</h3>

                        <p><b>Mobile ans Web App.</b> <br>Case coming soon. Contact me for details.</p>

                    </div>

                </li>



            </ul>

        </div>

        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left has-text-left-mobile is-disabled" data-glide-dir="<"><i class="material-icons">arrow_back</i>prev</button>
            <button class="glide__arrow glide__arrow--right has-text-right-mobile" data-glide-dir=">">next<i class="material-icons">arrow_forward</i></button>
        </div>


        <div id="slide-counter">
            <span data-slide-count='current' class="has-stroke"></span>
            <span data-slide-count='total'></span>
            <span data-action='close' class="button is-hollow is-small"><i class="material-icons">
close
</i></span>

        </div>

        <div id="slide-scroll-bar">
            <span id="slide-progress-bar"></span>
        </div>

    </div>
</section>


<footer>
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-3-desktop">
                <small>
                    NEED HELP?
                </small>
                <a href="http://opensource.org/licenses/mit-license.php">me@chsantana.com</a>
            </div>
            <div class="column is-3-desktop">
                <small>
                    WANT TO CHAT?
                </small>
                <a href="http://opensource.org/licenses/mit-license.php">+1 829 781 3995</a>
            </div>
            <div class="column is-6-desktop ">
                <div class="navbar-end">
                    <a class="button is-text">
                        Download CV
                    </a>
                    <a class="button is-white">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a class="button is-white">
                        <i class="fab fa-dribbble"></i>
                    </a>

                    <a class="button is-white">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                </div>

            </div>
        </div>
    </div>
</footer>

<span id="scrollToTop"><i class="material-icons">
arrow_upward
</i></span>

<canvas id="cursor"></canvas>
<canvas id="cursor--shadow"></canvas>
<canvas class="cursor--halo"></canvas>


<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script src="https://unpkg.com/@glidejs/glide@3.2.6/dist/glide.js"></script>
{{--<script type="text/javascript" src="/js/anime.min.js"></script>--}}
<script type="text/javascript" src="/js/main.js"></script>
</body>
</html>

