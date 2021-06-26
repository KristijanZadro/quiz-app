import React, { useState, useEffect } from 'react'
import pitanja from '../../data/pitanja'
import '../Kategorije.css'

export default function Kategorija({ brojKategorije }) {

    const [brojac, setBrojac] = useState(0)
    const [pitanjaRender, setPitanjaRender] = useState([])

    useEffect(() => {
        let pitanjaArr = pitanja.filter(pitanje => pitanje.kategorija === brojKategorije).sort(() => .5 - Math.random())
        pitanjaArr.forEach(pitanje => pitanje.odgovori.sort(() => .5 - Math.random()))
        setPitanjaRender([...pitanjaArr])
    },[])


    const brojPitanja = pitanjaRender.length

    const odaberiOdgovor = (pozicijaPitanja, pozicijaOdgovora) => {
        let tocanOdgovor = pitanjaRender[pozicijaPitanja].odgovori.map((odgovor) => odgovor.tocan).indexOf(true)
        
        if (!(document.getElementById("odg-" + pozicijaPitanja + "-" + tocanOdgovor).classList.contains("correct"))) {

            document.getElementById("odg-" + pozicijaPitanja + "-" + tocanOdgovor).classList.add("correct")
            if (tocanOdgovor === pozicijaOdgovora) {
                setBrojac(brojac + 1)
            }
            else {
                document.getElementById("odg-" + pozicijaPitanja + "-" + pozicijaOdgovora).classList.add(
                    pitanjaRender[pozicijaPitanja].odgovori[pozicijaOdgovora].tocan === true ? "correct" : "incorrect"
                )
            }
        }
    }

    return (
        <div>
            <p className="kvizNaslov">Kategorija {brojKategorije}</p>
            {
                pitanjaRender.map((pitanje, index) => {
                    return (
                        <div key={index} className="pitanje">
                            <p className="pitanjeNaslov">{index + 1}. {pitanje.pitanje}</p>
                            {
                                pitanje.odgovori.map((odgovor, i) => {
                                    return (
                                        <div id={"odg-" + index + "-" + i} className="odgovor" key={i} onClick={() => odaberiOdgovor(index, i)}>
                                            <div className="slovoPitanja">
                                                {String.fromCharCode("a".charCodeAt(0) + i)})
                                            </div>
                                            <p>{odgovor.odgovor}</p>
                                            <div></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            <div className="rezultati">
                <p>Odgovorili ste točno: {brojac}/{brojPitanja} pitanja</p>
                <p>Postotak: {parseFloat(((brojac / brojPitanja) * 100)).toFixed(2)}%</p>
                <p>{(brojac / brojPitanja) * 100 < 50 ? "Debilčino ubij se, Maro bi bolje" : "Bravo kretenu"}</p>
            </div>
        </div>
    )
}

