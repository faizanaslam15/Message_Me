 // Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
 import "@hotwired/turbo-rails"
 import "controllers"
 import "channels"
//= require rails-ujs
//= require jquery
 //= require activestorage
 //= require turbolinks
 //= require semantic-ui
 //= require_tree .
 //= require init
scroll_bottom = function() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}

submit_message = function() {
    $('#message_body').on('keydown', function(e) {
        if(e.keycode == 13) {
            $('button').click();
        }
    })
}

$(document).on('turbolinks:load', function() {
   $('.ui.dropdown').dropdown();
   $('.message .close').on('click', function() {
     $(this).closest('.message').transition('fade');
    });
    submit_message();
   scroll_bottom();
 })
 
