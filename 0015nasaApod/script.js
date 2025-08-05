const resNav = document.getElementById('results-nav');
const favNav = document.getElementById('favorites-nav');
const imgsContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

const count = 3;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

const updateDOM = () => {
	resultsArray.forEach((res) => {
		// card container
		const card = document.createElement('div');
		card.classList.add('card');
		// link
		const link = document.createElement('a');
		link.href = res.hdurl;
		link.title = 'View Full Image';
		link.target = '_blank';
		// img
		const image = document.createElement('img');
		image.src = res.url;
		image.alt = 'NASA Picture of the Day';
		image.loading = 'lazy';
		image.classList.add('card-img-top');
		// card body
		const cardBody = document.createElement('div');
		cardBody.classList.add('card-body');
		// card title
		const cardTitle = document.createElement('h5');
		cardTitle.classList.add('card-title');
		cardTitle.textContent = res.title;
		// save text
		const saveText = document.createElement('p');
		saveText.classList.add('clickable');
		saveText.textContent = 'Add to Favorites';
		// card text
		const cardText = document.createElement('p');
		cardText.classList.add('card-text');
		cardText.textContent = res.explanation;
		// footer container
		const footer = document.createElement('small');
		footer.classList.add('text-muted');
		// strong
		const date = document.createElement('strong');
		date.textContent = res.date;
		// copyright
		const copyright = document.createElement('span');
		const copyrightRes = res.copyright ? ` ${res.copyright}` : '';
		copyright.textContent = copyrightRes;
		// append
		footer.append(date, copyright);
		cardBody.append(cardTitle, saveText, cardText, footer);
		link.appendChild(image);
		card.append(link, cardBody);
		imgsContainer.appendChild(card);
	});
};

const getNasaPictures = async () => {
	try {
		const res = await fetch(apiUrl);
		resultsArray = await res.json();
		console.log(resultsArray);
		updateDOM();
	} catch (error) {
		console.log('Something went wrong: ', error);
	}
};

// getNasaPictures();

{
	/* 
    <div class="card">
		<a href="#" title="View Full Image" target="_blank">
			<img
				src="https://apod.nasa.gov/apod/image/2508/M31Oxy_Collab_5415.jpg"
				alt="NASA Picture of the Day"
				class="card-img-top"
			/>
		</a>
		<div class="card-body">
			<h5 class="card-title">Title of Image</h5>
			<p class="clickable">Add to Favorites</p>
			<p class="card-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
				ipsam placeat earum iure aperiam explicabo et saepe tempore
				asperiores blanditiis magnam aliquam exercitationem ducimus
				delectus, libero reprehenderit voluptatum vero possimus. Laboriosam
				hic suscipit, vitae fuga voluptatem, qui sint delectus dolor
				dignissimos quod impedit vel temporibus tempore? At quaerat, quos
				possimus nesciunt ducimus eum, sint, autem aut magni veniam
				repellendus cumque.
			</p>
			<small class="text-muted">
				<strong>12-12-2024</strong>
				<span>Copyright Info</span>
			</small>
		</div>
	</div> 
*/
}
