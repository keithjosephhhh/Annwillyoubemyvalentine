// Add navigation functionality to the heart
document.getElementById('switch').addEventListener('change', function(e) {
    if (!this.checked) {
        window.location.href = 'index.html';
    }
});

// Ensure the checkbox starts checked (blue heart) on the poems page
window.onload = function() {
    document.getElementById('switch').checked = true;
}


// Open Form Function
function openForm(formId) {
    document.getElementById(formId).classList.add("active");
}

// Close Form Function
function closeForm(formId) {
    document.getElementById(formId).classList.remove("active");
}

const poems = [
    {
        title: "The Answer to My Prayers 💙✨",
        text: `You make life so much easier and my days infinitely brighter,
        I can’t help but remember those evenings when we used to kiss and hug tighter
        And I felt like time should’ve stood still, freezing everyone except us.
        I miss every second of those moments with you, because the distance between us feels unbearable sometimes.

        Whenever I close my eyes, I see you exactly like when I used to wrap my hands around your waist, almost about to hug you.
        It’s those memories that give me comfort, knowing you’re waiting for me, just as I am waiting for you.
        I can’t wait for the day I’ll hold you close again, feel your warmth, and keep you near my heart where you belong my baby.

        You’ve made my life simpler, my days lighter, but you’ve made my nights tougher.
        Because while the world thinks I’m asleep, I’m wide awake dreaming about you.
        Molly, You’re everything I ever prayed for in a girl, You are the answer to my deepest prayers.

        I love you, baby.`
    },
    {
        title: "Electric Love",
        text: `When I say “You’re pretty”
        I don’t mean pretty like the girls in the magazine,
        I mean pretty, like the rising sun's golden sheen.
        Like Christmas mornings, wrapped in joy's embrace,
        Pretty like a child’s first gaze. 
        
        When I say “You’re pretty”. 
        I don’t imagine pretty like the perfect face of a human,
        I imagine pretty, like the tip of the nose turn red under the winter sun. 
        Like an old handwritten note found after years being lost. 
        Pretty like the warmth of the smile that could melt away the frost
        
        When I say "You're pretty."
        I don’t picture perfect; I see beauty that captures the soul,
        Like the embrace of a hug that makes the universe fade and love takes control.`
    },
    {
        title: "A poet's beautiful verse ✍🏼❤️",
        text: `You look like John Keats would write a poem for you —
        ‘A thing of beauty’, he’d quote. 
        For the rays of sun reflect off your skin like a glow of dawn at the horizon, 
        Where my dream begins. 
        
        You look like Lord Byron would write a poem for you —
        ‘She walks in beauty’, he’d quote. 
        For your face is like a canvas of night, adorned with stars reflecting the sunlight,
        Where my heart takes flight. 
        
        You look like Alfred Lord Tennyson would write a poem for you —
        “The princess”, he’d quote. 
        For your strength and grace are like moonlight’s embrace 
        Where my mind feels it truly belongs. 
        
        
        `
    },
    {
        title: "I want you",
        text: `Tie me with those braids of yours and keep me with you forever. 
        I don’t wanna face this world without you, for your love is my home and you my world. 
        
        Your eyes tell a story I wanna get lost in. 
        Those pretty organs of sight intoxicate me every time I look in them. 
        
        That smile of yours can even cure cancer, what am I in front of it. 
        For it melts my heart, my ego, my pride and surrenders them all at your feet.`
    }, 
    {
        title: "You deserve the world",
        text:  `You deserve every joy this world can bring my girl,
        A tear on your face, makes my heart unfurl.  
        
        You deserve every single flower that blooms my baby,
        A smile on your face, my heart goes crazy. 
        
        You deserve every single blessing my love,
        A sparkle in your eyes, our Lord loves from above. 
        
        You deserve the wish of every shooting star, my life. 
        A whisper in my heart wishes for you to be my wife. 
        
        You deserve to be the muse of poets untold,
        I miss your touch, your warmth and your soul
        
        You deserve the whole world my moon pie,
        If anyone makes you cry, I’ll make sure he dies
        
        My baby You deserve laughter that never fades,
        And I’ll always be a hand that’ll hold you on your weary days
        
        Molly you deserve winter mornings wrapped in golden light,
        And my arms to always hold you safe at night
        
        Baby, you deserve my hands that will never let go
        Through wind, storms, fires, and all your highs and lows
        
        Cutu you deserve the songs sung by the softest breeze
        Our love is strong, it bends the seas
        
        You deserve all my love as vast as the sky,
        Love that’ll never shake or ever run dry
        
        Baby, you deserve the sky when the night turns blue
        Because now, even the moon is jealous of you
        
        You deserve a world, where your dreams take flight 
        With me as your shadow, your king, and your knight
        
        Molly you deserve whispers in a cold night’s air
        Those will be my soft words of love beyond compare 
        
        You deserve moments of love, that will never fade. 
        For my heart will always be for you, unafraid 
        
        Above all of this baby, you deserve me. If fate allows
        To love you deeply today, tomorrow and forever now `

    }
];

function openPoem(index) {
    const modal = document.getElementById("poemModal");
    const poemTitle = document.getElementById("poemTitle");
    const poemText = document.getElementById("poemText");

    poemTitle.innerText = poems[index - 1].title;
    poemText.innerText = poems[index - 1].text;
    modal.style.display = "block";
}

function closePoem() {
    const modal = document.getElementById("poemModal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("poemModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
