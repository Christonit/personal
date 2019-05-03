@extends('layout.layout')


@section('title', 'Hello!')

@section('hero_banner')

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


@endsection



@section('content')

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
@endsection
