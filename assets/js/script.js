
const imagesDiv = document.querySelector('.images');
const storiesDiv = document.querySelector('.stories');

// fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=10&fields=id,api_link,title,image_id,artist_display,publication_history,place_of_origin,date_display,copyright_notice')
// .then(response => response.json())
// .then(data => {
//     console.log(data.data[6].publication_history)
//     const iiif_url = data.config.iiif_url
  
//     for(var i = 0; i < Object.keys(data.data).length; i++) {
//         var imgEl = document.createElement("img");
//         imgEl.className = 'artImg';
//         const imgUrl = `${iiif_url}/${data.data[i].image_id}/full/843,/0/default.jpg`
//         imgEl.src = imgUrl;
//         imagesDiv.appendChild(imgEl);
//         // -------
//     }
// })
// .catch(err => console.log(err.message));
