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

    },
    {
        title:"Can I Be The One?",
        text: `Can I be the one who ties the lace of your shoe, holds your hand, hugs you, kisses you, and never lets go? The one who stays through every high and low, making you smile on your worst days and laughing with you on the best ones?  I wanna be the one who wakes up next to you, tracing lazy circles on your skin as the sun starts creeping in. The one who pulls you closer before you even open your eyes, pressing a soft kiss to your forehead, letting you know I’m right there. The one who listens to your sleepy mumbles, who memorizes the way your voice sounds first thing in the morning. I wanna be the one who holds you when the world feels too much, who kisses your worries away like they were never there.  I wanna walk beside you, hand in hand, feeling like nothing else matters. I wanna build something real with you—something that doesn’t need words because it’s there in every look, every touch, every moment we share. I wanna be the one who knows you, truly knows you—the way you take your coffee, the way your eyes light up when you talk about something you love, the songs that make you dance even when you pretend they don’t.  I wanna be the one who celebrates your wins, the loudest voice in the room when you succeed. But also the one who’s there when things don’t go as planned, reminding you that failing doesn’t mean falling apart. I wanna be the one who listens—really listens—when you talk, even when you’re just rambling about your day or overthinking something at 2 AM.  I wanna sit in silence with you, where no words are needed, just your presence next to mine. I wanna be the one who stays up late with you, talking about the dumbest things, or just lying there, feeling the weight of the night settle around us. The one who hears your fears, your dreams, the thoughts you don’t say out loud. No judgment. Just me, right there, always.  I wanna be the arms you run into when you’re excited, the shoulder you lean on when you’re tired, the safe place you return to no matter where life takes us. I wanna be the one who kisses your forehead when you’re stressed, the one who pulls you into a hug so tight it feels like I’m holding all your broken pieces together.  I wanna dance with you in the rain, laugh with you until we can’t breathe, make memories that don’t fade even in the quietest moments. I wanna grow old with you, watching time pass but never once getting tired of the way loving you feels.  I want you to be the one beside me, watching every Barça match, celebrating every victory, and sharing every heartbreak. I want to sing my favorite songs to you, knowing that every lyric carries a piece of my heart. I want you to be my muse, the inspiration behind every poem I write, every verse filled with my love for you. I want you to wake up each day and choose me, just as I choose you, again and again.  I want to be the warmth that comforts you on cold nights, the steady hand that holds yours through every storm. I want to be the reason behind your smile, the voice that soothes your worries, the love that never wavers. I want to cherish you, protect you, and love you for the rest of my life.  So, can I?  Can I be the one who ties the lace of your shoe, holds your hand, hugs you, kisses you, and loves you—without hesitation, without limits, for as long as you’ll let me?  Because, my love, I don’t just want to be your today—I want to be your always. I want to wake up to your sleepy eyes and soft smiles for the rest of my life. I want to walk beside you, through every season, every storm, every sunrise. I want to love you in every way, in every moment, for all the years we’re given.  So here I am, with my heart in my hands, asking you—  Are you ready to walk this journey with me? Will you be mine forever? Will you let me be the one who loves you, chooses you, and stands by you forever?`
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
