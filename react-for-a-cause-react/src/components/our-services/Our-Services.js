import React from 'react';
import './Our-Services.css';

function OurServices() {
  return (
    <div className="container">
      <div id="main-title-container">
        <h1 id="main-title">Hogyan tudsz segíteni?</h1>
      </div>

      <p id="intro">
        Céljaink: Kapcsolatfelvétel külföldi menhelyekkel Ivartalanítási akciók szervezése Oktatói- és információterjesztõi tevékenység az
        állatvédelemrõl, alapvetõ állattartási szokásokról; mindezt óvodákban, ált. iskolákban Terápiás céllal, idõsek otthonába látogatás kutyusokkal
        Fajta tiszta kutyák, cicák tenyésztési körülményeinek megváltoztatása, egy független szervezet létrehozása, amely a tenyésztési követelmények
        megvalósítását valóban ellenõrzi Állatvédelmi Õrség létrehozása a térségben, kooperációban a rendõrséggel, polgárõrséggel és természetesen az
        önkormányzatokkal A késõbbiekben egy kulturált menhely létrehozása
      </p>

      <div className="all-services-cards">
        <div className="services-cards">
          <img src="https://velenceito.info/wp-content/uploads/2019/11/DSCF1926.jpg" alt="pic" />
          <div className="services-cards-text">
            <h2>Adomány</h2>
            <p>Amivel segíteni tudod mentvényeink életét:</p>
            <ul>
              <li>pici, beteg kölykök erősítéséhez STARTER és JUNIOR táp</li>
              <li>KIS és KÖZEPES méretű nyakörvek és pórázak</li>
              <li>műanyag vagy fém szállító box</li>
              <li>Folyamatosan, szállításban segítő önkénteseket keresünk Heves megyében és Budapesten!</li>
            </ul>
          </div>
        </div>
        <div className="services-cards">
          <img src="https://media.istockphoto.com/photos/happy-mixed-breed-dog-posing-with-a-kitten-on-his-head-picture-id1210341751?k=20&m=1210341751&s=612x612&w=0&h=v0Dw0214h_1zUG1bZTXx8IG0QwfOwi3Iqd52QNii6ZI=" alt="pic" />
          <div className="services-cards-text">
            <h2>Ideiglenes befogadás</h2>
            <p>
              Ha igazán önzetlenül segíteni szeretnél és részt vállalni ezáltal az életmentésben, akkor kérünk, hogy az általunk ajánlott kutyák közül
              válassz ideiglenes társat magadnak. Megpróbálunk minden tapasztalatunkkal az általunk ismert jellemû kutyák közül olyat ajánlani aki
              számodra a megfelelõ lehet! A legfontosabb hogy a megfelelõ helyre a megfelelõ kutyát helyezzük el akár átmenetileg akár véglegesen!
            </p>
          </div>
        </div>
        <div className="services-cards">
          <img src="https://cf.ltkcdn.net/charity/images/orig/261165-2070x1449-donate-medical-supplies.jpg" alt="pic" />
          <div className="services-cards-text">
            <h2>Adakozz</h2>
            <p>
              Idáig önerõbõl és egy-egy magánszemély adományából végeztünk munkánkat és segítettünk, ahol tudtunk.Nagyon sok minden van tervbe véve a
              jövõre vonatkozóan, viszont nagy részük csak megfelelõ anyagi háttér biztosítása mellett valósítható meg.
            </p>
            <footer id="footer">
              <p> Adószámunk: 18590290-1-42</p>
              <p> Szémlaszámunk: K&H Bank: 10402214-00020979-00000005</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;