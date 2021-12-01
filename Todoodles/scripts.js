// model = {items: []}
//
// // let tasks = []
//
//
//
//
//
//
// //
// //
// //
//
// const view = {
//
//     clearToDoList: function () {
//         let scope = document.createRange();
//         scope.selectNodeContents(document.getElementById("list"));
//         scope.deleteContents();
//     },
//
//     render: function () {
//
//         // this.getPhotos()
//
//         this.clearToDoList();
//
//         if (model.items.length) {
//
//             const list = document.getElementById("list")
//
//             for (let i = model.items.length - 1; i >= 0; i--) {
//                 console.log(model.items[i])
//
// 				const item = document.createElement('li');
// 				const span = document.createElement('span');
// 				const check = document.createElement('a');
// 				const cross = document.createElement('a');
// 				const iconCheck = document.createElement('i')
// 				const iconCross = document.createElement('i');
//
//                 item.className = "item"
//                 span.className = "item-text"
//                 check.className = "item-complete"
//                 cross.className = "item-delete"
//
//                 span.textContent = model.items[i].title
//
//                 if (model.items[i].completed) {
//                     span.setAttribute("style", "text-decoration: line-through; color: #bbb")
//                 }
//
//                 iconCheck.setAttribute("class", "icon ion-md-checkmark")
//                 iconCheck.setAttribute("data-id", i)
//                 iconCross.setAttribute("class", "icon ion-md-trash")
//                 iconCross.setAttribute("data-id", i)
//
//                 check.setAttribute("onclick", "controller.completeItem('" + i + "')")
//                 cross.setAttribute("onclick", "controller.deleteItem('" + i + "')")
//
//                 check.appendChild(iconCheck)
//                 cross.appendChild(iconCross)
//                 item.appendChild(span)
//                 item.appendChild(check)
//                 item.appendChild(cross)
//                 list.appendChild(item);
//
// 				console.log('model: ', model.items)
//             }
//         }
//     },
//
//     // addItem: function(e) {
//     // 	// if ((e.code === "Enter") || (e.code === "NumpadEnter")) {
//     // 	// 	if (((document.getElementById("add-item").value !== "") && (document.getElementById("add-item").value !== " "))) {
//     // 			item = document.getElementById("add-item").value;
//     // 			controller.addItem(item);
//     // 	// 		// localStorage.setItem('test', list_item);
//     // 	// 		//   let localStorage.item ? [] : JSON.parse(localStorage.getItem('tasks'));
//     // 	// 		return false;
//     // 	// 	}
//     // 	// }
//     // 	// this.getPhotos()
//     //
//     // },
//
//     addItem: function (e) {
//         if ((e.code === "Enter") || (e.code === "NumpadEnter")) {
//             if (((document.getElementById("add-item").value !== "") && (document.getElementById("add-item").value !== " "))) {
//                 item = document.getElementById("add-item").value;
//                 controller.addItem(item);
//                 // localStorage.setItem('test', list_item);
//                 //   let localStorage.item ? [] : JSON.parse(localStorage.getItem('tasks'));
//                 return false;
//             }
//         }
//     },
//
//
// }
//
// // const foo = async () => {
// // 	await ...
// // }
//
// // async function foo() {
// // 	await ...
// // }
//
// const controller = {
// 	getTodos: async function() {
// 		await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
// 			headers: {
// 				"Content-type": "application/json: charset=YTF-8"
// 			}
// 		})
// 			.then(res => res.json())
// 			.then((todos) => model.items = todos)
// 	},
//     init: async function () {
// 		await this.getTodos();
//         view.render()
//     },
//
//     // addItem: function(item) {
//     // 	// // this.getPhotos()
//     // 	// console.log('11111111')
//     // 	// tasks.forEach((element) => {
//     // 	// 	list_item = { text: element, completed: false }
//     // 	//
//     // 	// })
//     // 	// console.log(tasks)
//     // 	// //
//     // 	console.log(list_item)
//     // 	model.items.push(list_item)
//     // 	console.log(list_item)
//     // 	document.getElementById("add-item").value = ""
//     // 	// localStorage.setItem('test', list_item);
//     // 	view.render()
//     // },
//
//     addItem: function (item) {
//         list_item = {title: item, completed: false}
//         model.items.push(list_item)
//         console.log(list_item)
//         document.getElementById("add-item").value = ""
//         // localStorage.setItem('test', list_item);
//         view.render()
//     },
//
//     completeItem: function (item_index) {
//         model.items[item_index].completed = !model.items[item_index].completed
//         console.log(model.items[item_index].completed)
//         view.render()
//     },
//
//     deleteItem: function (item_index) {
//         model.items.splice(item_index, 1)
//         view.render()
//     }
// }
//
// function add() {
// 	return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
// 		headers: {
// 			"Content-type": "application/json: charset=YTF-8"
// 		}
// 	})
// 		.then(res => res.json())
// 		.then((todos) => {
// 			console.log('posts: ', todos)
// 			model.items = todos;
// 			//
// 			// posts.forEach((element) => {
// 			// 	tasks.push( element.title)
// 			//
// 			// })
//
// 			// tasks.forEach((el) => {
// 			// 	console.log(el)
// 			// })
// 		})
// }
//
// // controller.addItem("Feed doggo.")
// controller.init()
// //
// // localStorage.setItem('test', 1);

// model = {items: []}

class Controller {
	model = {items: []}

	async getTodos() {
		await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
			headers: {
				"Content-type": "application/json: charset=YTF-8"
			}
		})
			.then(res => res.json())
			.then((todos) => this.model.items = todos)
	}

	async Init() {
		await this.getTodos();
		view.render()
	}

	addItem(item) {
		const list_item = {title: item, completed: false}
		this.model.items.push(list_item)
		console.log(list_item)
		document.getElementById("add-item").value = ""
		// localStorage.setItem('test', list_item);
		view.render()
	}

	completeItem(item_index) {
		this.model.items[item_index].completed = !this.model.items[item_index].completed
		console.log(this.model.items[item_index].completed)
		view.render()
	}

	deleteItem(item_index) {
		this.model.items.splice(item_index, 1)
		view.render()
	}
}

class View {
	constructor(model) {
		this.model = model;
	}

	clearToDoList() {
		let scope = document.createRange();
		scope.selectNodeContents(document.getElementById("list"));
		scope.deleteContents();
	}

	render() {

		// this.getPhotos()

		this.clearToDoList();

		if (this.model.items.length) {

			const list = document.getElementById("list")

			for (let i = this.model.items.length - 1; i >= 0; i--) {
				console.log(this.model.items[i])

				const item = document.createElement('li');
				const span = document.createElement('span');
				const check = document.createElement('a');
				const cross = document.createElement('a');
				const iconCheck = document.createElement('i')
				const iconCross = document.createElement('i');

				item.className = "item"
				span.className = "item-text"
				check.className = "item-complete"
				cross.className = "item-delete"

				span.textContent = this.model.items[i].title

				if (this.model.items[i].completed) {
					span.setAttribute("style", "text-decoration: line-through; color: #bbb")
				}

				iconCheck.setAttribute("class", "icon ion-md-checkmark")
				iconCheck.setAttribute("data-id", i)
				iconCross.setAttribute("class", "icon ion-md-trash")
				iconCross.setAttribute("data-id", i)

				check.setAttribute("onclick", "controller.completeItem('" + i + "')")
				cross.setAttribute("onclick", "controller.deleteItem('" + i + "')")

				check.appendChild(iconCheck)
				cross.appendChild(iconCross)
				item.appendChild(span)
				item.appendChild(check)
				item.appendChild(cross)
				list.appendChild(item);

				console.log('model: ', this.model.items)
			}
		}
	}

	addItem(e) {
		if ((e.code === "Enter") || (e.code === "NumpadEnter")) {
			if (((document.getElementById("add-item").value !== "") && (document.getElementById("add-item").value !== " "))) {
				const item = document.getElementById("add-item").value;
				controller.addItem(item);
				// localStorage.setItem('test', list_item);
				//   let localStorage.item ? [] : JSON.parse(localStorage.getItem('tasks'));
				return false;
			}
		}
	}
}


const controller = new Controller();
const view = new View(controller.model);

controller.Init()





// const view = {
//
// 	clearToDoList: function () {
// 		let scope = document.createRange();
// 		scope.selectNodeContents(document.getElementById("list"));
// 		scope.deleteContents();
// 	},
//
// 	render: function () {
//
// 		// this.getPhotos()
//
// 		this.clearToDoList();
//
// 		if (model.items.length) {
//
// 			const list = document.getElementById("list")
//
// 			for (let i = model.items.length - 1; i >= 0; i--) {
// 				console.log(model.items[i])
//
// 				const item = document.createElement('li');
// 				const span = document.createElement('span');
// 				const check = document.createElement('a');
// 				const cross = document.createElement('a');
// 				const iconCheck = document.createElement('i')
// 				const iconCross = document.createElement('i');
//
// 				item.className = "item"
// 				span.className = "item-text"
// 				check.className = "item-complete"
// 				cross.className = "item-delete"
//
// 				span.textContent = model.items[i].title
//
// 				if (model.items[i].completed) {
// 					span.setAttribute("style", "text-decoration: line-through; color: #bbb")
// 				}
//
// 				iconCheck.setAttribute("class", "icon ion-md-checkmark")
// 				iconCheck.setAttribute("data-id", i)
// 				iconCross.setAttribute("class", "icon ion-md-trash")
// 				iconCross.setAttribute("data-id", i)
//
// 				check.setAttribute("onclick", "controller.completeItem('" + i + "')")
// 				cross.setAttribute("onclick", "controller.deleteItem('" + i + "')")
//
// 				check.appendChild(iconCheck)
// 				cross.appendChild(iconCross)
// 				item.appendChild(span)
// 				item.appendChild(check)
// 				item.appendChild(cross)
// 				list.appendChild(item);
//
// 				console.log('model: ', model.items)
// 			}
// 		}
// 	},
//
// 	// addItem: function(e) {
// 	// 	// if ((e.code === "Enter") || (e.code === "NumpadEnter")) {
// 	// 	// 	if (((document.getElementById("add-item").value !== "") && (document.getElementById("add-item").value !== " "))) {
// 	// 			item = document.getElementById("add-item").value;
// 	// 			controller.addItem(item);
// 	// 	// 		// localStorage.setItem('test', list_item);
// 	// 	// 		//   let localStorage.item ? [] : JSON.parse(localStorage.getItem('tasks'));
// 	// 	// 		return false;
// 	// 	// 	}
// 	// 	// }
// 	// 	// this.getPhotos()
// 	//
// 	// },
//
// 	addItem: function (e) {
// 		if ((e.code === "Enter") || (e.code === "NumpadEnter")) {
// 			if (((document.getElementById("add-item").value !== "") && (document.getElementById("add-item").value !== " "))) {
// 				item = document.getElementById("add-item").value;
// 				controller.addItem(item);
// 				// localStorage.setItem('test', list_item);
// 				//   let localStorage.item ? [] : JSON.parse(localStorage.getItem('tasks'));
// 				return false;
// 			}
// 		}
// 	},
//
//
// }
//
//
// const controller = {
// 	getTodos: async function() {
// 		await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
// 			headers: {
// 				"Content-type": "application/json: charset=YTF-8"
// 			}
// 		})
// 			.then(res => res.json())
// 			.then((todos) => model.items = todos)
// 	},
// 	init: async function () {
// 		await this.getTodos();
// 		view.render()
// 	},
//
//
// 	addItem: function (item) {
// 		list_item = {title: item, completed: false}
// 		model.items.push(list_item)
// 		console.log(list_item)
// 		document.getElementById("add-item").value = ""
// 		// localStorage.setItem('test', list_item);
// 		view.render()
// 	},
//
// 	completeItem: function (item_index) {
// 		model.items[item_index].completed = !model.items[item_index].completed
// 		console.log(model.items[item_index].completed)
// 		view.render()
// 	},
//
// 	deleteItem: function (item_index) {
// 		model.items.splice(item_index, 1)
// 		view.render()
// 	}
// }
//
// function add() {
// 	return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
// 		headers: {
// 			"Content-type": "application/json: charset=YTF-8"
// 		}
// 	})
// 		.then(res => res.json())
// 		.then((todos) => {
// 			console.log('posts: ', todos)
// 			model.items = todos;
//
// 		})
// }
//
// // controller.addItem("Feed doggo.")
// controller.init()
//
// localStorage.setItem('test', 1);
