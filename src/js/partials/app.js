(function () {

    $(document).ready(function(){
    $('.mobile').on('click',function () {
        $('body').toggleClass('menu-is-opened');
    })

    });

    /* <![CDATA[ */
    var kktfwp = {
        /*"postlove": {
            "ajax_url": "http:\/\/themes.easysite.by\/essu-portfolio\/wp-admin\/admin-ajax.php",
            "ajax_nonce": "bb9b6f9e2c"
        },
        "loadMore": {
            "ajax_url": "http:\/\/themes.easysite.by\/essu-portfolio\/wp-admin\/admin-ajax.php",
            "ajax_nonce": "b580d38bb7",
            "ppp": "9",
            "offset": "3",
            "post_id": "69",
            "text": "That's all"
        },
        "rightClick": {"click": "false", "message": ""},*/
        "masonry": {"layout": "fitRows"},
        "preloader": {"state": "0"}
        /*"layoutVis": {"style": ""}*/
    };
    /* ]]> */

    var $services_grid = $('.services_grid');

    var $mix = function () {
        $services_grid.imagesLoaded(function () {
            $services_grid.isotope({
                // main isotope options
                itemSelector: '.filterable-project',
                // set layoutMode
                layoutMode: kktfwp.masonry.layout,
                filter: '.all',
                stagger: 50,
                transitionDuration: 400,
                percentPosition: true,
                hiddenStyle: {
                    opacity: 0,
                    transform: 'scale(1.2)'
                },
                visibleStyle: {
                    opacity: 1,
                    transform: 'scale(1)'
                },
                // options for masonry layout mode
                masonry: {
                    columnWidth: '.grid-size',
                    horizontalOrder: true,
                    gutter: '.gutter-size'
                },
                // options for grid layout mode
                fitRows: {
                    columnWidth: '.grid-size',
                    horizontalOrder: true,
                    gutter: '.gutter-size'
                },
                // options for mosaic layout mode
                packery: {
                    columnWidth: '.grid-size',
                    horizontalOrder: false
                },
            });

            var $items = $services_grid.find('.portfolio-project');
            $services_grid.addClass('masonry-ready').isotope('revealItemElements', $items);
        });
    }

    $('.p-filter').on('click', 'a', function (e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        var $filterGroup = $(this).parents('.p-filter');
        $services_grid.isotope({
            filter: filterValue
        });
    });

    $('.p-filter').each(function (i, filterGroup) {
        var $filterGroup = $(filterGroup);
        $filterGroup.on('click', 'a', function () {
            $filterGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    if ($().isotope && typeof kktfwp.preloader !== 'undefined' && kktfwp.preloader.state !== '1') {
        $mix();
    }



})();



