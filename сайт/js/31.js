var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'bar',

    
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Кто то',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    
    options: {}
});

var ctx = document.getElementById('myChar').getContext('2d');
var chart = new Chart(ctx, {
   
    type: 'radar',
   
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Что то',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    options: {}
});
				 
    
document.querySelector('#elastic').oniput = function(){
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.elastic li');
	if(var != ''){
	 elasticItems.forEach(function(elem){
		 if (elem.innerText.search(val) == -1){
			 elem.classList.add('hide');
		 }
		 else{
			 elem.classList.remove('hide');
		 } 
	 });	
	}
}
