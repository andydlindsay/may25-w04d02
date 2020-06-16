$(document).ready(() => {
  // grab the button from the DOM
  const $button = $('#add-new-item');

  // add a click event listener to the button
  $button.on('click', () => {
    // grab the input field
    const $input = $('#new-list-item');

    // get the value from the input field
    const value = $input.val();

    // create a new li using the value
    const $li = $('<li>').text(value);

    // append the li to the DOM
    // $('#main-list').append($li);
    $('#main-list').prepend($li);

    // clear input value
    $input.val('');

    // give input focus
    $input.focus();
  });
});
