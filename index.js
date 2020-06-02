/* eslint-disable no-undef */
/* eslint-disable strict */

function handleThumbnailClicks() {
  $('.thumbnail').click(function (event) {
    const imgSrc = $(event.currentTarget).find('img').attr('src');
    const imgAlt = $(event.currentTarget).find('img').attr('alt');

    // $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

    $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});

  });


}

$(handleThumbnailClicks);