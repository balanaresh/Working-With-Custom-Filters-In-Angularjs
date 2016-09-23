/*
 Working With Filters in Angularjs 1.5
 (c) 2016 
 License: MIT
*/
myApp.filter('forLoop', function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i = 0; i < total; i++) {
            input.push(i);
        }

        return input;
    };
});

myApp.filter('productFilterBy', function() {
    return function(items, price,category,color) {
        var activeFilters = [];
        var counter =0;
        if(price !="" && price !== undefined){
            activeFilters[counter] = 'price';
            counter++;
        }
        if(category !="" && category !== undefined){
            activeFilters[counter] = 'category';
            counter++;
        }
        if(color !="" && color !== undefined){
            activeFilters[counter] = 'color';
            counter++;
        }
        var filteredData = {};
        if(activeFilters.length > 0){
            if(items instanceof Object){
                var buildCondition = function(key){
                    var condition = true;
                    for(filter in activeFilters){
                        var name = activeFilters[filter];
                        switch(name){
                            case 'price':
                                condition *= (parseInt(items[key][name]) < price)
                            break;
                            case 'category':
                                condition *= (items[key][name] === category)
                            break;
                            case 'color': "value", 
                                condition *= inArray(color,items[key][name]).status;
                            break;
                        }
                    }
                    return condition;
                };
                for(key in items){
                    var condition = buildCondition(key);
                    if(condition == 1){
                        filteredData[key] = items[key];
                    }
                }
            }
        }
        else{
            filteredData = items;
        }
	    return filteredData;
    };
});
