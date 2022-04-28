const portfolio = document.querySelector('.portfolio');

fetch('data.json')
	.then((res) => res.json())
	.then((data) => {
		portfolio.innerHTML = data.map(
			(item) => `
      <div class="col-md-3 mb-5  ">
      <div class="portfolio__card">
        <img
          class="portfolio__image"
          src=${item.url}
          alt=${item.description}
        />
      </div>
      <p>${item.description}</p>
    </div>
    `
		);
		console.log('data: ', data);
	})
	.catch((err) => console.log('err: ', err));
