$.ajax({
	url: "http://jsonplaceholder.typicode.com/todos",
	dataType: "json",
	completed: [],// if data completed = true
	pending: [],// if data completed = false
	success: function(data){
		console.log(data[3]);
		
		//sort completed and incomplete todos into completed and pending properties
		for(i=0;i<data.length;i++){
			if(data[i].completed === true){
				this.completed.push(data[i]);
				}//end if
			else{this.pending.push(data[i]);
				};//end else
			};//end for
		//end sorting
			
		//populate todo list with pending tasks
		var todo = document.getElementById("todo")
			for(i=0;i<this.pending.length;i++){
			todo.innerHTML += "<li>" + this.pending[i].title + "</li>"
		}
		//populate done list with completed tasks
		var done = document.getElementById("done")
			for(i=0;i<this.completed.length;i++){
			done.innerHTML += "<li>" + this.completed[i].title + "</li>"
		}
	},//end success property
	type: "GET",
})//end Ajax object