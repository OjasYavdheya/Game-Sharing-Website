window.addEventListener('DOMContentLoaded', function() {
    const gamesList = document.getElementById('gamesList');
    let games = JSON.parse(localStorage.getItem('games') || '[]');
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.img}" alt="${game.title}">
            <div class="info">
                <h3>${game.title}</h3>
                <p>${game.desc}</p>
                <div class="price">Free</div>
                <a class="download-btn" href="${game.zip}" download="${game.title}.zip">Download</a>
                <button class="delete-btn" style="margin-top:10px;background:#d9534f;color:#fff;border:none;padding:7px 18px;border-radius:4px;font-weight:bold;cursor:pointer;">Delete</button>
            </div>
        `;
        // Delete button functionality
        card.querySelector('.delete-btn').onclick = function() {
            games.splice(i, 1);
            localStorage.setItem('games', JSON.stringify(games));
            card.remove();
        };
        gamesList.prepend(card);
    }
});
