const animeList = [
    createAnime("Attack on Titan", "Action|Drama|Dark Fantasy", "https://cdn.myanimelist.net/images/anime/10/47347.jpg", 9.0),
    createAnime("Naruto", "Action|Adventure|Shonen", "https://cdn.myanimelist.net/images/anime/13/17405.jpg", 8.0),
    createAnime("Death Note", "Mystery|Supernatural|Thriller", "https://cdn.myanimelist.net/images/anime/9/9453.jpg", 8.6),
    createAnime("Jujutsu Kaisen", "Action|Supernatural|Shonen", "https://cdn.myanimelist.net/images/anime/1171/109222.jpg", 8.6),
    createAnime("Fullmetal Alchemist: Brotherhood", "Action|Adventure|Fantasy", "https://cdn.myanimelist.net/images/anime/1223/96541.jpg", 9.1),
    createAnime("One Piece", "Action|Adventure|Comedy", "https://cdn.myanimelist.net/images/anime/6/73245.jpg", 8.7),
    createAnime("Demon Slayer: Kimetsu no Yaiba", "Action|Supernatural|Shonen", "https://cdn.myanimelist.net/images/anime/1286/99889.jpg", 8.7),
    createAnime("One Punch Man", "Action|Comedy|Supernatural", "https://cdn.myanimelist.net/images/anime/12/76049.jpg", 8.5),
    createAnime("Tokyo Revengers", "Action|Drama|Supernatural", "images/Tokyo-revengers.jpeg", 8.2),
    createAnime("Black Clover", "Action|Fantasy|Shonen", "images/black-clover.jpeg", 7.4),
    createAnime("Fire Force", "Action|Supernatural|Shonen", "images/fire-force.jpeg", 7.8),
    createAnime("Steins;Gate", "Sci-Fi|Thriller|Drama", "https://cdn.myanimelist.net/images/anime/5/73199.jpg", 9.1),
    createAnime("my hero academia", "Sports|Comedy|Drama", "https://cdn.myanimelist.net/images/anime/10/78745.jpg", 8.0),
    createAnime("Akame ga Kill!", "Action|Drama|Dark Fantasy", "images/akame.jpeg", 7.5),
    createAnime("That Time I Got Reincarnated as a Slime", "Action|Comedy|Isekai", "images/reincarnated-as-a-slime.jpeg", 8.2),
    createAnime("Re:Zero - Starting Life in Another World", "Drama|Fantasy|Isekai", "images/Re-zero-anime%20.jpeg", 8.3),
    createAnime("Sword Art Online", "Action|Adventure|Sci-Fi", "images/sword-art.jpeg", 7.2),
    createAnime("Dragon Ball", "Action|Adventure|Shonen", "https://cdn.myanimelist.net/images/anime/6/20936.jpg", 8.7),
    createAnime("Bleach", "Action|Adventure|Supernatural", "https://cdn.myanimelist.net/images/anime/3/40451.jpg", 8.1),
    createAnime("Hunter x Hunter", "Action|Adventure|Shonen", "https://cdn.myanimelist.net/images/anime/11/33657.jpg", 9.0),
    createAnime("Code Geass", "Action|Drama|Mecha", "https://cdn.myanimelist.net/images/anime/5/50331.jpg", 8.7),
    createAnime("Pokemon", "Adventure|Comedy|Fantasy", "images/pokemon.jpg", 7.5),
    createAnime("Fairy Tail", "Action|Adventure|Fantasy", "https://cdn.myanimelist.net/images/anime/5/18179.jpg", 7.7),
    createAnime("The Seven Deadly Sins", "Action|Adventure|Fantasy", "https://cdn.myanimelist.net/images/anime/8/65409.jpg", 8.0),
    createAnime("Blue Exorcist", "Action|Supernatural|Shonen", "https://cdn.myanimelist.net/images/anime/10/75195.jpg", 7.6),
    createAnime("Assassination Classroom", "Action|Comedy|Shonen", "images/assasination.jpg", 8.1),
    createAnime("Haikyuu!!", "Sports|Drama|Shonen", "https://cdn.myanimelist.net/images/anime/7/76014.jpg", 8.7),
    createAnime("Fruits Basket", "Drama|Romance|Slice of Life", "https://cdn.myanimelist.net/images/anime/4/75204.jpg", 8.0),
    createAnime("Your Lie in April", "Drama|Music|Romance", "https://cdn.myanimelist.net/images/anime/3/67177.jpg", 8.6),
    createAnime("Violet Evergarden", "Drama|Fantasy|Slice of Life", "https://cdn.myanimelist.net/images/anime/1795/95088.jpg", 8.4),
    createAnime("Chainsaw Man", "Action|Supernatural|Shonen", "https://cdn.myanimelist.net/images/anime/1806/126216.jpg", 8.6),
    createAnime("Spy x Family", "Action|Comedy|Slice of Life", "https://cdn.myanimelist.net/images/anime/1441/122795.jpg", 8.6),
    createAnime("Toradora!", "Romance|Comedy|Drama", "https://cdn.myanimelist.net/images/anime/13/75179.jpg", 8.2),
    createAnime("Clannad", "Romance|Drama|Supernatural", "https://cdn.myanimelist.net/images/anime/1804/95033.jpg", 8.2),
    createAnime("Food Wars!: Shokugeki no Soma", "Comedy|Ecchi|School", "images/foodwars.jpg", 8.0),
    createAnime("Blue Lock", "Sports|Drama|Psychological", "images/blue.jpg", 8.5),
    createAnime("Frieren: Beyond Journey's End", "Adventure|Fantasy|Slice of Life", "images/friren.jpg", 8.4),
    createAnime("Kimi ni Todoke", "Romance|Drama|Slice of Life", "images/kimi-no.jpg", 8.0),
    createAnime("Tokyo Ghoul", "Romance|Drama|Slice of Life", "https://cdn.myanimelist.net/images/anime/5/64449.jpg", 7.8),
    createAnime("Horimiya", "Romance|Comedy|Slice of Life", "https://cdn.myanimelist.net/images/anime/1695/111486.jpg", 8.4),
    createAnime("Bloom Into You", "Romance|Drama|Slice of Life", "images/bloom.jpg", 8.1),
    createAnime("My Little Monster", "Romance|Comedy|Slice of Life", "images/little-monster .jpeg", 7.8),
    createAnime("Aoi Hana", "Romance|Drama|Slice of Life", "images/aoi-hana.jpg", 7.6),
    createAnime("Psycho-Pass", "Sci-Fi|Psychological|Thriller", "images/psycho-pass.jpg", 8.3),
    createAnime("Parasyte -the maxim-", "Action|Horror|Psychological", "images/parasyte.jpg", 8.3),
    createAnime("High School DxD", "Action|Comedy|Ecchi", "images/high-school .jpeg", 7.3),
    createAnime("Prison School", "Comedy|Drama|Ecchi", "images/prison.jpeg", 7.6),
    createAnime("High-Rise Invasion", "Action|Supernatural|Horror", "images/high-rise.jpeg", 6.8),
    createAnime("Wistoria: Wand and Sword", "Fantasy|Adventure|Magic", "images/wistoria.jpg", 7.5),
    createAnime("Wrong Way to Use Healing Magic", "Comedy|Fantasy|Isekai", "images/wrong-way.jpg", 7.2),
    createAnime("Mushoku Tensei: Jobless Reincarnation", "Adventure|Fantasy|Isekai", "images/jobless.jpeg", 8.3),
    createAnime("The Eminence in Shadow", "Action|Comedy|Fantasy", "images/in-shadow%20.jpeg", 7.8),
    createAnime("Tsukimichi: Moonlit Fantasy", "Adventure|Fantasy|Isekai", "images/tsukimichi.jpg", 7.4),
    createAnime("My Dress-Up Darling", "Romance|Comedy|Slice of Life", "images/darling.jpeg", 8.0),
    createAnime("Date A Live", "Romance|Sci-Fi|Ecchi", "images/date.jpeg", 7.1),
    createAnime("High School of the Dead", "Action|Horror|Ecchi", "images/Of-the-Dead.jpg", 6.7),
    createAnime("The Quintessential Quintuplets", "Romance|Comedy|Slice of Life", "images/quintuplets-vic%20.jpeg", 7.7),
    createAnime("Kaguya-sama: Love is War", "Romance|Comedy|Drama", "images/kaguya-sama.jpeg", 8.4),
    createAnime("Wind Breaker", "Action|Sports|Drama", "images/wind-breaker.jpeg", 7.9),
    createAnime("Kaiju No. 8", "Action|Sci-Fi|Shonen", "images/kaiju.jpeg", 8.3),
    createAnime("Solo Leveling", "Action|Fantasy|Supernatural", "images/solo.jpg", 8.5),
    createAnime("Classroom of the Elite", "Psychological|Drama|School", "images/classroom-of.jpg", 8.0),
    createAnime("Re:Monster", "Action|Fantasy|Supernatural|Isekai", "images/re-monster.jpg", 7.2),
    createAnime("The Misfit of Demon King Academy", "Action|Fantasy|Supernatural", "images/misfit.jpg", 7.8),
    createAnime("The Legendary Hero is Dead!", "Action|Comedy|Fantasy", "images/legend.jpg", 7.6),
    createAnime("Loner Life in Another World", "Adventure|Fantasy|Isekai", "images/loner.jpg", 7.9),
    createAnime("Tomodachi Game", "Drama|Psychological|School", "images/tomodachi.jpg", 7.8),
    createAnime("Romantic Killer", "Romance|Comedy|Drama", "images/romantic.jpg", 7.5),
    createAnime("Komi Can't Communicate", "Romance|Comedy|Slice of Life", "images/komi.jpg", 8.1),
    createAnime("Hokkaido Girls Are Super Adorable!", "Comedy|Romance|Slice of Life|Ecchi", "images/hokkaido.jpg", 7.4),
    createAnime("The Beginning After The End", "Action|Fantasy|Isekai", "images/begin.jpg", 8.2),
    createAnime("Seraph of the End", "Action|Supernatural|Shonen", "images/seraph.jpg", 7.3),
    createAnime("Claymore", "Action|Horror|Dark Fantasy", "images/claymore.jpg", 7.8),
    createAnime("Gantz", "Action|Horror|Sci-Fi|Ecchi", "images/gantz.jpg", 7.4),
    createAnime("Keijo!!!!!!!!", "Comedy|Sports|Ecchi", "images/keijo.jpg", 6.8),
    createAnime("Kill la Kill", "Action|Comedy|Ecchi", "images/kill.jpg", 8.0),
    createAnime("Monster Musume", "Comedy|Romance|Ecchi", "images/monster-monsume.jpg", 7.1),
    createAnime("Prison School", "Comedy|Drama|Ecchi", "images/prison.jpeg", 7.6),
    createAnime("High School DxD", "Action|Comedy|Ecchi", "images/high-school .jpeg", 7.3),
    createAnime("To Love-Ru Darkness", "Comedy|Romance|Ecchi", "https://cdn.myanimelist.net/images/anime/8/75174.jpg", 7.4),
    createAnime("Resort Boin", "Comedy|Romance|Ecchi", "https://cdn.myanimelist.net/images/anime/13/75587.jpg", 6.9),
    createAnime("OniAi", "Comedy|Romance|Ecchi", "images/oni.jpg", 7.2),
    createAnime("Kiss x Sis", "Comedy|Romance|Ecchi", "images/kissx.jpg", 6.8),
    createAnime("Aki Sora", "Drama|Romance|Ecchi", "images/aki.jpg", 6.7),
    createAnime("Euphoria", "Drama|Psychological|Ecchi", "images/euphoria.jpg", 5.6),
    createAnime("Shoujo Ramune", "Comedy|Romance|Ecchi", "images/ramune.jpg", 7.0),
    createAnime("Bungo Stray Dogs", "Supernatural|Action|Psychological", "images/bungo.jpg", 7.5),
    createAnime("Steins;Gate", "Sci-Fi|Thriller|Drama", "https://cdn.myanimelist.net/images/anime/5/73199.jpg", 9.1),
    createAnime("Another", "Horror|Mystery|Supernatural", "https://cdn.myanimelist.net/images/anime/4/75509.jpg", 7.5),
    createAnime("Higurashi: When They Cry", "Horror|Mystery|Psychological", "images/higurashi.jpg", 7.9),
    createAnime("Monster", "Drama|Mystery|Psychological", "https://cdn.myanimelist.net/images/anime/10/18793.jpg", 8.8),
    createAnime("Ergo Proxy", "Sci-Fi|Mystery|Psychological", "images/ergo.jpg", 8.0),
    createAnime("Serial Experiments Lain", "Sci-Fi|Mystery|Psychological", "images/lain.jpg", 8.1),
    createAnime("The Future Diary", "Action|Mystery|Psychological", "images/future.jpg", 7.4),
    createAnime("Umineko: When They Cry", "Horror|Mystery|Supernatural", "images/umineko.jpg", 7.8),
    createAnime("Boogiepop Phantom", "Horror|Mystery|Supernatural", "images/boogie.jpg", 7.2),
    createAnime("Paprika", "Mystery|Psychological|Sci-Fi", "images/paprika.jpg", 8.0),
    createAnime("Welcome to the N.H.K.", "Comedy|Drama|Mystery", "images/N.H.K.jpg", 8.3),
    createAnime("Paranoia Agent", "Horror|Mystery|Psychological", "images/paranoia.jpg", 8.2),
    createAnime("The Girl from Random Chatting", "Drama|Mystery|Psychological", "images/randomchatting.jpg", 7.1),
    createAnime("The Detective Is Already Dead", "Comedy|Mystery|Romance", "images/detective.jpg", 7.3),
    createAnime("No Game No Life", "Adventure|Comedy|Fantasy|Isekai", "https://cdn.myanimelist.net/images/anime/1074/111944.jpg", 8.0),
    createAnime("Konosuba: God's Blessing on This Wonderful World!", "Adventure|Comedy|Fantasy|Isekai", "images/konosuba.jpg", 8.1),
    createAnime("The Rising of the Shield Hero", "Action|Adventure|Drama|Fantasy|Isekai", "images/shield-hero.jpg", 8.0),
    createAnime("Cautious Hero: The Hero Is Overpowered but Overly Cautious", "Action|Adventure|Comedy|Fantasy|Isekai", "images/cautious.jpg", 7.1),
    createAnime("Arifureta: From Commonplace to World's Strongest", "Action|Adventure|Fantasy|Harem|Isekai", "images/arifureta.jpg", 7.3),
    createAnime("Isekai Quartet", "Comedy|Fantasy|Isekai", "images/quartet.jpg", 7.8),
    createAnime("Isekai Cheat Magician", "Action|Fantasy|Harem|Isekai", "images/isekai-cheat.jpg", 6.9),
    createAnime("The Faraway Paladin", "Action|Adventure|Fantasy|Isekai", "images/paladin.jpg", 7.5),
    createAnime("By the Grace of the Gods", "Adventure|Fantasy|Slice of Life|Isekai", "images/gods-grace.jpg", 7.2),
    createAnime("I'm in Love with the Villainess", "Comedy|Fantasy|Romance|Isekai", "images/inlove.jpg", 7.4),
    createAnime("The Reincarnation of the Strongest Exorcist in Another World", "Action|Fantasy|Isekai", "images/exorcist.jpg", 7.0),
    createAnime("I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too", "Action|Comedy|Fantasy|Isekai", "images/cheatskill.jpg", 7.1),
    createAnime("Reborn as a Vending Machine, I Now Wander the Dungeon", "Adventure|Comedy|Fantasy|Isekai", "images/vending.jpg", 6.8),
    createAnime("The 8th Son? Are You Kidding Me?", "Action|Comedy|Fantasy|Isekai", "images/8th-son.jpg", 7.2),
    createAnime("To Your Eternity", "Action|Supernatural", "images/toyour.jpg", 7.0),
    createAnime("How a Realist Hero Rebuilt the Kingdom", "Action|Drama|Fantasy", "images/realist.jpg", 7.1),
    createAnime("Scissor Seven", "Action|Comedy", "images/scissors.jpg", 7.5),
    createAnime("Tower of God", "Action|Adventure|Fantasy", "images/towerofgod.jpg", 8.1),
    createAnime("Vermiel in Gold", "Action|Fantasy", "images/vermiel.jpg", 7.0),
    createAnime("Yandere Dark Elf", "Fantasy|Romance", "images/yandere.jpg", 6.8),
    createAnime("Monster Girl Doctor", "Sci-Fi|Fantasy|Romance", "images/girldoctor.jpg", 6.9),
    createAnime("Witch and the Beast", "Action|Fantasy|Drama", "images/witch.jpg", 7.3),
    createAnime("Baki", "Action|Martial Arts", "images/baki.jpg", 7.6),
    createAnime("Zom 100", "Action|Comedy|Horror", "images/zom.jpg", 7.7),
    createAnime("Nana", "Drama|Romance", "images/nana.jpg", 8.4),
    createAnime("Neon Genesis Evangelion", "Mecha|Psychological|Sci-Fi", "images/neon.jpg", 8.5),
    createAnime("Cowboy Bebop", "Action|Adventure|Sci-Fi", "images/cowboy.jpg", 8.9),
    createAnime("91 Days", "Action|Drama|Crime", "images/91.jpg", 7.9),
    createAnime("Revenger", "Action|Samurai", "images/revenger.jpg", 6.9),
    createAnime("Black Lagoon", "Action|Crime", "images/lagoon.jpg", 8.1),
    createAnime("Gintama", "Action|Comedy|Sci-Fi", "images/gintama.jpg", 8.7),
    createAnime("Ping Pong the Animation", "Sports|Drama", "images/ping-pong.jpg", 8.3),
    createAnime("Saikik", "Supernatural|Slice of Life|School", "images/sakik.jpg", 7.3),
    createAnime("Level E", "Sci-Fi|Comedy", "images/level.jpg", 7.7),
    createAnime("Mob Psycho 100", "Action|Supernatural|Comedy", "images/mob.jpg", 8.0),
    createAnime("The devil is a part-timer", "Comedy|Fantasy|Slice of Life|Isekai", "images/devil.jpg", 7.6),
    createAnime("My girlfriend is a shobitch", "Comedy|Romance|Ecchi", "images/shobitch.jpg", 6.9),
    createAnime("Dont toy with me miss nagatoro", "Romance|Comedy|Slice of Life", "images/dont-toy.jpg", 7.3),
    createAnime("Fate stay night", "Action|Fantasy|Supernatural", "images/fate.jpg", 7.6),
    createAnime("Fate/strange fake", "Action|Drama|Supernatural", "images/fake.jpg", 6.5),
    createAnime("Soul eater", "Action|Supernatural|Comedy", "images/soul.jpg", 8.0),
    createAnime("witch hat atelier", "Fantasy|Adventure|Magic", "images/hat.jpg", 7.9),
    createAnime("Rent a girlfriend", "Comedy|Romance|Slice of Life", "images/rent.jpg", 7.0),
    createAnime("Elfen lied", "Horror|Psychological|Supernatural", "images/elfen.jpg", 7.6),
    createAnime("The new gate", "Action|Adventure|Fantasy|Isekai", "images/new-gate.jpg", 7.0),
    createAnime("unaware atelier meister", "Comedy|Fantasy|Isekai", "images/unaware.jpg", 6.5),
    createAnime("Fruit of evolution", "Comedy|Fantasy|Ecchi|Isekai", "images/fruit.jpg", 6.6),
    createAnime("My first girlfriend is a gal", "Comedy|Romance|School", "images/gal.jpg", 6.5),
    createAnime("hyouka", "Mystery|School|Slice of Life", "images/hyouka.jpg", 8.1),
    createAnime("noragami", "Action|Supernatural|Comedy", "images/noragami.jpg", 7.7),
    createAnime("dorohedoro", "Action|Dark Fantasy|Comedy", "images/dorohedoro.jpg", 8.1),
    createAnime("dororo", "Action|Adventure|Historical", "images/dororo.jpg", 7.6),
    createAnime("Dandadan", "Action|Comedy|Supernatural", "images/dandadan.jpg", 8.5),
    createAnime(" Masou Gakuen HxH", "Action|Adventure|Shonen", "images/hxh.jpg", 9.0),
    createAnime("my status as an assasin obviously exceeds the hero's", "Fantasy|Comedy|Action", "images/my-status.jpg", 6.8),
    createAnime("The executioner and her way of life", "Action|Adventure|Fantasy", "images/executioner.jpg", 7.8),
    createAnime("boruto", "Action|Adventure|Shonen", "images/boruto.jpg", 6.8),
    createAnime("Hell's paradise", "Action|Adventure|Supernatural", "images/jigokuraku.jpg", 7.5),
    createAnime("Charlotte", "Drama|Supernatural|School", "images/charlotte.jpg", 7.5),
    createAnime("Tougen anki", "Action|Historical|Supernatural", "images/tougen.jpg", 7.0),
    createAnime("Vinland saga", "Action|Adventure|Historical", "images/vinland.jpg", 8.7),
    createAnime("From me to you", "Romance|Slice of Life|Drama", "images/from-me.jpg", 8.0),
    createAnime("Hellsing", "Horror|Action|Supernatural", "images/helsing.jpg", 8.2),
    createAnime("Akumada drive", "Action|Martial Arts|Comedy", "images/akuma.jpg", 7.0),
    createAnime("sakamoto days", "Action|Comedy|Seinen", "images/sakamoto.jpg", 7.8),
    createAnime("Dead mount deathplay", "Action|Supernatural|Mystery", "images/mount.jpg", 7.6),
    createAnime("Deadman wonderland", "Action|Horror|Psychological", "images/deadman.jpg", 7.4),
    createAnime("The ossan newbie adventurer", "Comedy|Fantasy|Isekai", "images/ossan.jpg", 6.8),
    createAnime("Btoom!", "Action|Psychological|Survival", "images/btoom.jpg", 7.1),
    createAnime("Darker than black", "Sci-Fi|Supernatural|Mystery", "images/darker.jpg", 7.9),
    createAnime("cyberpunk edge runners", "Action|Sci-Fi|Cyberpunk", "images/cyberpunk.jpg", 8.3),
    createAnime("kami katsu", "Action|Comedy|Fantasy", "images/kamikatsu.jpg", 7.5),
    createAnime("saga of tanya the evil", "Action|Comedy|Fantasy", "images/tanya.jpg", 7.9),
    createAnime("texhnolyze", "Action|Drama|Psychological", "images/tecxhnolyze.jpg", 7.8),
    createAnime("made in abyss", "Adventure|Fantasy|Mystery", "images/abyss.jpg", 8.9),
    createAnime("slayers", "Action|Adventure|Comedy", "images/slayers.jpg", 8.0),
    createAnime("Summertime rendering", "Comedy|Romance|Slice of Life", "images/summertime.jpg", 7.5),
    createAnime("Rurouni Kenshin", "Action|Historical|Romance", "images/rurouni.jpg", 8.2),
    createAnime("Erased", "Mystery|Supernatural|Psychological", "images/erased.jpg", 8.5),
    createAnime("The World God Only Knows", "Comedy|Romance|Supernatural", "images/worldonly.jpg", 7.8),
    createAnime("Hajime no Ippo", "Action|Sports|Drama", "images/hajime.jpg", 8.9),
    createAnime("Blue Eye Samurai", "Action|Adventure|Fantasy", "images/blueeye.jpg", 7.8),
    createAnime("Trigun", "Action|Adventure|Sci-Fi", "images/trigun.jpg", 8.0),
    createAnime("Inazuma Eleven", "Sports|Comedy|Drama", "images/inazuma.jpg", 7.5),
    createAnime("Knights of Zodiac", "Action|Adventure|Fantasy", "images/knightof.jpg", 7.8),
    createAnime("Redo of Healer", "Action|Adventure|Fantasy|Ecchi", "images/redo.jpg", 7.0),
    createAnime("Gushing over Magical Girls", "Comedy|Fantasy|Slice of Life|Ecchi", "images/gushing.jpg", 6.5),
    createAnime("Goblin Slayer", "Action|Adventure|Fantasy|Dark Fantasy|Ecchi", "images/goblin.jpg", 7.5),
    createAnime("Sentenced to be a Hero", "Action|Adventure|Fantasy|Isekai", "images/sentenced.jpg", 7.2),
    createAnime("Kill Blue", "Action|Slice of Life|Drama", "images/killblue.jpg", 8.5),
    createAnime("To Love-Ru Darkness", "Comedy|Romance|Ecchi", "images/tolove.jpg", 7.4),
    createAnime("The Fragrant flower blooms with dignity", "Drama|Slice of Life|Romance", "images/fragrant.jpg", 7.8),
    createAnime("You and I are polar opposites, but I love you", "Romance|Comedy|Slice of Life", "images/polar.jpg", 7.5),
    createAnime("My Happy Marriage", "Romance|Comedy|Slice of Life", "images/happymarriage.jpg", 7.6),
    createAnime("Sign of Affection", "Romance|Comedy|Slice of Life", "images/signofaffection.jpg", 7.8),
    createAnime("Gosick", "Mystery|Supernatural|Psychological", "images/gosick.jpg", 8.2),
    createAnime("Witch Watch", "Action|Adventure|Fantasy", "images/witchwatch.jpg", 7.9),
    createAnime("Farming Life in Another World", "Adventure|Fantasy|Slice of Life|Isekai", "images/farming.jpg", 7.5),
    createAnime("Pseudo harem ", "Comedy|Romance|Ecchi", "images/psuedoharem.jpg", 7.0),
    createAnime("Blue Box", "Romance|Comedy|Slice of Life", "images/bluebox.jpg", 7.8),
    createAnime("The dangers in my heart", "Romance|Comedy|Slice of Life", "images/dangers.jpg", 7.5),
    createAnime("Relife", "Romance|Comedy|Slice of Life", "images/relife.jpg", 8.0),
    createAnime("The world is still beautiful", "Romance|Drama|Slice of Life", "images/theworldisstillbeautiful.jpg", 7.8),
     createAnime("masamune kun's revenge", "Romance|Comedy|Slice of Life", "images/masamunekun.jpg", 7.5),
      createAnime("watari-kun's ****** is about to collapse", "Romance|Comedy|Slice of Life", "images/watarikuns.jpg", 7.5),
      createAnime("im Getting married to the girl i hate", "Romance|Comedy|Slice of Life", "images/imgettingmarried.jpg", 7.5),
      createAnime("couple of cuckoos", "Romance|Comedy|Slice of Life", "images/coupleof.jpg", 7.5),
      createAnime("can a girl boy friendship survive", "Romance|Comedy|Slice of Life", "images/canaboy.jpg", 7.5),


      
];

function createAnime(title, genres, image, rating) {
    return { title, genres: genres.split("|"), image, rating };
}


const container = document.getElementById("anime-container");
const searchInput = document.getElementById("search");
const genreButtonsContainer = document.getElementById("genre-buttons");
const themeToggle = document.getElementById("theme-toggle");
let selectedGenre = "All";

const savedTheme = localStorage.getItem("aniRecsTheme") || "light";

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("aniRecsTheme", theme);
    if (themeToggle) {
        if (theme === "dark") {
            themeToggle.textContent = "☀";
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeToggle.textContent = "🌙";
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    });
}

applyTheme(savedTheme);

const genres = [
    "All",
    "Action",
    "Adventure",
    "Drama",
    "Fantasy",
    "Dark Fantasy",
    "Mystery",
    "Supernatural",
    "Thriller",
    "Shonen",
    "Sci-Fi",
    "Comedy",
    "Ecchi",
    "Psychological",
    "Sports",
    "Isekai",
    "Music",
    "Romance",
    "Slice of Life",
    "School",
    "Horror"
];

function displayAnime(list) {
    container.innerHTML = "";

    list.forEach(anime => {
        const card = document.createElement("div");
        card.classList.add("anime-card");

        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">
            <h3>${anime.title}</h3>
            <div class="rating">★ ${anime.rating}</div>
        `;

        container.appendChild(card);
    });
}

function displayGenreButtons() {
    genreButtonsContainer.innerHTML = "";

    genres.forEach(genre => {
        const button = document.createElement("button");
        button.classList.add("genre-button");
        button.textContent = genre;

        if (genre === selectedGenre) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            selectedGenre = genre;
            updateActiveGenre();
            filterAndDisplay();
        });

        genreButtonsContainer.appendChild(button);
    });
}

function updateActiveGenre() {
    const buttons = genreButtonsContainer.querySelectorAll(".genre-button");
    buttons.forEach(button => {
        button.classList.toggle("active", button.textContent === selectedGenre);
    });
}

function filterAndDisplay() {
    const value = searchInput.value.toLowerCase();

    const filtered = animeList.filter(anime => {
        const matchesSearch = anime.title.toLowerCase().includes(value);
        const matchesGenre = selectedGenre === "All" || anime.genres.includes(selectedGenre);
        return matchesSearch && matchesGenre;
    });

    displayAnime(filtered);
}

searchInput.addEventListener("input", filterAndDisplay);

displayGenreButtons();
filterAndDisplay();