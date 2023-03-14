$(document).ready(function(){

	//  QUE APAREZCA EL MENU EN RESPONSIVE
	$('.menu-btn').click(function(){
		$('.categorias').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
		$('.menu-btn').toggleClass("ubic");
		$('.menu-btn .fas').toggleClass("color");
		$('.item').toggleClass("back");
	});

	// click a
	$('.categorias .category-item').click(function(){
		$('.categorias').toggleClass("active");
		$('.menu-btn').toggleClass("ubic");
		$('.menu-btn i').toggleClass("active");
	});

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.categorias .category-item[category="todos"]').addClass('activo');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category-item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category-item').removeClass('activo');
		$(this).addClass('activo');

		// OCULTANDO PRODUCTOS =========================
		$('.item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.item[category="'+catProduct+'"]').show();
			$('.item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category-item[category="todos"]').click(function(){
		function showAll(){
			$('.item').show();
			$('.item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
	
});
  
 

