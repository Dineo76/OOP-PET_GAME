
class Pet {
    constructor(name, sound, image, soundUrl) {
        this.name = name;
        this.sound = sound;
        this.image = image;
        this.soundUrl = new Audio(soundUrl);
        this.playCount = 0;
    }

    speak() {
        alert(this.sound);
        this.soundUrl.currentTime = 0;
        this.soundUrl.play();
    }

    play() {
        this.playCount++;
        this.speak();
        updateCounter(this.playCount);
        showFunActions(this.name);
    }

}
let currentPet = null;

function choosePet(type) {
    if (type === 'bunny') {
        currentPet = new Pet(
            'Bunny',
            'cluck! cluck!🐇',
            'https://i.pinimg.com/736x/e8/dc/90/e8dc90e39d2561a1ff4886b6a70c068b.jpg',
            'media/rabbit-sounds-358172.mp3'
        );
    } else if (type === 'fish') {
        currentPet = new Pet(
            'Fish',
            'blurp!🐠',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfT9jm7A6yqi3kU9MhAGyBWgsLvMPCSf5L2Q&s',
            'media/fish-jumping-splash-2-96871.mp3'
        );
    } else if (type === 'lion') {
        currentPet = new Pet(
            'Lion',
            'roar!🦁',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvY3KsKfW7J5mcz3YblRajOYuDrxUcsGTfQ&s',
            'media/lion-roar-ai-cinematic-371855 (1).mp3'
        );
    } else if (type === 'peacock') {
        currentPet = new Pet(
            'Peacock',
            'honks!🦚',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAGDuaz3zlFn5m2rke_d9Y9LG5A1xp0y1Mw&s',
            'media/nearby-peacock-call-220346.mp3'
        );
    }

    document.getElementById('petImage').src = currentPet.image;
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
}

function playWithPet() {
    if (currentPet) {
        currentPet.play();
    }
}

function updateCounter(count) {
    document.getElementById('counter').innerText = `Times played: ${count}`;
}

function showFunActions(petName) {
    let actions = [];

    if (petName === 'Bunny') {
        actions = ['cluck', 'eating', 'grooming'];
    } else if (petName === 'Fish') {
        actions = ['blurp', 'social', 'very active'];
    } else if (petName === 'Lion') {
        actions = ['roar', 'leadership', 'confidence'];
    } else if (petName === 'Peacock') {
        actions = ['creative', 'center of attention', 'charismatic'];
    }

    const actionBox = document.getElementById('actions');
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';

    for (let i = 0; i < actions.length; i++) {
        actionBox.innerHTML += `✅ ${actions[i]}<br>`;
    }
}
