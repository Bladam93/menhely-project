import React from 'react'
import  './About.css'
const About = () => {
  return (
    <div className='about-page'>
        <h1>Füzesabonyi Állatvédõ Alapítvány</h1>
        <section>
        <h2 className="about" id="about-text">Bemutatkozás</h2>
        <p className="about">Munkánkat és az ezzel járó folyamatos mentéseket pár önkéntes végzi 
        fizetett munkája mellett, természetesen teljesen ingyen, szabadidejének minden 
        percét erre fordítva!A 2006. évtõl mûködünk hivatalos alapítványi keretek között, ez idõ alatt összesen (2014 közepéig) 1.200 kutyának, 
        cicának találtunk már felelõs gazdát!
        Rendszeresen mentünk lelkileg és fizikailag megkínzott kutyákat az utcáról, illetve gazdától is. 
Minden lehetséges alkalommal megpróbáljuk jogilag is felelõsségre vonni az állatkínzót, ha annak kiléte ismert és az elkövetett tett valamilyen módon bizonyítható is. Ezek a jegyzõnek tett bejelentések, vagy a rendõrségnél tett feljelentések sokszor a tanúskodni nem kívánó lakosság együttmûködésének hiányán buknak el - sajnálatos módon! Lelkileg is megpróbáljuk rehabilitálni a befogadott állatokat, ami nagyon sok esetben nagyobb erõfeszítés, mint a fizikai sebeket begyógyítani...
Bármikor nagyon szívesen adunk tanácsot kutyaneveléssel, kutyatartással vagy éppen macskatartással kapcsolatban!
<br />Segítsd munkánkat - ezzel válj részesévé az életmentésnek!<br /><br />

<span style={{ fontWeight: 'bold' }}>Köszönjük!</span>
        </p>
        </section>

        <a href="https://www.paypal.com/donate?token=eWfe-tkX1ZVF6vY_4vCPny52jenwA_OAtZxEWI5V-Na5rvN3krT1Lyf217dh6uasaafxB_Ad81p5If-l&locale.x=hu_HU" target="_blank" rel="noopener noreferrer" className="donate">Adakozom</a>
    </div>
  )
}



export default About