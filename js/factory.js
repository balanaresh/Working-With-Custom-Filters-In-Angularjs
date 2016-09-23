/*
 Working With Filters in Angularjs 1.5
 (c) 2016 
 License: MIT
*/
myApp.factory('siteContent', [function(){
	var content = {};
	content.products = {};
	content.products.list = {
		'product1' : {
			'id' : '1',
			'slug' : 'product1',
			'title' : 'Product 1',
			'category': 'laptop',
			'price' : '1200',
			'description' : '<h2>Sub Header</h2>'+
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu viverra diam, ut accumsan massa. Mauris et est ex. Ut in ex elementum mauris posuere ultrices. Praesent tristique sollicitudin ipsum, a blandit elit ultricies non. Praesent id lectus hendrerit ligula maximus tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut luctus mollis justo at iaculis. Quisque suscipit volutpat ex, tincidunt varius nunc tempor vitae.</p>'+
			'<h2>Sub Header</h2>'+
			'<p>Suspendisse fermentum enim vel venenatis fermentum. Sed eget urna sem. Curabitur quis mollis orci, ac condimentum augue. Nullam ullamcorper pellentesque semper. Praesent laoreet malesuada ex in aliquet. Aenean eleifend ante sit amet diam elementum ultrices. Suspendisse finibus hendrerit faucibus. Fusce ligula mi, feugiat non fringilla vel, efficitur et dolor. Suspendisse potenti..</p>',
			'short_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu viverra diam, ut accumsan massa. Mauris et est ex. Ut in ex elementum mauris posuere ultrices. Praesent tristique sollicitudin ipsum, a blandit elit ultricies non. Praesent id lectus hendrerit ligula maximus tristique.',
			'color' :['silver','gold','space gray','rose gold'],
			'image' : 'images/product.jpg'
		},
		'product2' : {
			'id' : '2',
			'slug' : 'product2',
			'title' : 'Product 2',
			'category': 'laptop',
			'price' : '899',
			'description' : '<h2>Product Sub Header 1</h2>'+
			'<p>Donec mattis sodales nibh, ut interdum libero iaculis sed. Etiam velit neque, pretium ut dapibus tincidunt, cursus sit amet est. Pellentesque egestas aliquet lacus nec viverra. Curabitur pharetra laoreet lectus sit amet dapibus. Ut ultrices volutpat ante et consectetur. Morbi elementum commodo tortor nec pharetra. In ultrices felis sit amet tellus sodales molestie. Vestibulum non aliquet nunc. Curabitur pulvinar tincidunt efficitur. Suspendisse sagittis, leo eu lobortis tristique, justo odio rhoncus sem, nec bibendum leo sapien interdum justo. Suspendisse quis magna a orci facilisis tempor eget eget odio. Cras porttitor felis orci, id pellentesque erat lacinia ac. In hac habitasse platea dictumst. Fusce porta ac sem sed aliquet. Sed commodo mauris a sem accumsan tristique.</p>'+
			'<h2>Product Sub Header 2</h2>'+
			'<p>Duis tincidunt erat eget justo congue ullamcorper. Pellentesque tincidunt ac augue vitae ultricies. Donec quis interdum dolor, eu bibendum arcu. Aliquam ut massa eu lacus porta rutrum ac nec elit. Morbi gravida, libero eu tincidunt venenatis, nisl felis lobortis tellus, sed accumsan leo lectus non felis. Fusce quis bibendum dui. Quisque faucibus orci a eros consequat tincidunt. Nunc venenatis, odio at vulputate vulputate, sapien tellus ullamcorper augue, vel aliquam sapien lectus in diam. Etiam laoreet scelerisque tincidunt.</p>',
			'short_description' : 'Donec mattis sodales nibh, ut interdum libero iaculis sed. Etiam velit neque, pretium ut dapibus tincidunt, cursus sit amet est.',
			'color' :['silver'],
			'image' : 'images/product.jpg'
		},
		'product3' : {
			'id' : '3',
			'slug' : 'product3',
			'title' : 'Product 3',
			'category': 'laptop',
			'price' : '2200',
			'description' : '<h2>Sub Header</h2>'+
			'<p>Praesent pellentesque, nisi sit amet volutpat fringilla, tortor urna faucibus sapien, a pharetra eros dui porta sem. Nunc sit amet dapibus dolor. Mauris aliquet consequat nisi, eu lobortis urna cursus sollicitudin. Phasellus bibendum nec nisi tincidunt tempus. Praesent vitae eros accumsan, iaculis metus eget, lobortis leo. Duis arcu quam, tincidunt id turpis ut, ultrices mattis lacus. Nullam iaculis velit vitae lectus bibendum molestie. Vivamus nunc elit, bibendum id laoreet vel, ornare non erat.</p>'+
			'<h2>Sub Header</h2>'+
			'<p>Pellentesque sed metus vestibulum mi bibendum placerat ac id velit. Phasellus ut malesuada quam. Donec mi nisi, vehicula a sapien id, venenatis maximus ligula. Duis aliquet turpis a sem tincidunt lobortis. Donec lorem lacus, pellentesque ac tincidunt eu, auctor nec eros. In scelerisque rutrum eros vel bibendum. Etiam venenatis sem eget nibh malesuada molestie. Cras ut risus sit amet dui pharetra faucibus. Phasellus elit augue, malesuada et ante ut, hendrerit ultricies lacus. Nulla rutrum erat quis enim commodo, vel vestibulum purus blandit. Praesent tincidunt risus purus, eu dictum sapien mollis placerat. Sed rhoncus, risus eu consectetur ultricies, est urna scelerisque purus, in pretium purus magna consectetur neque. Etiam non justo at urna maximus cursus. Etiam dapibus dui eu massa dignissim, sit amet feugiat tortor congue. In condimentum ex sapien, id pulvinar augue tempor et.</p>',
			'short_description' : 'Praesent pellentesque, nisi sit amet volutpat fringilla, tortor urna faucibus sapien, a pharetra eros dui porta sem. Nunc sit amet dapibus dolor. Mauris aliquet consequat nisi, eu lobortis urna cursus sollicitudin. Phasellus bibendum nec nisi tincidunt tempus.',
			'color' :['silver'],
			'image' : 'images/product.jpg'
		},
		'product4' : {
			'id' : '4',
			'slug' : 'product4',
			'title' : 'Product 4',
			'category': 'desktop',
			'price' : '1450',
			'description' : '<h2>Sub Header</h2>'+
			'<p>Praesent aliquam tempor lectus in blandit. Donec venenatis, mi et volutpat rhoncus, nunc sapien ultrices justo, nec accumsan mauris purus vitae odio. Integer magna augue, lacinia sed magna in, tincidunt pellentesque arcu. Donec sodales hendrerit nulla, in vehicula diam facilisis sit amet. Nam ipsum nulla, consequat nec metus ut, commodo vulputate libero. Proin volutpat lectus diam, vel volutpat nibh aliquet non. Proin pharetra tincidunt ante, non mattis eros faucibus sed. Proin eget aliquam urna, nec sagittis lacus. Cras rhoncus ex sed viverra facilisis. Proin sed egestas odio. Fusce dignissim arcu ut nunc commodo, vel laoreet est ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vitae placerat neque. Duis at justo leo. Nunc nibh ante, pulvinar non ex eget, molestie mollis tellus. In feugiat, enim vel faucibus tincidunt, ipsum eros laoreet enim, a accumsan est nulla a erat.</p>'+
			'<h2>Sub Heaader</h2>'+
			'<p>Donec pellentesque tortor a risus interdum, quis commodo neque commodo. Fusce ornare lacus augue, sed accumsan odio dictum euismod. Nulla est justo, dapibus a purus nec, sollicitudin fringilla lacus. Nulla ultricies nisi in orci auctor, et posuere dui condimentum. Aliquam a mattis ipsum, in venenatis elit. Nullam in quam dapibus, posuere nulla a, gravida sem. Nam volutpat nibh et risus aliquet tempor. Morbi semper fringilla purus sit amet pharetra. Quisque ultricies efficitur tempor. Praesent vitae diam odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>',
			'short_description' : 'Praesent aliquam tempor lectus in blandit. Donec venenatis, mi et volutpat rhoncus, nunc sapien ultrices justo, nec accumsan mauris purus vitae odio.',
			'color' :['silver'],
			'image' : 'images/product.jpg'
		},
		'product5' : {
			'id' : '5',
			'slug' : 'product5',
			'title' : 'Product 5',
			'category': 'tablet',
			'price' : '2200',
			'description' : '<h2>Sub header</h2>'+
			'<p>Mauris tellus justo, lobortis nec nulla eu, interdum facilisis odio. Nullam sed convallis purus. Praesent cursus urna vitae pellentesque imperdiet. Maecenas sapien sapien, iaculis non eros eget, bibendum commodo ex. Nulla lacinia sollicitudin mi commodo eleifend. Sed et mi eget ligula feugiat cursus. Aliquam iaculis fermentum lacus nec ultrices. Sed eu augue sit amet ipsum elementum tristique elementum a nulla. Vestibulum interdum massa ac tortor imperdiet, ac viverra ligula tristique. Nulla facilisi. Donec sed dui a ex pulvinar tincidunt ut at lectus. Sed non nisi vel nisi porta luctus. Vivamus porta mollis pharetra. In non nibh ultricies dui rutrum consequat. Nulla cursus, leo sed aliquet congue, velit felis commodo magna, vel ultricies nunc enim id dui. Cras sit amet ex eget enim rhoncus interdum.</p>'+
			'<h2>Sub Header</h2>'+
			'<p>Vivamus lectus lectus, aliquet id sagittis in, imperdiet non mi. Praesent iaculis, turpis a consectetur facilisis, justo diam fringilla dolor, quis volutpat nisi erat a nisi. In faucibus vulputate condimentum. Nam et accumsan est, vel hendrerit ligula. Vestibulum accumsan egestas ex, hendrerit placerat arcu lobortis ornare. In malesuada ex non ullamcorper mattis. Sed sed tortor ipsum. Praesent vel risus ut metus tempus feugiat in a libero. Pellentesque pretium hendrerit elit vitae ornare. Morbi tempor dui tortor, id vestibulum velit facilisis cursus. In mi quam, blandit vel dui a, volutpat dignissim mauris. Phasellus odio ex, fermentum in turpis non, pellentesque consequat massa. Nullam posuere id est vitae malesuada. Phasellus et fringilla nibh.</p>',
			'short_description' : 'Mauris tellus justo, lobortis nec nulla eu, interdum facilisis odio. Nullam sed convallis purus. Praesent cursus urna vitae pellentesque imperdiet.',
			'color' :['silver','gold','rose gold'],
			'image' : 'images/product.jpg'
		},
		'product6' : {
			'id' : '6',
			'slug' : 'product6',
			'title' : 'Product 6',
			'category': 'tablet',
			'price' : '899',
			'description' : '<h2>Sub Header</h2>'+
			'<p>Praesent elementum, lorem quis elementum pellentesque, tellus leo tempor risus, non convallis enim elit a leo. Fusce convallis tristique ipsum, sed tristique justo venenatis varius. Suspendisse ac mauris commodo, cursus ante a, vestibulum augue. Nulla facilisi. Phasellus rutrum lectus eu ligula sollicitudin, ac rhoncus ante molestie. Morbi iaculis dui vel lectus vehicula, at rutrum lorem mollis. Morbi viverra mattis rutrum.</p>'+
			'<h2>Sub Header</h2>'+
			'<p>Mauris auctor eu nisl in vehicula. Quisque porttitor felis non odio imperdiet consectetur. Praesent porttitor justo odio, quis fringilla tortor convallis convallis. Morbi luctus a ex eget fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer orci velit, gravida et mattis non, vehicula in magna. Vestibulum sollicitudin fermentum augue. Duis rutrum nibh quam, ac laoreet nisi pharetra vitae. Praesent eu tellus rutrum, mollis augue sit amet, fringilla metus. Vivamus sit amet imperdiet sapien. Etiam semper, sem nec ultricies faucibus, libero nisi ultricies urna, quis tincidunt mauris mi nec ligula. Nam aliquet, arcu sed scelerisque viverra, quam nibh cursus lorem, et scelerisque tortor mi quis magna. Praesent enim justo, ornare id euismod quis, rutrum interdum nunc.</p>',
			'short_description' : 'Praesent elementum, lorem quis elementum pellentesque, tellus leo tempor risus, non convallis enim elit a leo. Fusce convallis tristique ipsum, sed tristique justo venenatis varius.',
			'color' :['silver','gold','space gray','rose gold'],
			'image' : 'images/product.jpg'
		},
		'product7' : {
			'id' : '7',
			'slug' : 'product7',
			'title' : 'Product 7',
			'category': 'mobile',
			'price' : '699',
			'description' : '<h2>Sub Header</h2>'+
			'<p>Sed aliquet, tortor quis fringilla mollis, lacus lorem semper odio, non faucibus erat urna non velit. Pellentesque scelerisque sit amet velit nec rhoncus. Proin efficitur dui eu dui lobortis aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam sit amet nunc tempor, egestas tellus eget, volutpat nisi. Praesent bibendum blandit sagittis. Fusce odio nisl, convallis eget cursus et, molestie non tortor. Nulla facilisi. Nam dapibus cursus erat eu dapibus. Nunc at consequat est. Nullam commodo tellus lacus, sed malesuada diam posuere vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>'+
			'<h2>Sub Header</h2>'+
			'<p>Maecenas nec turpis cursus lacus ornare euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur placerat ornare quam. Vivamus nec lorem et urna vestibulum placerat in a magna. Ut vulputate, metus nec vestibulum fringilla, ipsum augue bibendum nisi, at efficitur nisl tortor id neque. Sed in elementum arcu, ut mollis sapien. Vivamus in lacus mollis, fringilla metus ac, auctor mi. Integer eros lacus, tincidunt tincidunt euismod sit amet, tempus sed tortor. Vestibulum efficitur pharetra diam, id maximus justo venenatis in. Donec felis arcu, tempor et feugiat vel, ultrices sed massa.</p>',
			'short_description' : 'Sed aliquet, tortor quis fringilla mollis, lacus lorem semper odio, non faucibus erat urna non velit. Pellentesque scelerisque sit amet velit nec rhoncus.',
			'color' :['silver','gold','space gray','rose gold'],
			'image' : 'images/product.jpg'
		},
		'product8' :{
			'id' : '8',
			'slug' : 'product8',
			'title' : 'product 8',
			'category': 'mobile',
			'price' : '499',
			'description' : '<h2>Sub Header</h2>'+
			'<p>Aenean posuere, ipsum tristique tincidunt ultricies, dui mi pulvinar quam, ut faucibus libero leo vitae ante. Vivamus malesuada ipsum augue, tristique tempus eros placerat in. Morbi volutpat augue et justo ultrices luctus. Morbi convallis mauris a risus elementum, ut consectetur nisl condimentum. Donec vel pellentesque lectus. Praesent feugiat est nec nibh pretium, at rhoncus augue commodo. Cras faucibus augue neque, ac suscipit libero varius eu. Nullam efficitur laoreet tortor in eleifend. Vivamus eu sagittis neque. Fusce convallis mi et nibh aliquam mollis. Proin porta urna non urna pellentesque auctor.</p>'+
			'<h2>Sub Header</h2>'+
			'<p>Phasellus sed eleifend ante, id malesuada est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam laoreet convallis turpis, vitae consectetur diam ultricies id. Maecenas a augue congue, ultricies massa ornare, volutpat est. Fusce suscipit mauris sit amet magna euismod auctor eget sit amet lectus. Vestibulum faucibus risus ut augue scelerisque tempus. Suspendisse potenti. Sed magna ipsum, sodales sit amet justo a, finibus faucibus eros. Vestibulum vel odio faucibus magna vestibulum bibendum at quis lorem. Nulla felis nisl, auctor in vestibulum eu, sollicitudin et justo. Donec ultrices et augue at ultricies. Nam porttitor nisi neque, quis dapibus augue congue nec. Sed ac justo massa. Morbi suscipit, libero sed cursus faucibus, felis neque finibus turpis, in semper est nibh quis tellus.</p>',
			'short_description' : 'Aenean posuere, ipsum tristique tincidunt ultricies, dui mi pulvinar quam, ut faucibus libero leo vitae ante. Vivamus malesuada ipsum augue, tristique tempus eros placerat in. Morbi volutpat augue et justo ultrices luctus.',
			'color' :['silver','gold','space gray','rose gold'],
			'image' : 'images/product.jpg'
		},
		'product9' : {
			'id' : '9',
			'slug' : 'product9',
			'title' : 'Product 9',
			'category': 'watch',
			'price' : '199',
			'description' : '<h2>Sub Header</h2>'+
			'<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In euismod felis sed tempus bibendum. Nullam mi enim, dignissim in venenatis ut, accumsan ut lorem. Ut porttitor, libero nec maximus sagittis, arcu purus efficitur sem, nec condimentum neque nibh a felis. Quisque a neque in dolor gravida volutpat. Nam consequat mi vel rutrum rutrum. Integer leo eros, placerat ac ante ac, varius lobortis nulla. Curabitur vel varius tortor. Proin id volutpat eros, sit amet auctor ligula. Vivamus in tortor venenatis, mattis lacus venenatis, blandit turpis. Phasellus mauris libero, viverra at dignissim quis, cursus vitae metus. Integer laoreet, metus non rhoncus ultricies, nunc est tempor magna, vel tristique mauris mauris nec est.</p>'+
			'<h2>Sub Header</h2>'+
			'<p>Donec lobortis at magna a sodales. Curabitur porta imperdiet mauris, eget lobortis mauris laoreet sed. Vestibulum imperdiet sem id ligula scelerisque, sed maximus purus pellentesque. Aliquam vel bibendum nibh. Vestibulum blandit nunc at lorem porttitor, et euismod sem condimentum. Maecenas tortor eros, rhoncus in fringilla in, viverra vitae ligula. Maecenas volutpat gravida massa, vestibulum ornare ex dignissim sed. Suspendisse sed dapibus metus, non tempor libero. Ut feugiat gravida nisl sed consectetur. Sed eleifend euismod nisl, in egestas nisl tincidunt at. Integer at erat eget justo scelerisque cursus.</p>',
			'short_description' : 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In euismod felis sed tempus bibendum.',
			'color' :['blue','yellow','space gray','rose gold','black'],
			'image' : 'images/product.jpg'
		},
		'product10' : {
			'id' : '10',
			'slug' : 'product10',
			'title' : 'Product 10',
			'category': 'tv',
			'price' : '150',
			'description' : '<h2>Sub Header</h2>'+
			'<p>Nullam lobortis lectus sed magna tempus suscipit. Sed quis auctor nisi, ut dignissim nulla. Sed et lobortis sapien, congue viverra tortor. Mauris maximus, nibh non porta vestibulum, tellus sapien laoreet quam, eu tincidunt eros nunc non libero. Suspendisse ornare risus felis, ut convallis leo lobortis non. Aenean egestas nibh nibh, in lacinia augue auctor id. Fusce ut magna suscipit, lacinia nibh et, rutrum neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus hendrerit ex eu ullamcorper. Phasellus accumsan, massa vel posuere elementum, diam quam laoreet lacus, a dapibus dui nisi sed erat. Pellentesque ut pharetra nisl. Vivamus blandit, purus in ullamcorper hendrerit, tellus erat facilisis urna, id gravida nibh sem quis velit. Praesent laoreet, orci quis auctor viverra, lectus massa scelerisque nisl, vel molestie nulla urna eu orci. Quisque suscipit justo lectus, vel pharetra sem tincidunt nec.</p>'+
			'<h2>Sub Header</h2>'+
			'<p>Aenean sit amet nibh lorem. Sed facilisis elementum nibh quis lacinia. Aliquam finibus odio at aliquam accumsan. Curabitur feugiat tincidunt tempus. Quisque enim nibh, faucibus ut magna vel, sollicitudin laoreet nibh. Nullam leo dui, rutrum sit amet porta eget, iaculis ac magna. Aenean at laoreet ex. Nulla feugiat rutrum est in pellentesque. Etiam eget odio magna. Cras venenatis imperdiet mi nec porttitor. Sed feugiat, urna et varius pharetra, justo dui sodales risus, eget sodales enim nibh sit amet nibh. Sed varius nec nunc id efficitur. Donec ullamcorper tincidunt lacus, vitae sagittis neque suscipit a. Praesent eu consectetur nisl, ut dignissim diam. Sed volutpat quis turpis nec fringilla.</p>',
			'short_description' : 'Nullam lobortis lectus sed magna tempus suscipit. Sed quis auctor nisi, ut dignissim nulla. Sed et lobortis sapien, congue viverra tortor.',
			'color' :['sliver'],
			'image' : 'images/product.jpg'
		}
	};
	content.home = {
		'slider':[
			{
				'image' : 'images/slide.jpg',
				'heading' : 'Product 1',
				'sub_heading' : 'Sub Header 1',
				'description' : 'Fusce eleifend convallis est nec finibus. Vivamus venenatis ac felis lacinia vulputate. Proin a blandit turpis. Sed feugiat libero sem, vel congue metus finibus eget. Duis vitae porttitor ante, eget malesuada purus. Fusce venenatis ut lacus at elementum. Nam et sem at lacus pretium imperdiet vulputate ut sapien.',
				'link': ''
			},
			{
				'image' : 'images/slide.jpg',
				'heading' : 'Product 5',
				'sub_heading' : 'Sub Header 2',
				'description' : 'Duis purus magna, placerat id lectus at, efficitur ultricies metus. In orci diam, scelerisque id turpis sit amet, pulvinar lobortis erat. Duis ullamcorper sollicitudin neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus pharetra ipsum iaculis, bibendum nibh quis, luctus mi.',
				'link': ''
			},
			{
				'image' : 'images/slide.jpg',
				'heading' : 'Product 8',
				'sub_heading' : 'Sub header 8',
				'description' : 'Praesent fringilla pretium elit, sed finibus dui consectetur ornare. Ut lobortis posuere erat, ac aliquet risus ultricies nec. In non lobortis nunc. Nulla ullamcorper erat vitae lacus vehicula fermentum. In commodo sem arcu, non dictum mi aliquet sit amet. Maecenas ut feugiat erat, quis consequat elit. ',
				'link': ''
			}
		],
		'mostviewed_products' : [content.products.list['product1'],content.products.list['product3'],content.products.list['product5'],content.products.list['product10']]
	};
	content.products.filters = [
		{
			'price': {'':'All','300':'Below 300','700':'Below 700','1500':'Below 1500'}
		},
		{
			'color' :{'':'All Colors','silver':'Silver','gold':'Gold','space gray':'Space Gray','rose gold':'Rose Gold','black':'Black','blue':'Blue','yellow':'Yellow'}
		},
		{
			'category' : {'':'All Categories','laptop':'Laptops','desktop':'Desktops','tablet':'Tablets','mobile':'Mobiles','watch':'Watches','tv':'Tv'}
		}
	];
	return content;
}]);