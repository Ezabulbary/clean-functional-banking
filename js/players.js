function setPlayerStyle(player){
    player.style.border = '1px solid black';
    player.style.borderRadius = '9px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
};

function addPlayer(){
    const playersContainar = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
        <h4 class="player-name">New player</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae iure neque rem, ab enim iusto sed eius assumenda, suscipit, blanditiis nisi necessitatibus! Repudiandae perspiciatis iste alias recusandae, possimus excepturi molestiae!</p>
    `;
    setPlayerStyle(player);
    playersContainar.appendChild(player);
};

document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
});