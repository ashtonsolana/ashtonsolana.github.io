$(function () {
    var $memesContainer = $('.memes-container')
    var memesTemplate = $('#meme-template').html()

    function addPhoto(imageUrl) {
        var meme = {
            id: 0,
            name: "Static Meme",
            url: imageUrl,
            width: 500,
            height: 500
        };
        $memesContainer.append(Mustache.render(memesTemplate, meme))
    }

    // Load static meme image
    addPhoto("https://i.kym-cdn.com/entries/icons/facebook/000/021/756/21619563-mmmain.jpg")

    // Initialize masonry grid image
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
})