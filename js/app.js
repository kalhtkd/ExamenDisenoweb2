// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		  {
			path: '/lentes/',
			url: 'lentes.html',
			name: 'lentes',
			  },
		{
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
		  {
			path: '/camaras/',
			url: 'camaras.html',
			name: 'camaras',
			  },
			  {
				path: '/accesorios/',
				url: 'accesorios.html',
				name: 'accesorios',
				  },
				  {
					path: '/product/',
					url: 'product.html',
					name: 'product',
					  },
					  {
						path: '/usuario/',
						url: 'usuario.html',
						name: 'usuario',
						  },
	],
	dialog: {
		title: 'AppBase',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





