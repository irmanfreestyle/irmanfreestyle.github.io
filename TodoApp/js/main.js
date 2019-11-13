let vm = new Vue({
	el: "#app",
	data: {
		text: "", 
		textEdit: "",
		getTask: localStorage.getItem("mytask"),
		tasks: [],
	},
	methods: {
		add: function() {
			if(this.text.trim() != 0) {
				this.tasks.unshift({task:this.text,done: false});
				localStorage.setItem("mytask", JSON.stringify(this.tasks))
				this.text = "";				
			}
			$(document).ready(function() {
				$(".wrap-edit").hide()
			})
		},
		del: function(e) {
			_index = e.$index;
			this.tasks.splice(_index, 1);
			localStorage.setItem("mytask", JSON.stringify(this.tasks));
		},
		open: function(e) {
			$(".wrap-edit").eq(e.$index).fadeIn();
			$(".wrap-edit input").eq(e.$index).focus();	
			$(".wrap-edit input").eq(e.$index).val(this.tasks[e.$index].task)
		},
		edit: function(e) {			
			this.tasks[e.$index].task = this.textEdit;
			this.textEdit = "";
			$(".wrap-edit").eq(e.$index).fadeOut();
			localStorage.setItem("mytask", JSON.stringify(this.tasks))
		},
		done: function(e) {
			_index = e.$index;
			this.tasks[_index].done = !this.tasks[_index].done
			localStorage.setItem("mytask", JSON.stringify(this.tasks));
		},
		close: function(e) {
			$(".wrap-edit").eq(e.$index).fadeOut();
		}
	},
	computed: {
		counts: function() {
			return this.tasks.length;
		},
		completed: function() {
			_comp = 0;
			for(i=0;i<this.tasks.length;i++) {
				if(this.tasks[i].done == true) {
					_comp++;
				}
			}
			return _comp;
		}
	},
	ready: function() {
		let h  = new Date().getHours();
		let m  = new Date().getMinutes();
		let s  = new Date().getSeconds();
		let d  = new Date().getDay();
		let dt = new Date().getDate();
		let mn = new Date().getMonth();
		let y  = new Date().getFullYear();

		let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		
		$(".day").text(days[d]); 
		$(".md").text(`${dt}, ${months[mn]} ${y}`);

		this.tasks = (this.getTask == null) ? [] : JSON.parse(this.getTask);


		$(document).ready(function() {
			$(".wrap-edit").hide()
			$(".text").focus()
		});
	}



});