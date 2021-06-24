(function ($) {
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

})(jQuery);

var file = [];
            var reader = new FileReader();

            // Web app's Firebase configuration
            var firebaseConfig = {
                apiKey: "AIzaSyCxQTu4WIVJOEssD0XbHwx4BJaaou2aOmw",
                authDomain: "portfolio-94b60.firebaseapp.com",
                projectId: "portfolio-94b60",
                storageBucket: "portfolio-94b60.appspot.com",
                messagingSenderId: "981772731839",
                appId: "1:981772731839:web:13542ebc5e1cc681d48d0a",
                measurementId: "G-KLLJWTGH19"
            };

            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);

            var storage = firebase.storage();
            var storageRef = storage.ref();

            storageRef.child('Poster Designs/').listAll().then((result) => {
                result.items.forEach((imageRef) => {
                    imageRef.getDownloadURL().then((url) => {
                    let new_html = '';
                    new_html += '<div class="carousel-item">'
                    new_html += '<img src="'+url+'" class="d-block w-100" >';
                    new_html += '</div>';
                    $('#carouselExampleControls').find('#Designs-page').append(new_html);
                });
                });
            });

            function changePhotos(value){
                var posterDesign = document.getElementById('posterDesigns');
                var uiDesign = document.getElementById('uiDesigns');
                var illustration = document.getElementById('illustrations');
                var web = document.getElementById('web');
                var val = "";

                if(posterDesign.classList.contains('filter-active')){
                    posterDesign.classList.remove('filter-active');
                }else if(uiDesign.classList.contains('filter-active')){
                    uiDesign.classList.remove('filter-active');
                }else if(illustration.classList.contains('filter-active')){
                    illustration.classList.remove('filter-active');
                }else if(web.classList.contains('filter-active')){
                    web.classList.remove('filter-active');
                }

                document.getElementById(value).classList.add('filter-active');
                $('#carouselExampleControls').find('#Designs-page').empty();
                let temp_html = '';
                temp_html += '<div class="carousel-item active">'
                temp_html += '<img src="img/portfolio.png" class="d-block w-100" >';
                temp_html += '</div>';
                $('#carouselExampleControls').find('#Designs-page').append(temp_html);
                if(value=='posterDesigns'){
                    storageRef.child('Poster Designs/').listAll().then((result) => {
                        result.items.forEach((imageRef) => {
                            imageRef.getDownloadURL().then((url) => {
                            let new_html = '';
                            new_html += '<div class="carousel-item">'
                            new_html += '<img src="'+url+'" class="d-block w-100" >';
                            new_html += '</div>'
                            $('#carouselExampleControls').find('#Designs-page').append(new_html);
                        })
                        });
                    });
                }else if(value=='uiDesigns'){
                    storageRef.child('UI-Designs/').listAll().then((result) => {
                        result.items.forEach((imageRef) => {
                            imageRef.getDownloadURL().then((url) => {
                            let new_html = '';
                            new_html += '<div class="carousel-item">'
                            new_html += '<img src="'+url+'" class="d-block w-100" >';
                            new_html += '</div>'
                            $('#carouselExampleControls').find('#Designs-page').append(new_html);
                        })
                        });
                    });
                }else if(value=='illustrations'){
                    storageRef.child('Illustrations/').listAll().then((result) => {
                        result.items.forEach((imageRef) => {
                            imageRef.getDownloadURL().then((url) => {
                            let new_html = '';
                            new_html += '<div class="carousel-item">'
                            new_html += '<img src="'+url+'" class="d-block w-100" >';
                            new_html += '</div>'
                            $('#carouselExampleControls').find('#Designs-page').append(new_html);
                        })
                        });
                    });
                }else if(value=='web'){
                    storageRef.child('Web/').listAll().then((result) => {
                        result.items.forEach((imageRef) => {
                            imageRef.getDownloadURL().then((url) => {
                            let new_html = '';
                            new_html += '<div class="carousel-item">'
                            new_html += '<img src="'+url+'" class="d-block w-100" >';
                            new_html += '</div>'
                            $('#carouselExampleControls').find('#Designs-page').append(new_html);
                        })
                        });
                    });
                }

            }