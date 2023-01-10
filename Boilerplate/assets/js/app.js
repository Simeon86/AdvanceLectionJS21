window.addEventListener('DOMContentLoaded', (event) => {
	// alert();

	// var h1 = document.querySeletor('h1')

	// console.log(h1)


// това се прави за да се повдигне javascripskiqt фаил нагоре във htmla


	var arr = [
			{
				name: 'John',
				lastName: 'Doe',
				age: '24',
				position: 'Back End Engineer',
				ganeder: 'male',
				avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			},
			{
				name: 'Joahn',
				lastName: 'Sims',
				age: '22',
				position: 'Front end Programing',
				ganeder: 'female',
				avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg"',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',					
			},
			{
				name: 'Alex',
				lastName: 'Jamson',
				age: '28',
				position: 'UX Designer',
				ganeder: 'male',
				avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-11.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			},
			{
				name: 'Curtis',
				lastName: 'Black',
				age: '27',
				position: 'UI Designer',
				ganeder: 'male',
				avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-12.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			},
			{
				name: 'John',
				lastName: 'Blue',
				age: '30',
				position: 'Programing',
				ganeder: 'male',
				avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-13.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			}
		];

		arr.forEach(function(person) {
			console.log(person)
		})

		var insert = document.querySelector('#insert');

		document.createElement("div") // Виртоален елемент, който не съществува, но може да се създаде в конзолата
		//var test = document.createElement('div')
		//undefined
		//test
		//<div>​</div>​

		// 	test.innerText = "Валериа"
		// 'Валериа'
		// test
		// <div>​Валериа​</div>​
		// insert
		// <div id=​"insert">​ ​</div>​
		// insert.appendChild(test)
		// <div>​Валериа​</div>​

		// 	insert.append(document.createElement('div')) // така се създават нови дивове 
		// undefined
		// insert
		// <div id=​"insert">​<div>​</div>​" "</div>​


		// insert.innerHTML = '<div>TEST</div>'  -друг вариант за създаване на divove
		// '<div>TEST</div>'
		// insert.innerHTML = '<div>TEST131314</div>'
		// '<div>TEST131314</div>'

		console.log(insert);

/////////////////////////////////////////////////

	// Creat Virtual Element  

	var templete = document.createElement("div") // така се създават виртуални елементи
	
	// Add Class
	templete.classList.add('card1') // така създаваме нови класове

	// Add HTML Inside
	templete.innerHTML = `<div class="personal-information">
		<div class="avatar">
			<img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="name">
		</div>
		<h2>UX Designer</h2>
		<h3>Simeon Nikolov</h3>
		<h4>Expirience: 1 years</h4>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		</p>
	</div>`
	console.log(templete);




	function createCard(person) {

			//Create Virtual Element
			var card = document.createElement("div");
			
			// Add Class
			card.classList.add('card');

			// Add HTML Inside
			card.innerHTML = `<div class="personal-information">
				<div class="avatar">
					<img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="name">
				</div>
				<h2>UX Designer</h2>
				<h3>${person.name} Nikolov</h3>
				<h4>Expirience: 1 years</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				</p>
			</div>`

		return card;
		}

		console.log(createCard({
			name: 'Ivan'
		}))
});
///////////////////////////////

var arr = [
			{
				name: 'John',
				lastName: 'Doe',
				age: '24',
				position: 'Back End Engineer',
				ganeder: 'male',
				avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			},
			{
				name: 'Joahn',
				lastName: 'Sims',
				age: '22',
				position: 'Front end Programing',
				ganeder: 'female',
				avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg"',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',					
			},
			{
				name: 'Alex',
				lastName: 'Jamson',
				age: '28',
				position: 'UX Designer',
				ganeder: 'male',
				avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-11.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			},
			{
				name: 'Curtis',
				lastName: 'Black',
				age: '27',
				position: 'UI Designer',
				ganeder: 'male',
				avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-12.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			},
			{
				name: 'John',
				lastName: 'Blue',
				age: '30',
				position: 'Programing',
				ganeder: 'male',
				avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-13.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			}
		];

		var insert = document.querySelector('#insert')

		arr.forEach(function(person) {
			console.log(person)
		
		var cart = createCart(person);
		var x = 1

		insert.append(cart);

		})

		function createCart(person) {

			//Create Virtual Element
			var cart = document.createElement("div");
			
			// Add Class
			cart.classList.add('cart');

			// Add HTML Inside
			cart.innerHTML = `<div class="personal-information">
				<div class="avatar">
					<img src="${person.avatar}" alt="${person.name} ${person.lastName}">
				</div>
				<h2>${person.position}</h2>
				<h3>${person.name} ${person.lastName} / Age: ${person.age}</h3>
				<h4>Expirience: 1 years</h4>
				<p>${person.description}
				</p>
			</div>`
		
		return cart;
	}
