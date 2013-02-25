/*
 * @package Drop-Tweets-Not-Bombs
 * @author <mattjburrows@gmail.com>
 */

var express 	= require( 'express' ),
	app			= express(),
	environment = app.get( 'env' );

app.configure( function () {
	// Set the application title.
	app.set( 'title', 'Drop Tweets not Bombs' );
	app.engine( 'jade', require( 'jade' ).__express );
	// Set the error handling capabilities.
	if( 'development' === environment ) {
		app.use( express.errorHandler( {
			dumpExceptions: true,
			showStack: true
		} ) );
	}
	if( 'production' === environment ) {
		app.use( express.errorHandler() );
	}
} );

app.get( '/', function ( request, response ) {
	// var body = app.get( 'title' );
	// response.setHeader( 'Content-Type', 'text/plain' );
	// response.setHeader( 'Content-Length', body.length );
	// response.end( body );
	response.render( 'index.jade', {
		title: 'Home',
		pageName: 'index'
	} )
} );

app.listen( 8888 );
console.log( 'Listening on port 8888' );