document.addEventListener("DOMContentLoaded", () => {
    const progresso = document.getElementById("progresso");
    const btnInizia = document.getElementById("btn-inizia");
    const overlayIniziale = document.getElementById("overlay-iniziale");
    const cakeWorld = document.getElementById("cake-world");
    const sunsetScene = document.getElementById("sunset-scene");
    const transText = document.getElementById("transizione-testo");
    const btnMessaggio = document.getElementById("btn-messaggio");
    const hintClick = document.getElementById("hint-click");
    const containerMessaggi = document.getElementById("container-messaggi");
    const musica = document.getElementById("musica-sottofondo");

    const frasi = [
        "Chiara", "quest'oggi", "è un giorno speciale", "e per questo motivo", "colgo l'occasione del tuo compleanno",
        "per dedicarti due parole", "che probabilmente", "non sarei mai riuscito", "a dirti personalmente.",
        "Ho preparato", "questo piccolo regalo", "che spero apprezzi...", "mettendo cura", "in ogni dettaglio.",
        "Sai cosa significa il tuo nome?", "Significa...", "luminosa, o... splendente", "perciò", "lascia che questa giornata",
        "splenda come splendi tu.", "Ti auguro il meglio", "che la tua vita sia serena", "e splendente 😁",
        "e che Dio ti doni", "un anno felice.", "Ti auguro", "di non perdere il modo", "in cui guardi il mondo", "di continuare",
        "a trovare il bello", "nelle piccole cose", "di avere gli occhi", "capaci di emozionarsi", "davanti a un cielo colorato",
        "come questo 😁", "e ti auguro", "ogni giorno", "di trovare un tramonto", "che ti porti un sorriso", "anche il giorno dopo.",
        
        // ---- PAUSE ----
        " ",
        " ",
        "In queste ultime settimane", "ti ho considerata", "in una maniera diversa", "e anche se", "molto spesso", "mi limito a un...",
        "\"ciao\" o un... \"come va?\" 😐", "ho sempre voluto andare oltre", "ma non sempre ci riesco", "è come se",
        "avessi dimenticato come si fa...", "a volte", "faccio passi troppo lunghi", "e questo mi fa capire", "quanto sono umano",
        "in tutti i miei errori", "nonostante la mia inesperienza.",
        
        // ---- PAUSE ----
        " ",
        " ",
        "In conclusione:", "ho pensato parecchio", "a questo messaggio",
        "poiché a voce...", "non mi viene mai", "in modo naturale", "o spontaneo, si potrebbe dire.",
        "Mi piacerebbe avere una conversazione", "e conoscerti meglio...", "nonostante le difficoltà", "perciò",
        "spero che questo messaggio", "sia solo l'inizio",
        "di una lunga conversazione <img src=\"happy.png\" alt=\"happy\" style=\"display: inline-block; height: 1.5em; width: auto; margin-top: 8px;\">"
    ];

    setTimeout(() => { progresso.style.width = "100%"; }, 500);
    setTimeout(() => {
        document.querySelector(".barra-caricamento").style.display = "none";
        document.getElementById("testo-stato").style.display = "none";
        btnInizia.classList.remove("hidden");
    }, 3500);

    btnInizia.addEventListener("click", () => {
        overlayIniziale.style.opacity = "0";
        setTimeout(() => {
            overlayIniziale.classList.add("hidden");
            cakeWorld.classList.remove("hidden");
            avviaTorta();
        }, 1000);
    });

    function avviaTorta() {
        const plate = document.querySelector(".plate");
        const candle = document.querySelector(".candle-number");
        plate.classList.add("animate-fall");
        setTimeout(() => document.querySelector(".d1").classList.add("animate-fall"), 600);
        setTimeout(() => {
            const c1 = document.querySelector(".c1");
            c1.classList.add("animate-fall");
            c1.querySelectorAll(".drip").forEach(d => d.classList.add("animate-drip"));
        }, 1000);
        setTimeout(() => document.querySelector(".d2").classList.add("animate-fall"), 1600);
        setTimeout(() => {
            const c2 = document.querySelector(".c2");
            c2.classList.add("animate-fall");
            c2.querySelectorAll(".drip").forEach(d => d.classList.add("animate-drip"));
        }, 2000);
        setTimeout(() => document.querySelector(".d3").classList.add("animate-fall"), 2600);
        setTimeout(() => {
            const c3 = document.querySelector(".c3");
            c3.classList.add("animate-fall");
            c3.querySelectorAll(".drip").forEach(d => d.classList.add("animate-drip"));
        }, 3000);
        setTimeout(() => { 
            candle.classList.add("animate-fall");
            setTimeout(() => {
                document.getElementById("titolo-auguri").style.opacity = "1";
                hintClick.style.opacity = "1";
            }, 700);
        }, 3800);
    }

    document.getElementById("group-candele").addEventListener("click", function() {
        if (!this.classList.contains("off")) {
            this.classList.add("off");
            hintClick.style.opacity = "0";
            setTimeout(() => btnMessaggio.classList.add("show-btn"), 2500);
        }
    });

    btnMessaggio.addEventListener("click", () => {
        cakeWorld.style.opacity = "0";
        cakeWorld.style.transform = "scale(0.7)";
        
        setTimeout(() => {
            musica.play().catch(e => console.log("Audio bloccato dal browser:", e));
        }, 3000);

        setTimeout(() => {
            transText.classList.remove("hidden");
            transText.style.opacity = "1";
            setTimeout(() => {
                transText.style.opacity = "0";
                setTimeout(() => {
                    transText.classList.add("hidden");
                    cakeWorld.classList.add("hidden");
                    sunsetScene.classList.add("scena-attiva");
                    
                    document.querySelector(".cielo-finale").style.animation = "apparizioneRosa 120s linear forwards";
                    document.querySelector(".sole").style.animation = "tramontoRosso 120s linear forwards";
                    document.querySelector(".collina-dietro").style.animation = "scurisciDietro 120s linear forwards";
                    document.querySelector(".collina-davanti").style.animation = "scurisciDavanti 120s linear forwards";
                    
                    avviaSequenzaMessaggi();
                }, 1000);
            }, 3000);
        }, 1000);
    });

    async function avviaSequenzaMessaggi() {
        for (let i = 0; i < frasi.length; i++) {
            const p = document.createElement("p");
            p.className = "messaggio-testo";
            p.innerHTML = frasi[i];
            containerMessaggi.appendChild(p);

            await new Promise(r => setTimeout(r, 100));
            p.classList.add("visibile");

            await new Promise(r => setTimeout(r, 2200)); 

            p.classList.remove("visibile");
            await new Promise(r => setTimeout(r, 1200)); 
            p.remove();
        }
    }
});
