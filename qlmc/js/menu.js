'use strict';

var nhMenu = {	

	init: function(){
		var self = this;
		self.mainMenu.init();

		// active menu use nh-toggle
		if($('[nh-menu]').length > 0){
			$('[nh-menu]').each(function( index ){
				
				$(this).addClass('active');

				var toggleElement = $(this).parents('[nh-toggle-element]');

				toggleElement.each(function(index){
					console.log('sdvds');
					$(this).addClass('active').css({'display': 'block'});

					var key = $(this).attr('nh-toggle-element');
					$('[nh-toggle="' + key + '"]').addClass('open');
				});
			});
		}
	},		
	mainMenu: {
		wrapElement: null,
		menuSider: null,
		init: function() {
			var self = this;
			
			self.eventSidebarMain();
			
			$(document).on('click', '[nh-menu="btn-close"]', function(e) {
				self.toggleMenu(false);
			});
			
			$(document).on('click', '.back-drop', function(e) {
				if(($(e.target).is('[nh-menu="close"]') || $(e.target).is('.back-drop.open'))){
					self.toggleMenu(false);
				}
			});
		},
		eventSidebarMain: function () {
			var self = this;

			self.menuSiderMain = $('[nh-menu="sidebar"][menu-type="main"]');
			if(self.menuSiderMain == null ||  self.menuSiderMain.length == 0){
				return false
			};

			$(document).on('click', '[nh-menu="btn-open"][menu-type="main"]', function(e) {
				console.log('dv');
				self.wrapElement = self.menuSiderMain.closest('.menu-container');
				self.toggleMenu(!self.menuSiderMain.hasClass('open'));
			});
		},

		toggleMenu: function(open = true){
			var self = this;
			if(self.wrapElement == null || self.wrapElement.length == 0){
				return false
			};
			self.wrapElement.find('[nh-menu="sidebar"]').toggleClass('open', open);
			self.wrapElement.find('.back-drop').toggleClass('open', open);
		},
	}
}

nhMenu.init();