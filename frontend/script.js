
const beerCardComponent = function (name, company, type) {
    console.log(company);
    return `
        <div class="card">
            <div class="beerName">${name}</div>
            <div class="beerCompany">${company}</div>
            <div class="beerType">${type}</div>
        </div>
    `
}


    //const beerCardComponent : Ez a komponens(vázlat), ezt kell legelőször megtervezni. Ebből kell összerakni a feladatot
    //10 db sört akarok kirenderelni. A fv-nyel teszem be a html-be. A return azért kell, h beküldjük.
    //ha ez nem függvény lenne, hanem sima string, akkor nemlehetne beletenni változó értékekekt paraméterként.
    //a fv. paramétereinek (name, company, type)
    //ezt külön kezeljük, hogy újra fel tudjuk használni 10-szer 10 új adattal


    const beerTitleComponent = `
              <h1>Beers</h1>
                  `;

    //alább beerTitleComponent néven létrehoztunk egy változót, amit fentebb határoztunk meg.
    //Ehelyett az is egy jó megoldás lett volna, ha nem hozunk létre argumentumot, hanem a `` között lévő részt illesztjük a változó nevének a helyére

    const loadEvent = function () {
        const rootElement = document.getElementById("root");
        console.log(rootElement);
        rootElement.insertAdjacentHTML ("beforeend", beerTitleComponent)
       
        console.log(beers.cards);
        console.log(beers.logo);

        for (const beer of beers.cards) {
            console.log(beer)
           // console.log(beers.cards[0].title) - ehelyett hoztuk létre a beer iteratort,ami megváltoztathatja  a beerek számát
            rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text))

        }

    }


    //az of után a tömb nevét kell beírni, ezt jelen esetben fentebb határoztuk meg
    //az of elé bármi írható, kisbetűvel, egyes számban
    //tömb esetében for ciklust használunk

    //insertAdjacentHTML: ez egy metódus,(ami már eleve megvan írva, mi csak használjuk) 2 stringet kér: egy position stringet és egy olyan stringet, amit html kóddá tud konvertálni 

    //for ciklus melyiket használjam, attól függ , h van-e adat. Ha van akkor for of-t használom.
    // ha nincs adat a sima for loop -t (azaz i++)

    //


    window.addEventListener("load", loadEvent)
    
    console.log(window)

    //a js azonnal létrehoz egy window objektumot, ezt tudjuk elindítani, ezt látja a böngésző
    //addEventListener - eseményfigyelő, a load eseményre tudjuk rátenni, ez hívja meg, enélkül nem történik semmi
