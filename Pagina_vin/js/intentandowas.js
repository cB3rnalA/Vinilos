const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')


/// api URL ///
const apiURL = 'https://api.lyrics.ovh';


/// adding event listener in form

form.addEventListener('submit', e => {
    e.preventDefault();
    searchValue = "Dream theater Octavarium"

    if (!searchValue) {
        alert("There is nothing to search")
    }
    else {
        searchSong(searchValue)
    }
})


//search song 
async function searchSong(searchValue) {
    const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`)
    const data = await searchResult.json();

    // console.log(finaldata)
    showData(data)
    result.innerHTML = `
    <ul class="song-list">
    ${data.data
            .map(song => `<li>
                    <div>
                        <img src="${song.artist.picture}" alt="Artist image">
                        <strong>${song.artist.name}</strong> - ${song.title} 
                    </div>
                </li>`
            )
            .join('')}
    </ul>
`;
}



//display final result in DO
function showData(data) {


}



