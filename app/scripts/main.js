// jshint devel:true
console.log('\'Allo \'Allo!');

var $envelope = $( '.library-card.envelope' ),
    $card = $envelope.find( '.card' ),
    $front = $envelope.find( '.front' );

$front.on( 'click', function( event ) {
    $envelope.toggleClass( 'card-out' );
});