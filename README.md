# Angular második csapatmunka

## Feladat
Készítsetek egy webshopot Angular keretrendszer segítségével.

## Előkészítés
- A csapat egyik tagja lépjen be a classroomba, és hozza létre a teamet.
- Klónozza le a repót, amely létrejön, és hozza létre a branch-eket a tagoknak.
(Itt jobb lehet emberenként létrehozni a branch-eket, nem fájlonként.)
- A többiek is lépjenek be az adott csapatba, és klónozzák a repót.
- Üzembe helyezés a szokásos: 
- `cd <repo name>`
- `npm i`
- `code . -r`
- `npm start`

## Csapatmunka
- Válasszátok ki az oldal témáját (sícuccok, főzés, könyvek, filmek stb.).
- Keressétek meg a hozzávalókat: képek, egyéb adatok.
- Egyenlő arányban osszátok el a feladatokat.
- Minden komponensen csak egy ember dolgozzon.
- Beszéljétek meg a stílust.
- Osszátok ki, hogy ki melyik feladatot végzi el: el kell készíteni az osztályokat, 
majd három komponenst kell készíteni. Ez 4 jól elkülönülő feladat, időrendben.  
- Ha megvan minden hozzávaló, akkor össze kell állítani az oldalt a szükséges 
komponensekből. Ezt érdemes együtt csinálni.
- Miután minden megfelelően működik, csak akkor fogjatok hozzá a stílusok 
testreszabásának. Amit csak lehet, a komponensek saját stíluslapjába írjatok.
- A Git közös használatáról konzultálunk a projektindító megbeszélésen.

## Alap osztályok
Mielőtt hozzákezdenétek a komponensek generálásához, készítsétek el a 
szükséges oszályokat és szolgáltatásokat (service).
- Product osztály: id, catId, name, description, image, price, stock, featured, active
- Category osztály: id, name, description
> _Ezeket a model almappába érdemes elhelyezni az app mappán belül, hogy egy helyen legyenek._
- ProductService: ez egy service legyen, így tudtok egyet generálni a service almappába: 
`ng g service service/product`
> A ProductService tartalmazzon egy list nevű változót, amely a termékek tömbje legyen.  
> Ebben szerepeljen random adatokkal legalább 50 termék, segítség: 
[Mockaroo](https://mockaroo.com)

## Home component
Amint látjátok, a fő komponenseket már elkészítettem, és a menüt is beállítottam.
- Ez a főoldala a webshopnak.
- Jelenjen meg egy kiemelt terméksor az oldal tetején.  
> 5 kiemelt terméket tartalmazzon, azok közül jelenjenek meg, amelyeknek featured tulajdonsága true.
- Jelenjen meg egy akciós terméksor a kiemelt termékek alatt, ide bármilyen random termék 
kerülhet, szintén 5 darab legyen.

## Category oldalak
A kategóriaoldalak linkjét a ConfigService-ben tudjátok átnevezni.
- Jelenjen meg itt is a kiemelt terméksor 5 termékkel, de ezeknek már ebből a kategóriából kell jönnie. 
Ezek azok a termékek, amelyek az adott kategóriához tartoznak és a featured tulajdonságuk true.
- Jelenjen meg alatta a terméklista. Itt az összes termék, amely 
az adott kategóriában található, legyen látható egy rácsrendszerben. Azt, hogy melyik termék melyik kategóriában van, a catId mondja meg.
- Legyen a terméklista tetején egy szűrőmező. Ez egy input mező, ha gépelni kezdenek bele, akkor 
a név alapján kezdje el szűrni a termékeket, a legutóbbi feladathoz hasonlóan.

## Szükséges komponensek
Ezeket nektek kell legenerálni, például így: `ng g c common/product-card`

### 1. Termékkártya komponens
Ez jeleníti meg az egyes termékeket. Az alábbi részei vannak:
- Termékkép, teljes szélességében a kártya felső 30-50% át foglalja el.
- Alatta egymás alatt: név, rövid leírás, készlet, ár. A formázás rátok van bízva. 
Kiindulásnak jó lehet (de módosítsátok): `https://getbootstrap.com/docs/4.6/components/card/#example`
- Működése: input tulajdonságként kapja meg a megjelenített terméket, 
pl.: `<app-product-card [product]="product"></app-product-card>`
- Statikus komponens, azaz nem kell bele output tulajdonság (egyelőre :))))

### 2. Terméklapozó komponens
Az öt terméket jeleníti meg. A főoldalon kettő, a kategóriaoldalakon egy van belőle, 
csak különböző termékekkel. Tehát ez jeleníti meg a főoldalon a kiemelt és akciós 
termékeket, a kategóriaoldalakon pedig a kategória kiemelt termékeit.
- Működése: input tulajdonságként kapja meg az 5 terméket. *ngFor használatával 
jeleníti meg őket, minden termék egy product-card komponens lesz.
- Extra: ha valaki nagyon unatkozik, akkor több termék is lehet benne, jobbra-balra 
lapozó gombokkal.

### 3. Terméklista komponens
Ez a komponens hasonlóan működik, mint a terméklapozó, de ez korlátlan számú terméket 
képes megjeleníteni.
- Működése: input tulajdonságként kapja meg a termékek tömbjét. Ezeket bejárva (*ngFor) 
minden terméket egy product-card komponenssel jelenít meg.
- Szűrés: generáljatok egy filter pipe-ot, és azt alkalmazzátok a szűrésre. 
> Legyen egy input mező a termékek felett (de ezen a komponensen belül).  
> Amikor módosítják a tartalmát, akkor módosuljon egy változó, pl.: `phrase`.  
> Ez a változó legyen átadva a filternek, ami ez alapján szűrje le a 
kapott termékek tömbjét. Ezt ott tudjátok alkalmazni, ahol az *ngFor 
bejárja a termékeket, pl.:  
```html
<tr *ngFor="let product of products | filter:phrase">
```
> Működő példa: `https://github.com/Training360/str-angular-002/tree/main/angular-components-pipes`

## Megjelenés
A Bootstrap keretrendszert és a Font Awesome-ikonokat előre telepítettem és beállítottam. 
- Írjatok egyéni SCSS-állományokat igény szerint, alakítsátok a színeket és a megjelenést 
a saját ízlésetek alapján. 
- RESZPONZIVITÁS: mobil nézetben 1, tablet nézetben 2 és asztali nézetben 5 termék 
jelenjen meg egymás mellett. A menüt már megoldottam.
- Termékek képei: a képeket az `app/assets` mappába helyezzétek el. Ez egy 
speciális mappa, a webpack átmásolja a kész alkalmazásba. Ha, mondjuk, 
ebben a mappában létrehozol egy `img` almappát a képeknek, akkor egy képet így 
érsz el: `/assets/img/logo.png`. A képeket érdemes egyforma méretűre vágni, hogy 
ne kelljen vele annyit dolgozni a stílusnál.

## Extra funkciók
- A lista nézetben lehessen a termékeket szűrni nemcsak név, hanem más paraméterek alapján is.
- A lista nézetben lehessen rendezni is a termék kártyákat, mondjuk, ár, név, akció, kiemelt alapján.

-------

# Második felvonás
> A második körben a már elkészült alkalmazást kell továbbfejleszteni. A feladat 
egy adminisztrációs felület készítése, ahol a termékeket szerkeszteni lehet. Ez 
az adminfelület a termékeket már élő szerverről fogja betölteni.

## AdminComponent
- Hozzatok létre egy új komponenst admin néven.
- Állítsátok be, hogy ez megjelenjen a menüben és az `admin` URL-en legyen 
elérhető.
- Ezen az oldalon fog megjelenni egy szerkesztő komponens, ahol a termékek 
adatait lehet módosítani.

## DataEditorComponent
- Hozzatok létre egy új komponenst, a neve data-editor legyen. Ezt a komponenst 
helyezzétek el az admin oldalon.
- Jelenjen meg benne egy adatlista táblázatos formában (ez lehet valóban egy 
táblázat vagy ahhoz hasonlóan egy divekből vagy komponensekből álló lista).
- Ez a komponens a termékek adatainak a szerkesztését látja majd el.
- Az adatsorokban az egyes adatok input elemként jelenjenek meg, kétirányú 
adatkötéssel. Minden adatsor végén legyen három gomb a fő műveletekhez. Az `id` 
tulajdonságot ne lehessen szerkeszteni.
- Az adatlistát lehessen szűrni egy bizonyos oszlop alapján egy beviteli 
mezőbe írva.

## JSON Server
- Költöztessétek át a termékek adatait a ProductService-ből egy JSON-fájlba, és 
a tanultak szerint indítsatok egy json-server-t, amely kiszolgálja a termék adatokat, és lehetővé teszi a termékek szerkesztését.  
[json-server dokumentáció](https://github.com/typicode/json-server)

## ProductService
- Az alkalmazás már rendelkezik a ProductService szolgáltatással, ezt kell 
továbbfejleszteni.
- Készítsetek metódusokat, amelyek lekérik az összes terméket, frissítenek, 
törölnek bizonyos termékeket az adatbázisból (getAll, update, remove).
- Ezek mind a json-server szabványos kéréseit használják az adatok valós 
frissítésére.
- A getAll esetén nem kell paraméter, mivel itt az összes terméket le akarjuk 
kérni, de az update és remove metódusoknak át kell adni az adott terméket, hogy 
az id alapján meg tudjuk határozni, hogy a szerver melyiket frissítse vagy 
törölje.

## Extrák
- Az adminoldalon a táblázat alatt vagy felett legyen egy lapozó, és ne az 
összes termék jelenjen meg egyszerre, csak egy oldalnyi.
- A szűrés az admin oldalon ne csak névre működjön, hanem a termékek többi 
adatára is lehessen szűrni.
- Az admin oldalon a táblázatban az adatokat lehessen az összes oszlop 
szerint rendezni (elég csak növekvő sorrendben, de plusz pont, ha lehet 
az irányt is változtatni).
- Az adminoldalon lehessen új termékeket is felvenni az adatbázisba.

## Sok sikert!

