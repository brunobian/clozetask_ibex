// extra randomisation function to select subproportion of items to present
// https://groups.google.com/d/msg/ibexexperiments/ap4qV9TUJ3Q/Ti50PKFIAgAJ
function RandomProportion(x, n) {

    assert(typeof(n)=="number" && n>0, "N should be a number greater than 0");

    this.args = [x];

    this.run = function(arrays) {
        var targetLength = Math.round(arrays[0].length * n);
        if (n>1) {
            while (arrays[0].length<targetLength)
                arrays[0].push(arrays[0][Math.floor(Math.random()*arrays[0].length)]);
        }
        else {
            while (arrays[0].length>targetLength)
                arrays[0].splice(Math.floor(Math.random()*arrays[0].length), 1);
        }
        return arrays[0];
    }
}
function randomProportion(x, n) { return new RandomProportion(x, n); }

var shuffleSequence = seq("intro", 
							"setcounter", 
								"demographics",
									"part1",sepWith("sep", seq(rshuffle("pva","pvb","filler"))),
										"part2",sepWith("sep", seq(randomProportion(rshuffle("awa","awb"), .33))),
											"end");
											
var completionMessage = "Die Ergebnisse wurden erfolgreich an den Server weitergeleitet. Vielen Dank!";

var defaults = [
    "Separator", {transfer: 500, normalMessage:"", hideProgressBar: true},
    "FormDE", {hideProgressBar: true, continueOnReturn: true},
	"FlashSentence", {hideProgressBar:true},
	"Scale2", {
        //scaleWidth: 1000,
        //scaleHeight: 15,
        handleWidth: 15,
        handleHeight: 40, //-- the width/height of the "handle" which the user slides along the bar.
        //html -- html displayed above the bar (probably specifying the sentence to be rated, in most cases).
        startColor: "#00A0F0",
        endColor: "#00A0F0",
        startValue: 0,
        endValue: 100,
        decimalPlaces: 0,
        scaleLabels: false,
        LeftLab: "",
        RightLab: ""
    },
    "Scale3", {
        //scaleWidth: 1000,
        //scaleHeight: 15,
        handleWidth: 15,
        handleHeight: 40, //-- the width/height of the "handle" which the user slides along the bar.
        //html -- html displayed above the bar (probably specifying the sentence to be rated, in most cases).
        startColor: "#00A0F0",
        endColor: "#00A0F0",
        startValue: 0,
        endValue: 100,
        decimalPlaces: 0,
        scaleLabels: false,
        LeftLab: "",
        RightLab: ""
    },
	"ScaleArray", {
        //scaleWidth: 1000,
        //scaleHeight: 200,
        handleWidth: 15,
        handleHeight: 40, //-- the width/height of the "handle" which the user slides along the bar.
        //html -- html displayed above the bar (probably specifying the sentence to be rated, in most cases).
        startColor: "#00A0F0",
        endColor: "#00A0F0",
        mainLabel: "",
        startValue: 0,
        endValue: 100,
        decimalPlaces: 0,
        scaleLabels: false,
        LeftLab: "",
        RightLab: ""
    }
];

var items = [
    ["sep", "Separator", { }],
	["setcounter","__SetCounter__",{}],
    ["intro", "FormDE", {html: '<div style="width: 45em;"><h1 align="center">Willkommen zu unserem Experiment!</h1><p style="text-align:justify" size="12">Liebe Versuchsteilnehmerin, lieber Versuchsteilnehmer!<br><br>Dieses Experiment besteht aus <b>zwei Teilen</b>:<br><br><b>Teil 1:</b> Es werden kurze Sätze erscheinen, die unvollständig sind. Bitte füge ein oder mehrere Wörter hinzu, sodass sich ein vollständiger Satz ergibt. Wähle hierzu das Wort oder die Wörter aus, die Dir als Erstes einfallen (oder in den Sinn kommen). Wenn Du das Gefühl hast, dass der Satz bereits vollständig ist, setze einfach nur einen Punkt.<br><br><b>Beispiel:</b> Der folgende unvollständige Satz: <i>Der höfliche Mann wünschte der Dame noch einen schönen... <input type="text" size="5"></i><br><br>könnte z.B. mit dem Wort: <i>"Tag."</i> vervollständigt werden.<br><br><b>Teil 2:</b> Du wirst eine Auswahl an möglichen Satzvervollständigungen für einen Satz sehen. Für diese möglichen Satzvervollständigungen sollst Du den Schieberegler so hoch anheben, wie er die Wahrscheinlichkeit widerspiegelt, dass <b>Du</b> dieses Wort im gegebenen Kontext verwenden würdest. Stelle Dir ein Rennen mit mehreren Wörtern vor: Vielleicht gibt es einen klaren Gewinner, den Du immer im gegebenen Kontext verwenden würdest. Aber vielleicht gibt es auch andere Wörter, die Du auch - nur weniger oft verwenden würdest. Bei Wörtern, die Du gar nicht verwenden würdest, lässt du den Schieberegler auf Null stehen. Wenn für Dich zwei Wörter gleich stark sind, kann sich der Schieberegler für diese beiden Wörter auch auf gleicher Höhe befinden<br><br><b>Zum Beispiel:</b> Für den folgenden Satz könnte Dein Rennen so aussehen:<p style="text-align:center"><img width="600" height="450" class="center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArgAAAHWCAYAAACc1vqYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAELnSURBVHhe7d1PiGTnmef72uWiFkKLWglhBmG8KIZaTC2ETC+khUzTUEgwIAZU3EUxQobRogXNgBisuQtxb0KjC3PVtLjQ1Q2Ca3SthWjZHkZqgQeD3Oi2zYgWyDRtjK1eCC+Ky1CL3J17TjznnDgn4hd/f29lPvnm9wM/bGVlRJz3Oe953ycjIyKvNQAAAEBFaHABAABQFRpcAAAAVIUGFwAAAFWhwQUAAEBVaHABAABQFRpcAAAAVIUGFwAAAFWhwQUAAEBVaHABAABQFRpcAAAAVIUGFwAAAFWhwQUAAEBVaHABAABQFRpcAAAAVIUGFwAAAFWhwQUAAEBVHl2D++Hd5tq1a5tz8ljzxM3nmldOP2q+etjf5qINx3zrtPmy/9KjdPb1T5sfPPft5rGTvibXv938r5992Nxd1OhWczo5iC9Pby2+59b0i4c65/Ft8uHdfrxdnnqz+Yf+69v8w5tPLW9z98P+q6jKl6fNrcU5vtscdobPmq9/dtr8yX/8Sf/fF+To4y9rWCs25vqN5ltP32l+cP/z5uuz/ka4UOM5u9C17cvm9FY3R+Z7DzbRezXyuLgGd5rrzzRv/vyb/oYXyGoAh8XhWjOsUdsXrX9o3nyqH3/X7H/rW823nnih+avfX7EG99pTzZs7O9xfNG88ObkNDe66tXN7CRffYxvEn9xrTjLMi8vS4E5y8sRLzXv/RJd70WhwLyNvjV0750nWj5qcQ4OrT9bZg39pfvXRm82fPHES33dyuzn94oIX2nNtcIeL47vNO7/pv7TwCBuTZA3uyUmc+6d2dbi/eKN5clGTPhfdyGR0lRvcYewXPS+yNbgbrvOHf/iq+ez+q82/vt4da5sb7fEmeH7hKsvR4OIwNLjZXViDO3r4y+at232Te8GN1/k2gMPFsVqfq9Pg3nrxxeap7niefKP5Rf9vyqevPd5+/5PNnTtsAlWjwS1iV4M7OPv6g+buje54rzWPt7V70H8d548G9zK6hE8iXDEX3+C2zn7xRjQ61x5vXvu0/+LUw6+a919/rrl543p/n9ebGzefa15//6tm/eW7k8bxm4+b1//NY4tfX5489u3muf/tvzf/s/8uadoA9o/57cf65vv6jebmC6fNzza9aO3s6+bz+683z9280VxfPP615vqNm81zr7+/8hrj4fjWEy8/0BfNsACqlyicff15c3+f+jjja+/pq/f3Gd9uY4N7+sP+ZRpPNm9s6nDPPm6+/3j7PW0T/N6WTWBRgx/caZ5+Is734vu6l348/XJz+tH6PBmOoburh1+937w+eS309RtPNy+/87P11ydOGylRv6dffmdL/eaiab/WPPvu7/uvLJ21jxNjUNfDb5p3vjv9t12L7O75dPb1z5p3Xn66udE/o7e4Vjad13ae/+ydl2d1jnlwv/l809jbWn10Or3NSfPYE6LG0wZxeJxhTi/O5avN+7ODWv7WZJbVxm7tmDc8/p5W69XNl1c/+KfmbGuD271O+J3m5aefGOfZyWNPbJwzy/PzRfPFuy80/2rxWO11/fT/0vzo1/03bbBvg9v55r07fU2ebdanYnvNf3TavPLczXGsMd4N53sYf/e4Xc1PX5hfH68u59Q3P+9qMawl3bhebu7/csNCUur8rR7fyvz69nOvr8yvqajFvudv8PCrj5rTdq48MdShX5Pe+dnX7YxYmja469dj+ziT2h3koL1Tv0ThqLVycNDjT/burt7dfvPt4ZzHHFmt227r+1act9Pmo00FbefGYXt5Vy9xvDdfaE43Hm+7Hnx+v63l5Nrq9uBNc9Dae9ZrsG3vts53Mika3OWmfa15cqXTOfvi3eb5/lmGxaRZvFZ1mETXmhvPv9vMX9mwnHS3u2eG+9e33rh+0jYTs9cCrBuO+cnbzTP9Syeu32gf71vLiXHt+vPNX63eTdtIv/adfrItFt/V2zzTvD0e5H9r/rQbw/jv/Zja/PFfdjvX7oZk6uyLt5tnxs2nv69xMWnr087S8bePx47v7Ivm3edvjPcZt1ku9NduPN+8e8DLS5YN7pfjm8dWz/vg7OPvN4+3/969jGG6CUydfXHa3B6OpT/fs+Nrz8nttlGYHuFwDN+7e695YvF967W7/vxftTNzYqjf9+429w6pnzA2sXfeW3vmbGh+u9x+e6Wb+f27zbPdvz3+/ebjxYD0fFnaPp9uvnSvnz/9vJ1cWydPvN58Oi1aOw9Oh9+2jPN2Og9ebP7vtWvjw7FW8jFuny6v37FBvNU880ych24zmj3GyRPN6+NB/br5yz+enLN2oe+uo2/98V+2/9LbcW2efOe15uMDfj2v5lo0L+0cu/tSc3Nxv6tr3jfNx699ZznmxZi6NWm4n+80r60cxHB+nrx9u7nR/u9innV1u/Ha/JwI43WyR4M7/gDZfv+d96Yz8Zt2uq9e85Nad1l9acNw/m6+1Nzt58l43P1tTp59t/llO/e7McX5mp7b283bqwdc8vxNju/eXvOrt2v9a29zT7zG45sPh7Wl+57pXOm+Nl+Tlufsmf2vxx0O3zu3N7gHrZWt4/fu7zV37z0R39df08sfsK43z++zwC5M5/Awd+bX3Q9+sX6u3+7nRpe19X0254fjfbK5/cwhx7tjPWhv88zb8/3q6L3niL372POdUZIGt3uZ5ZPx/e0COD6RcPZp81p/gdx48f7sp43uJ4t7/cL3VNscLU/RMOnaPP5S8/7wo8bZw+bhylxeMx5zm/bEv/P3D8b7nf06b/a02jfNe3fiOLo3bNyfHeQvm3eGyXXjXvOTWSczHOdqfbY3JLMGd1t9fvlWvxGfNC/+sH/go8Z31jZcwxheXBlf+5Pkvf5CfeqNZnWt2GTa4I6bjnyZwlnz8fe7Zi/eiDZuArMGd/lmvVt/tvKTZfuT+E+/33/6wklb//7LneEYusxr1/5k/UG/Aa8+gzqr37wWm+u3wYMfNi925+ekPf+zun3RvHWzf4wuKw3wg/fuLL5+0tYgbqbny9L2+bS4r9tvzH76X86d+TPMD3744uJcn9x+q5k92TZ5mdHj3/94nFPdD67vPttfGyuPMa3X+BrsscFt0zV9f/vb5bM805cyTdeIznBeVn7w2f74P2tO+2vzpK3xXj3SxuvtYfPLd57v50yX+TX9m3efjWukbeDemD6js3iWs7/dyZ3mvclBTM/Prf/8y7EODx9OC68tm6U9Gtx2dr13Jx5nOm+Hc33t8TvN/zW95lsPf/l/NM/2TfHsB7DZ+ZuP9eHP/6z/Ld3J4rX3t9+YXKvtuf3P/TPx8x90C5+/Lce3eX6dtXtTv4Z0b4ZeOX8/HRqV1eb8N+0Pov36Oxtre+vl+rJ8g+3semyb9r/97bLmm67HrY7aO7c3uOv3tWWtdPfuazeaF+9PnuVta/3B0Kw+3v6Q1395q394M+Zc25R+MJk7s/v67juTRm3bXrecHycv/rBfk+fH+/w7f988GB5my/GOvzVpfzB6aTrG2Tpyo7k3bRiO2nuO27uPOt9JpWlw1aL8+3ZjiK+91cgnCIcF6+TFZujhppNu9dnOncZjfrz5fjw9NjM0F9duv718hmi4iDY1GGe/aN7oG7Dvzt5NNhzn8Q3ueDwbmsvfvPPdxU9sN//Tf48vHDO+4RnD9nje0iehXxQnjfQOswZ3vL14mcJZW4tuYe/nxDhHpo3M//jz5o+6n2LHZzRXPHivudMf/7Se40Usb7fc9Gcb+DH122h4jJWFYqj3977XfG9xfNPF8aw9hG6RndZaz5el7fNp/U2OYfiB8+Te8seC4TY33/qi/8pE90bA7tmLP/rz5n/0XxrfHLjSvA26Z+dvdM9e/Nu/iYZi0oDMr5XeeH/zH1bG87La4H762uLZ/+4H3Q9UB/Sgrc2iUdvnkzzabx+aPnm9DT+Mdfc3vabbjX7xGI83L+mDaA8/bjd9s+V4ftZ+ANptvO1eDe7kWhjr9z+bD1+JZxvleWiNT0hMa771/P26eft2/zizpiKMa/20uSx8/o6aX8MPou35u/uhWt+WT3BMf7gbrx/ZfHdz5cbiGcV/+zcx2mOux22O2zt3NLgHrJXu3j3/Qbk3ruXtDxO7F9jluvDSB/q+Fs+qv9J8OLxucbz/p9q9SBz0b95pvtutcTf/UxM76jHHO3lCRi7Ykx+optfJOe7dR+2NSSVucJeF3PxT67BonrQ/7fRfGifd9Gt7Go55dQMdDAvgZOP44q2bcRvxq+aBXLzH4zy2wT1rPnip+74DGvkjxjdeOKvPmk38+u3bi+/Zd/GdN7jLsa29PKU93q6hGDajcY6sPVO3ja7ncAybjvkn92LTmtV2V/2Gj6vas7EY5sV03GcfvLT42rPvftw/kzs97qFZahvGtU1hPr6l7fNpUzM+nNNprcd5fOP55s2PftX8YfKEgDJcG8tnm3cYG5ANG9i4YaxcM8N5WZkXQ1Ow7Rn14Tzvs1gP3ysb/M5w/UyPb/jatmedhnkzORe7zs82422PbnB3k9fieP70XFy97meGczg55tLnb+f8+vXbze3Fvy/P33A9bn0j7NiID+d4+C3MSdsU7zXzd57vcR3e6xwdu3dub3D3Xysf1d79k+be4oeNTWvdiuG8nHynuXf/s+afx6dXtfFc73nd7D7e4eMtJ8f7xVv9y5ima/iKsTGdvC7+iL3n2L37qL0xqcQN7vKzT+N1IzrD61aWxd614W8hFtmZYYGc/PvWRXuwtgB2huM8tsEdFqPlx5LtdMT4xmdq+tcWyQyvzdl0vyvWatb9ZNzdfraJPGh++GJ3IS2f0ZCb6oru4+d+97tfNZ/+6K+b0z+dvulML9qbztt6vVtH1G+rYdyT74/X395sf+JeLiTjayOHeSR/UNo037fPp421HMY6/fcHP2leHV9P2+X64g0jr5z+P81n/7x8uctgr2tjamxANq0ZG64ZdayTTXZ4jZvK+JrInRfR8hnIjd969kHz0srxjZvM+NpwkXGOLm+3z1zfZLztgdfj5sd62Pzhd79rvvrsx82P/uIHzb+bvjFmepsd52/rfFi7tkqfv9YR82uv87DWkOy6JtcddT1udOzeub3B3X+tfFR7tz6+zb5s/s/J62m7RrR7c+KdH/xF8+mv/jB5aUA4/Jo74nh37SELy9/6jD/b7bpdwb37qL0xqTQN7vjGmvGZ0GHy7Jf9L5ItjphEe23icmEdjnO1Pvr41yfV+TS44+a3Tzbd74r1mq1+MkBr+NXg5Nc0Gxeg1XeVTnP9ev8i/Hk9j7qIj6jfdsM5HDbGfmPofxAanjEdfpIeFqz5syK75vv2+XTwhrql1tf/1QvNO5MX5+51bUzJ62RqwzUjj3V5feyVnRfRPtfb+vGNdd4r4nY7j2vdeNu95uHvm3efjcef/wblrP/Uh8mbWMacNNevi8Zyx/nbOh/Wrq3S5691xPza7zysXmP6mtvm6OtRGh5/vyzPx1Bzd6089vF31U0f31bd69ynn5Yxyclj/6Z5/afL11Qffs0dcby79pAFsdbsul3BvfuovTGpJA2uel3K8FPMoS81OHxxGRmTaOvJHp55mz1DORznan308a9PKnER7HLE+IYfPDb9uuIYqmbd64W7rw2/jhye+Zo2c3IBmr6zv/1J9eZz/6759+1P6D/60afNr37X/ZSu63nURXxE/XYZPkVi8Sxt/0zQ+Cv94ddZN99qvhjP9+q83jXft8+n4zfUs+bBP3/W/PgvftDcmTZBk9fU7XVtTB3RgCzIY102bmVeK7Z8BvelDzb9qnP9+MaXdRz4UoOd52eL8bb7zMPxNabzX6d/09Y03kzSP+v17/+0Of3rHzU//uyr5l8enOnj23H+ts6HtWur9PlrHTG/9joP4zO4w6+dd12T6/zrcerYvVOvMYevlY9q7960Bu7n4R9+1Xz6193H3k3+PL56o9/e19wRx7s2z5WhfpP3pey6XcG9+6i9MakUDe7yc3CnbxZYLnCHFfLwxWV0xCQaL4otr8Edmreyr8Fd/gpvY3261/9N3/hzxPjGDXrTbY4gL6Bhk1g8ezmMbf46JbUALV8X2tZRvRFl/LXxvJ5HXcRH1G+n/jWaXVPbvbu2u/9lUz8sdM827/6/fX3W7nvHfB83Xz2fymyo3RMl7zcvLY51+QPX8Izzxtfgrr7R44gGZGHDsY4L/KbHP9Bwf5s+0m75+rrJ8Y2vA2y/dsBB7Dw/W4y33WMeLt/RPX2zz7JBWf14vcH43oPp8e04f4c1uOXP3zHza3gfwLbX4A4fZbh8CdrwK/rNr8HtfoBfvPTilQ8Xn81e9no8du8s1eA+qr3ba3BnJp/cMRzj+HKijddNd167j8z6o+bPY0M9/HjHObjlNbjDS9fUa3A3HZvYe47du2lw9zGckI2LSW8y0brPSJy+gXRsDDd9BNXiXbTdMwzfbv7Dj4e3Qu6adFscMYkO+RSF+YRYX0yDPn41qcYJvOFd3cO7Mcd3eB4zvvFi2/DO0rYZ7d4F3i3W3/4PP97+hzR6+gIaFsXHm9c+7N9MtPJDg9oEhvvatPAvP8h+Xs+jLuJj6rdT30y0m+Pri9fcTo9zaPRPmjt3vrd47PXmavsbWjaNX9VyZhjr+O/xmbNPPHZDvou3vcd+MZ/8RmFs7trFXPzwMR7b8DKUcfHfvwFZWDvWMDYeGx5/OObudYLP/Zd/7L+22bKRUe8unrz7eXp84+fMtudQH0Sci+4H0ef+SzMcxc7zs8V42x3zcPpDyY3XPl02keN52L2mzY5vx/nbes2Ja6v0+dt1fHJ+HfApCtNGfGzO5acoLG+z9xtoN8zxTY7bO3UDecxa+Wj2bn18m/y3P43XmG76JJC1cY1PBui9bnwibrz+jzneAz5FYXr9HrP3HLl3H7U3JnVhDe7DP/yu+dVHbzZ/MrxpRX3I94OfNPeGz9J7fv5Xts4e/H2z/IzZ9ifn8Z92TbotjplE0wUuzefgnjVf//S15jur7zg9anwPmp/cG8bw/Pwvs5w9aP5+8rl9r+35KeSbLqChYX/88W5zWP/YMbUJjF97/E5z/58mj98e2z++f6+vQZd5PY+6iI+q3y7Tj5dqM3sj4vJdrhH1F9+Gjw5r59/tN5qfj7tp9xrKN5Z/lGDDfDpkQx1eTtE9W/7+5HM6F481fD7iybPN8u+pbP4c04e/fKf/EPhJ43BMA9IZjnXxUo6pL5u3h8+u/M69+V8Ievjb5m/HzzCdHvM2y/u78fw7k88Cfth8df/F/jpYP74v23MYj/Od5t7sLzg9bH77t8N1Ov9DNDvPzxbjbeU8PGse/MtXzWf3X23+9fBGsdW1afh4vvbfbv3Zz2cN2sPf/t34+bNrx7fj/G295uS1Vfj8HTW/Sn8O7uSzTh9vH2ec+odfj1sdtXeWa3Afzd59WIM7fqxfe27emnzme2f52cLTfWvz58aeff3T8Q+OLMd53PEuf2tyxOfgHrT3HLd30+DuYzgh+6RdOE43/JlG+Ze6Zn+9Y/pXwjq7Jt0WR02i1kF/yWygFtOOPv5Nk2pWn+Gd2uML6m80z787+RXjseOTf91lx19e2WLjBTR+DFSb2a9Mg9wEvmnr1S+ky9ov/1LL9Wdebe4uFpn568HyNLhtedv7XSx4bdZ+HTt8zFSXleZ39OXby0Z25S8m3Xj+tealtY8b21DLqWGs039/8Gnz+jjPl/Ng+deZVuZbZ/aXzPrrd/zUgJPmO699vGygjmpAWuPt+mN6+n9vxlc6qb+ktsdfodpoNt9iPMP4T554ot8wVo//m+bD4S8zdd/XfyrAsm4nzRP3Jn9xsLXz/Gwx3naPnDxxb/4h+AtnzRenfVPeZXgX9rCudBvzvTvx7Or0tcU7zt/hDW6r5Pk7dn6V+EtmfQ3Hc77y1+uOuh53OHzvLNjgtsrv3Yc1uN33/9XkvI2fxjHujyvrT2e2163v5fO/vnbs8Rp/yewc9u5jz/dwu/U5OtRJvF9oGNfGa9JzcQ1ud8E/faf5wf3PmtmTQcLZg39c+XvW3Yna9LeUd026LY6dRJ3FuzVfWfl7z91Hkqhj7GxYTDcc/6ZJ1Tn7+vPm/vSd7V2T8/Srzf3PJz+xdazxdc+Izv+edbypa9vfb9c2X0CTjwZqr4TZsbc2bQKrf7s9xv9yc/pR/HQ8fp7m5MO4j7qInfptM2ns1z43cvJsmvww8d7ZP/3X5s0Xlh/ftPyb4XqR3VTL0TDW1X9/+FXz0enLzdOzjWrHPBhuM16/7WZ384Xmzf78jI5tQNqqfPHuC5NPdlh5fdvD3zZ/172TevJnQrtNZfvfb99i9ZMk2vE//Wp3nW86vs7D5rd/130qwbQxinmq/r7+zvOzxXjbDenGfvO5V9rr4x+Xf3lpzerf1h/W3PvN513Nxjm7/Bi/Xedv6zW37doqdf6Onl+drh7dGyqX5+/ksW83z72y/RgefvVRczpdm7pr5YU3m49WrpWjr8cdDts7yza4nbJ796ENbqvdlz+/3+1b+113C8NtxrnfNbpPN6/e/3z+lzKt441PKXll+pF73Tpy5wd6HT3HvfvY8z3cbn2ODnWqqcEFAAAALgANLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCgwsAAICq0OACAACgKjS4AAAAqAoNLgAAAKpCg4sL9GFz99q15tq1W83pl/2XJr48vdX+2932uy7GeT7+h3e7OmzKAcfw5Wlza0M9S1sc863T5hweSjr/xx/m6zTHzI8vm9Nb7W3vPrqZ9eHdA+dAN28e4fE8Wuq8LHPr4Ishzs/ht7s8Ym3T9RpzaecDEGhwcXE+vNs2KHebuxs2+yvX4F5gs3iMq9TgDg3B6jRdHIP4+naPuMHtrquDfsh59A33oxUNrmxIF7U49PxcPZdx/QF2ocHFBVluqpsaSRrc3K5Mg7ujYTz8OGhwy9rS4LZo3najRqgRDS4uxuJX6f0zK9P/PzE0mKf9s2cR0XD2tx+/Z+WOFvfTLt4fzu5nvQGIxxv+fXjcbA1u34xMjnN2fOolCv2zWEPmjUDc393TZQ3H8q3cbrVmwzGfdv87fI8aw9bH7++nfdDF/47ft1732b8Pj7tXzTzD8W3Ujq/79f7sOLbOyaGhbMcwPZcrj6Eed/5D1/q5u3VrOocntV49l2PdVn+9P6n7jvPfuchrZml7gzuvWW/rnIy6Tr82H2ebtfmw47pMbjHXxLW0Nm4xrou6LoFdaHBxIdRGrTfz+WIZi+lkke0bieVm1N/X5Dbj/Yz3v+l7Jhv4uAGez0a1aYOZ2+O4VxvcfhzL0vYNzWotVpuXxe3mX1ut/bixbanr7sdf3s/yHG76nuVjq7nxaMSxTA5lt51zcqj5HmNeeeAY98p1s+vcrZ3L/nbjfa/+d2uP8z8/luG/599zPqJ204Z0anHcB83JqMdwf6vjXH+8vn7brsvk1mrUWh/3+jhXbxdzZP2+gItAg4sLsL6hqg1BbxLzzUUtzO0NFw3GcPfrC3VrtoHrDTIW6/PZrOU4VommY62WswZ3vc4Ls/vR37M4nq23679ntT6z2u/z+P39rIx9ds5Wzmfo7/tRb6TysbeT51LVZfV7VF1WHng+l/err5z/M+v3s/v8xzUz/5b+fs7pmlnS1+/C4pinx7lPzeJ7tq4xUyv1DhseJ6n1Mc5rMFi/LlfHHefikV+XwB5ocHH+5IawvkktFlOxUC43300b23xxlvczPQa5UPe3O6fNejGmbmNYy/K4Nm20s/FNx7KxOZs2J3ojm5of28rxrN355P72enx9P7PaL87V+nnYVI+iNowhjm+oSSS+Z585uanmB9Zl0/2sXl/9GJbHuCruZ1MzJs+/vIZXj++8RN2WxzjPbFjHXBOLsXb3tT7ezqZ5OLsuk9t+LfXzo6/ncH43netzuS6BPdDg4tzNN8yVTBbGTRvE4vaLnWj7xjZsUPJ+phv0hs06vn4+m/U+m8JedVts4P1YJo2NitzMB+Om3kXXaXkepib3t9fj6/uZbp6bNtJN86OsedMpzZqmfebkhpqvPNauumy8HzmfV49r+u99AzN9rF3nXz7G6vGdlxjbrA7D3Fs9ccdeE2u3W45xr+syucUYVo41zuUwlvVrcdO5VvcFXAQaXJwzsRkNVjbNxQK6tlBON+Mt9zUh72f6WIvN62I36302hb02julY+k15dY+fU02SaHg6K+dncTxrdz45J3s9vr6fWe0Xj3tRG+mGWkzNxrnPnFQ1b63Ua2ddNt3PhuZzKY5x9X6Wj7XH+d/wGOd5zSxtqPniGFe+fvQ1MdHfxzD3zmcePlrrY9A1nZ7fTee6hnqgDjS4OF9bN99+4+13H72AThfeDRtx/z3Dlxf3s7rgzo5DL+aLhfqcNut9NoWtG8pysO3mu31c8+9Rm/m8foOox/LcyWOeNRD7PH5/PysPNhvr7D4H/bk/j41065xtzY5vnzm54XtWHkfVN87BMAfUuWvtOt6OmAPL49nn/Kvv6e/nnK6ZpQ3zrDU/5s4+c3JDXacWNY5x7nVdJrc211au0bByfuX3RH3P5boEdqDBxTnqF8gti990A4+NY/79039f6JuL6Wa0uljvbnCHx5os1ot/X3msR2htg5FE/VabmdVNpx/Hcp/t72P8gtrMNz1OV4/lfcW5WL8vdbvNj9/fz+S/O6tNw+p5V3PjURoeb7Xpkcexc072NZh9T98YTOqwe06qc9damROrtezI49njPHYZvm31fmUtzsXmBnf4NzWWZan1+If7m9eqs2+9JucuufUxbpqP7dcm41q93eK/V24HXBQaXJwfsfGvmWw+iwW1XTxnn187W4R7/f1u+p7hfma3ExvQcgHvclk+B3dlE11tcDuT5mSR2eYz38yX+g1uTFuHlfO3OOb2vsZNrYva2LY+/vJ+puJciKZsuI+2Vuf/eZurNemyoYnZOieHmn84O5fqulgd85eLWg512XTuJnOkr+t8bndZmdfjORrGs/v8d2b32x7f4lo913PSiWNV9VsYxjadYwdeE7Pz0GVtjJOaL7JhXiS1GN/qmNQc7us2L+Xke9p/WPz3rJ7AxaDBBQAUQXNz1W36oQs4fzS4AIDDiGdzh6/R314R4tnc+NrlevYa9aLBBQAcbvXX/DS3V876S19obpEHDS4AAACqQoMLAACAqtDgAgAAoCo0uAAAAKgKDS4AAACqQoMLAACAqtDgAgAAoCo0uAAAAKgKDS4AAACqQoMLAACAqtDgAgAAoCo0uAAAAKgKDS4AAACqQoMLAACAqtDgAgAAoCo0uAAAAKgKDS4AAACqQoMLAACAqtDgAgAAoCo0uAAAAKgKDS4AAACqQoMLAACAqtDgAgAAoCo0uAAAAKgKDS7Su/Y3/1/RIKjaOEEZqrZOEFRtnNRCjc0JkAUNLtJTi6gTBFUbJyhD1dYJgqqNk1qosTkBsqDBRXpqEXWCoGrjBGWo2jpBULVxUgs1NidAFjS4SE8tok4QVG2coAxVWycIqjZOaqHG5gTIggYX6alF1AmCqo0TlKFq6wRB1cZJLdTYnABZ0OAiPbWIOkFQtXGCMlRtnSCo2jiphRqbEyALGlykpxZRJwiqNk5QhqqtEwRVGye1UGNzAmRBg4v01CLqBEHVxgnKULV1gqBq46QWamxOgCxocJGeWkSdIKjaOEEZqrZOEFRtnNRCjc0JkAUNLtJTi6gTBFUbJyhD1dYJgqqNk1qosTkBsqDBRXpqEXWCoGrjBGWo2jpBULVxUgs1NidAFjS4SE8tok4QVG2coAxVWycIqjZOaqHG5gTIggYX6alF1AmCqo0TlKFq6wRB1cZJLdTYnABZ0OAiPbWIOkFQtXGCMlRtnSCo2jiphRqbEyALGlykpxZRJwiqNk5QhqqtEwRVGye1UGNzAmRBg4v01CLqBEHVxgnKULV1gqBq46QWamxOgCxocJGeWkSdIKjaOEEZqrZOEFRtnNRCjc0JkAUNLtJTi6gTBFUbJyhD1dYJgqqNk1qosTkBsqDBRXpqEXWCoGrjBGWo2jpBULVxUgs1NidAFjS4SE8tok4QVG2coAxVWycIqjZOaqHG5gTIggYX6alF1AmCqo0TlKFq6wRB1cZJLdTYnABZ0OAiPbWIOkFQtXGCMlRtnSCo2jiphRqbEyALGlykpxZRJwiqNk5QhqqtEwRVGye1UGNzAmRBg4v01CLqBEHVxgnKULV1gqBq46QWamxOgCxocJGeWkSdIKjaOEEZqrZOEFRtnNRCjc0JkAUNLtJTi6gTBFUbJyhD1dYJgqqNk1qosTkBsqDBRXpqEXWCoGrjBGWo2jpBULVxUgs1NidAFjS4SE8tok4QVG2coAxVWycIqjZOaqHG5gTIggYX6alF1AmCqo0TlKFq6wRB1cbJZXPt2rULDXDemHVIT20uThBUbZygDFVbJwiqNk4um67J/OSTTy4kNLi4CMw6pKc2FycIqjZOUIaqrRMEVRsnlw0NLq4aZh3SU5uLEwRVGycoQ9XWCYKqjZPLhgYXVw2zDumpzcUJgqqNE5ShausEQdXGyWVDg4urhlmH9NTm4gRB1cYJylC1dYKgauPksqHBxVXDrEN6anNxgqBq4wRlqNo6QVC1cXLZ0ODiqmHWIT21uThBULVxgjJUbZ0gqNo4uWxocHHVMOuQntpcnCCo2jhBGaq2ThBUbZxcNjS4uGqYdUhPbS5OEFRtnKAMVVsnCKo2Ti4bGlxcNcw6pKc2FycIqjZOUIaqrRMEVRsnlw0NLq4aZh3SU5uLEwRVGycoQ9XWCYKqjZPLhgYXVw2zDumpzcUJgqqNE5ShausEQdXGyWVDg4urhlmH9NTm4gRB1cYJylC1dYKgauPksqHBxVXDrEN6anNxgqBq4wRlqNo6QVC1cXLZ0ODiqmHWIT21uThBULVxgjJUbZ0gqNo4uWxocHHVMOuQntpcnCCo2jhBGaq2ThBUbZxcNl2TeZEBzhuzDumpzcUJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SuHbt2oXmqlGbkxOUoWrrBEHVxkkt1NicAFnQ4CKNrsn85JNPLiQ0uH5QhqqtEwRVGye1UGNzAmRBg4s0aHDPl9qcnKAMVVsnCKo2TmqhxuYEyIIGF2nQ4J4vtTk5QRmqtk4QVG2c1EKNzQmQBQ0u0qDBPV9qc3KCMlRtnSCo2jiphRqbEyALGlykQYN7vtTm5ARlqNo6QVC1cVILNTYnQBY0uEiDBvd8qc3JCcpQtXWCoGrjpBZqbE6ALGhwkQYN7vlSm5MTlKFq6wRB1cZJLdTYnABZ0OAiDRrc86U2JycoQ9XWCYKqjZNaqLE5AbKgwUUaNLjnS21OTlCGqq0TBFUbJ7VQY3MCZEGDizRocM+X2pycoAxVWycIqjZOaqHG5gTIggYXadDgni+1OTlBGaq2ThBUbZzUQo3NCZAFDS7SoME9X2pzcoIyVG2dIKjaOKmFGpsTIAsaXKRBg3u+1ObkBGWo2jpBULVxUgs1NidAFjS4SIMG93ypzckJylC1dYKgauOkFmpsToAsaHCRBg3u+VKbkxOUoWrrBEHVxkkt1NicAFnQ4CKNrsm8yFw1anNygjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOEFRtnKAMVVsnCKo2TmqhxuYEyIIGF+mpRdQJgqqNE5ShausEQdXGSS3U2JwAWdDgIj21iDpBULVxgjJUbZ0gqNo4qYUamxMgCxpcpKcWUScIqjZOUIaqrRMEVRsntVBjcwJkQYOL9NQi6gRB1cYJylC1dYKgauOkFmpsToAsaHCRnlpEnSCo2jhBGaq2ThBUbZzUQo3NCZAFDS7SU4uoEwRVGycoQ9XWCYKqjZNaqLE5AbKgwUV6ahF1gqBq4wRlqNo6QVC1cVILNTYnQBY0uEhPLaJOrppr165daHAYNWedIKjaOKmFGpsTIAt2H6SnFlEnV03XZH7yyScXEhrcw6k56wRB1cZJLdTYnABZsPsgPbWIOrlqaHAvFzVnnSCo2jiphRqbEyALdh+kpxZRJ1cNDe7louasEwRVGye1UGNzAmTB7oP01CLq5Kqhwb1c1Jx1gqBq46QWamxOgCzYfZCeWkSdXDU0uJeLmrNOEFRtnNRCjc0JkAW7D9JTi6iTq4YG93JRc9YJgqqNk1qosTkBsmD3QXpqEXVy1dDgXi5qzjpBULVxUgs1NidAFuw+SE8tok6uGhrcy0XNWScIqjZOaqHG5gTIgt0H6alF1MlVQ4N7uag56wRB1cZJLdTYnABZsPsgPbWIOrlqaHAvFzVnnSCo2jiphRqbEyALdh+kpxZRJ1cNDe7louasEwRVGye1UGNzAmTB7oP01CLq5Kqhwb1c1Jx1gqBq46QWamxOgCzYfZCeWkSdXDU0uJeLmrNOEFRtnNRCjc0JkAW7D9JTi6iTq4YG93JRc9YJgqqNk1qosTkBsmD3QXpqEXVy1dDgXi5qzjpBULVxUgs1NidAFuw+SE8tok6umq7JvMjgMGrOOkFQtXFSCzU2J0AW7D5ITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCcpQtXWCoGrjpBZqbE6ALGhwkZ5aRJ0gqNo4QRmqtk4QVG2c1EKNzQmQBQ0u0lOLqBMEVRsnKEPV1gmCqo2TWqixOQGyoMFFemoRdYKgauMEZajaOkFQtXFSCzU2J0AWNLhITy2iThBUbZygDFVbJwiqNk5qocbmBMiCBhfpqUXUCYKqjROUoWrrBEHVxkkt1NicAFnQ4CI9tYg6QVC1cYIyVG2dIKjaOKmFGpsTIAsaXKSnFlEnCKo2TlCGqq0TBFUbJ7VQY3MCZEGDi/TUIuoEQdXGCQ5z7dq1C02t1FjPM5eNupadAFnQ4CI9tYg6QVC1cYLDdM3QJ598ciG5jI3YvqjrYdS17ATIggYX6alF1AmCqo0THIZG7NGgrodR17ITIAsaXKSnFlEnCKo2TnAYGrFHg7oeRl3LToAsaHCRnlpEnSCo2jjBYWjEHg3qehh1LTsBsqDBRXpqEXWCoGrjBIehEXs0qOth1LXsBMiCBhfpqUXUCYKqjRMchkbs0aCuh1HXshMgCxpcpKcWUScIqjZOcBgasUeDuh5GXctOgCxocJGeWkSdIKjaOMFhaMQeDep6GHUtOwGyoMFFemoRdYKgauMEh6ERezSo62HUtewEyIIGF+mpRdQJgqqNExyGRuzRoK6HUdeyEyALGlykpxZRJwiqNk5wGBqxR4O6HkZdy06ALGhwkZ5aRJ0gqNo4wWFoxB4N6noYdS07AbKgwUV6ahF1gqBq4wSHoRF7NKjrYdS17ATIggYX6alF1AmCqo0THIZG7NGgrodR17ITIAsaXAC4ADRijwZ1BdDhagSAC9A1QxeZWqmxnmcA5MDVCAAAgKrQ4AIAAKAqNLgAAACoCg0uAAAAqkKDCwAAgKrQ4AIAAKAqNLgAAACoCg0uAAAAqkKDCwAAgKrQ4AIAAKAqNLgAAACoCg0uAAAAqkKDCwAAgKrQ4AIAAKAqNLgAAACoCg0uAAAAqkKDCwAAgKrQ4AIAAKAqNLgAAACoCg0uAAAAqkKDCwAAgKrQ4AIAAKAqNLgAAACoCg0uAAAAqkKDCwAAgKrQ4AIAAKAqNLgAAACoCg0uAAAAqkKDCwAAgKrQ4AIAAKAqNLgAAACoCg0uAAAAqkKDCwAAgIo0zf8PXCFqr4K9+HEAAAAASUVORK5CYII=" /></p>Falls Du noch Fragen hast, wende Dich bitte jetzt an die/den ExperimentleiterIn. Ansonsten geht es nun weiter zu den demographischen Fragen.</p></div>'}],
	["demographics", "FormDE", {html: '<div style="width: 45em;"><h2 align="center">Demographische Fragen</h2><p size="12">Die folgenden Daten werden für demographische Zwecke erhoben. Diese Daten und deine Test-Ergebnisse werden anonymisiert gespeichert und weiterverwendet.</p><table><tr><td colspan="2" style="width: 30em; padding-bottom: 1em;" size="12"></td></tr><tr>  <td>Alter:</td><td><input name="age" type="text" id="answer" size="10" class="obligatory" /></td></tr><tr>	<td colspan="2"><label class="error" for="age"></label></td></tr><tr>	<td>Studiengang/Beruf:</td><td><input name="beruf" type="text" size="50" class="obligatory" /></tr><tr>	<td colspan="2"><label class="error" for="beruf"></label></td></tr></table><table><tr>  <td>Geschlecht:</td><td><input name="gender" type="radio" value="male" class="obligatory" id="csexmale" /><label for="csexmale">männlich </label></td><td><input name="gender" type="radio" value="female" id="csexfemale"/><label for="csexfemale">weiblich</label></td><td><input name="gender" type="radio" value="na" id="csexna"/><label for="csexna">ungenannt</label></td></tr></table><p size="12">Los geht es mit dem Experiment!</p></div>', focusID: 'answer', validators: {age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }}}],	

	["part1", "FormDE", {html: '<div class="box"><p><b>Teil 1</b>: Die folgenden Sätze sind unvollständig. Bitte füge das Wort oder die Wörter hinzu, die Dir als Erstes einfallen. Wenn Du das Gefühl hast, dass der Satz bereits vollständig ist, setze einfach nur einen Punkt.</div>'}],
		
    [["pva",1], "FormDE", {html: 'Die erfahrenen Expeditionsleiter setzten den Wissenschaftler wegen seines Versagens sehr entschlossen <input type="text" id="answer" name="1a" size="50">', focusID: 'answer'}],
    [["pvb",1], "FormDE", {html: 'Die erfahrenen Wissenschaftler setzten ihre Experimente trotz des Versagens sehr entschlossen <input type="text" id="answer" name="1b" size="50">', focusID: 'answer'}],
	
	[["pva",2], "FormDE", {html: 'Die bekannte Forscherin legte das kostbare Fossil in der Ausgrabungsstätte besonders behutsam <input type="text" id="answer" name="2a" size="50">', focusID: 'answer'}],
    [["pvb",2], "FormDE", {html: 'Die bekannte Forscherin legte das kostbare Buch von ihrem Mann besonders behutsam <input type="text" id="answer" name="2b" size="50">', focusID: 'answer'}],
	
	[["pva",3], "FormDE", {html: 'Die gemeine Bande hing dem unschuldigen Mann eine schreckliche Straftat völlig skrupellos <input type="text" id="answer" name="3a" size="50">', focusID: 'answer'}],
    [["pvb",3], "FormDE", {html: 'Die gemeine Tante hing das schreckliche Porträt von ihrem Mann völlig skrupellos <input type="text" id="answer" name="3b" size="50">', focusID: 'answer'}],

	[["pva",4], "FormDE", {html: 'Die fürsorgliche Mutter klebte einen Teil der Wand für die Malerarbeiten überaus sorgfältig <input type="text" id="answer" name="4a" size="50">', focusID: 'answer'}],
    [["pvb",4], "FormDE", {html: 'Die freundliche Tante klebte ein kleines Bild für ihren jungen Neffen überaus sorgfältig <input type="text" id="answer" name="4b" size="50">', focusID: 'answer'}],
	
	[["pva",5], "FormDE", {html: 'Der erfolgreiche Künstler fing das neue Projekt trotz des Zeitdrucks sehr motiviert <input type="text" id="answer" name="5a" size="50">', focusID: 'answer'}],
    [["pvb",5], "FormDE", {html: 'Der beliebte Spieler fing den lauten Applaus nach dem Sieg sehr motiviert <input type="text" id="answer" name="5b" size="50">', focusID: 'answer'}],
	
	[["pva",6], "FormDE", {html: 'Der alte Mann biss von dem harten Brot während des Frühstücks laut krachend <input type="text" id="answer" name="6a" size="50">', focusID: 'answer'}],
    [["pvb",6], "FormDE", {html: 'Der alte Mann biss während der besinnlichen Weihnachtsfeier die harte Nuss laut krachend <input type="text" id="answer" name="6b" size="50">', focusID: 'answer'}],
		
	[["pva",7], "FormDE", {html: 'Der listige Schüler schrieb von einem arglosen Klassenkameraden während des Tests heimlich und unbemerkt <input type="text" id="answer" name="7a" size="50">', focusID: 'answer'}],
    [["pvb",7], "FormDE", {html: 'Der listige Schüler schrieb die Vergehen seiner Mitschüler während der Pause heimlich und unbemerkt <input type="text" id="answer" name="7b" size="50">', focusID: 'answer'}],
	
	[["pva",8], "FormDE", {html: 'Der neue Angestellte packte das bekannte Problem trotz guter Intentionen eher unbeholfen <input type="text" id="answer" name="8a" size="50">', focusID: 'answer'}],
    [["pvb",8], "FormDE", {html: 'Der weitgereiste Gast packte das Geschenk im Verlauf des Abends eher unbeholfen <input type="text" id="answer" name="8b" size="50">', focusID: 'answer'}],

	[["pva",9], "FormDE", {html: 'Die freundliche Köchin rieb den hartnäckigen Schmutz mit einem Lappen völlig problemlos <input type="text" id="answer" name="9a" size="50">', focusID: 'answer'}],
    [["pvb",9], "FormDE", {html: 'Die freundliche Schusterin rieb die flüssige Scheuermilch mit einem Schwamm völlig problemlos <input type="text" id="answer" name="9b" size="50">', focusID: 'answer'}],
	
	[["pva",10], "FormDE", {html: 'Der gutmütige Bürgermeister stach das schwere Fass auf dem Dorffest äußerst fröhlich <input type="text" id="answer" name="10a" size="50">', focusID: 'answer'}],
    [["pvb",10], "FormDE", {html: 'Die hilfsbereite Tochter stach hübsche Muster mit einer dünnen Nadel äußerst fröhlich <input type="text" id="answer" name="10b" size="50">', focusID: 'answer'}],
	
	[["pva",11], "FormDE", {html: 'Der unsichere Antragsteller füllte das notwendige Formular in der Pause sehr vorsichtig <input type="text" id="answer" name="11a" size="50">', focusID: 'answer'}],
    [["pvb",11], "FormDE", {html: 'Der reiche Gastgeber füllte das kalte Getränk für den Eingeladenen sehr vorsichtig <input type="text" id="answer" name="11b" size="50">', focusID: 'answer'}],
	
	[["pva",12], "FormDE", {html: 'Der unbeliebte Magier gab mit seinen Talenten außerhalb einer Vorstellung besonders raffiniert <input type="text" id="answer" name="12a" size="50">', focusID: 'answer'}],
    [["pvb",12], "FormDE", {html: 'Der schnelle Junge gab den kleinen Filzball während des Spiels besonders raffiniert <input type="text" id="answer" name="12b" size="50">', focusID: 'answer'}],
	
	[["pva",13], "FormDE", {html: 'Das neue Buch quoll nach dem Fall in die Badewanne wegen des heißen Wassers schneller als gedacht <input type="text" id="answer" name="13a" size="50">', focusID: 'answer'}],
    [["pvb",13], "FormDE", {html: 'Das heiße Wasser quoll während der Zubereitung der gefüllten Nudeln wegen der großen Hitze schneller als gedacht <input type="text" id="answer" name="13b" size="50">', focusID: 'answer'}],
	
	[["pva",14], "FormDE", {html: 'Der liebe Vater brachte den notwendigen Mut für das Gespräch nicht besonders erfolgreich <input type="text" id="answer" name="14a" size="50">', focusID: 'answer'}],
    [["pvb",14], "FormDE", {html: 'Der liebe Vater brachte seinen eigenen Kindern die wichtigsten Tugenden nicht besonders erfolgreich <input type="text" id="answer" name="14b" size="50">', focusID: 'answer'}],
	
	[["pva",15], "FormDE", {html: 'Die ruhige Spaziergängerin hob den Stein als Andenken an die schöne Zeit fast unbemerkt <input type="text" id="answer" name="15a" size="50">', focusID: 'answer'}],
    [["pvb",15], "FormDE", {html: 'Die leitende Angestellte hob die strenge Regel für ihre hoch geschätzten Mitarbeiter fast unbemerkt <input type="text" id="answer" name="15b" size="50">', focusID: 'answer'}],
	
	[["pva",16], "FormDE", {html: 'Der genervte Elektriker schloss das lose Kabel trotz der nächtlichen Stunde vorbildlich und gewissenhaft <input type="text" id="answer" name="16a" size="50">', focusID: 'answer'}],
    [["pvb",16], "FormDE", {html: 'Die wissenschaftliche Hilfskraft schloss den ausgewählten Datenpunkt bei seiner statistischen Analyse vorbildlich und gewissenhaft <input type="text" id="answer" name="16b" size="50">', focusID: 'answer'}],
	
	[["pva",17], "FormDE", {html: 'Die verängstigte Patientin rief die zuständige Arztpraxis wegen ihrer fraglichen Verletzung jede Woche <input type="text" id="answer" name="17a" size="50">', focusID: 'answer'}],
    [["pvb",17], "FormDE", {html: 'Die verängstigte Studentin rief die erhobenen Daten an einem alten Computer jede Woche <input type="text" id="answer" name="17b" size="50">', focusID: 'answer'}],
	
	[["pva",18], "FormDE", {html: 'Das kleine Mädchen sprach den unaufmerksamen Eltern alle blasphemische Schimpfwörter laut und deutlich <input type="text" id="answer" name="18a" size="50">', focusID: 'answer'}],
    [["pvb",18], "FormDE", {html: 'Die große Gemeinde sprach die reumütige Frau wegen ihrer Handlungen laut und deutlich <input type="text" id="answer" name="18b" size="50">', focusID: 'answer'}],
	
	[["pva",19], "FormDE", {html: 'Der ehrgeizige Schüler nahm den äußerst geringen Erlös vom Kuchenverkauf sichtlich frustriert <input type="text" id="answer" name="19a" size="50">', focusID: 'answer'}],
    [["pvb",19], "FormDE", {html: 'Der strenge Kritiker nahm alle Kommentare nach einer weiteren Präsentation sichtlich frustriert <input type="text" id="answer" name="19b" size="50">', focusID: 'answer'}],
	
	[["pva",20], "FormDE", {html: 'Die neugierige Tante deckte das alte Geheimnis während eines informativen Gesprächs behutsam und verantwortungsvoll <input type="text" id="answer" name="20a" size="50">', focusID: 'answer'}],
    [["pvb",20], "FormDE", {html: 'Der eifrige Bauarbeiter deckte das große Loch während eines langen Arbeitstages behutsam und verantwortungsvoll <input type="text" id="answer" name="20b" size="50">', focusID: 'answer'}],

	[["pva",21], "FormDE", {html: 'Die gesunde Fußballerin löste ihre verletzte Mitspielerin während eines wichtigen Spiels schneller als gedacht <input type="text" id="answer" name="21a" size="50">', focusID: 'answer'}],
    [["pvb",21], "FormDE", {html: 'Der unparteiische Rat löste die unbekannte Gruppe während einer wichtigen Sitzung schneller als gedacht <input type="text" id="answer" name="21b" size="50">', focusID: 'answer'}],
	
	[["pva",22], "FormDE", {html: 'Der inspirierte Künstler bildete die dickliche Frau in der Skizze sehr gewissenhaft <input type="text" id="answer" name="22a" size="50">', focusID: 'answer'}],
    [["pvb",22], "FormDE", {html: 'Der inspirierte Künstler bildete den fleißigen Studenten in einer Akademie sehr gewissenhaft <input type="text" id="answer" name="22b" size="50">', focusID: 'answer'}],
	
	[["pva",23], "FormDE", {html: 'Der intelligente Chef riet dem entschlossenen Mann von seinem Vorhaben sehr eindringlich <input type="text" id="answer" name="23a" size="50">', focusID: 'answer'}],
    [["pvb",23], "FormDE", {html: 'Der intelligente Chef riet dem entschlossenen Mann sein konzipiertes Vorhaben sehr eindringlich <input type="text" id="answer" name="23b" size="50">', focusID: 'answer'}],
	
	[["pva",24], "FormDE", {html: 'Der gelehrte Mitarbeiter glich seinen möglicherweise fatalen Fehler nach der Revision nur ungern <input type="text" id="answer" name="24a" size="50">', focusID: 'answer'}],
    [["pvb",24], "FormDE", {html: 'Der gelehrte Mitarbeiter glich beide Versionen des Textes nach der Revision nur ungern <input type="text" id="answer" name="24b" size="50">', focusID: 'answer'}],
	
	[["pva",25], "FormDE", {html: 'Die zuversichtliche Großmutter fror die hellen Brötchen trotz des vollen Eisfachs lange Zeit <input type="text" id="answer" name="25a" size="50">', focusID: 'answer'}],
    [["pvb",25], "FormDE", {html: 'Der abgelegene See fror im letzten Winter wegen der schweren Kälte lange Zeit <input type="text" id="answer" name="25b" size="50">', focusID: 'answer'}],
	
	[["pva",26], "FormDE", {html: 'Die junge Ärztin schaltete die empfindlichen Geräte auf den automatischen Modus präventiv und wohlüberlegt <input type="text" id="answer" name="26a" size="50">', focusID: 'answer'}],
    [["pvb",26], "FormDE", {html: 'Die gewissenhafte Angestellte schaltete die Alarmlage des Geschäfts wegen des Stromausfalls präventiv und wohlüberlegt <input type="text" id="answer" name="26b" size="50">', focusID: 'answer'}],
	
	[["pva",27], "FormDE", {html: 'Die fleißige Lehrerin griff auf ihre Vorkenntnisse in schwierigen Situationen immer wieder <input type="text" id="answer" name="27a" size="50">', focusID: 'answer'}],
    [["pvb",27], "FormDE", {html: 'Die aufgeregte Rednerin griff das kontroverse Thema in der Diskussion immer wieder <input type="text" id="answer" name="27b" size="50">', focusID: 'answer'}],
	
	[["pva",28], "FormDE", {html: 'Der erfahrene Vorstandsvorsitzende trat von seiner wichtigen Position nach jahrelanger Arbeit ganz nervös <input type="text" id="answer" name="28a" size="50">', focusID: 'answer'}],
    [["pvb",28], "FormDE", {html: 'Der junge Schauspieler trat in der dritten Szene bei donnerndem Applaus ganz nervös <input type="text" id="answer" name="28b" size="50">', focusID: 'answer'}],
	
	[["pva",29], "FormDE", {html: 'Der kleine Junge dachte sich in dem Gespräch viele Lügen unglaublich flink <input type="text" id="answer" name="29a" size="50">', focusID: 'answer'}],
    [["pvb",29], "FormDE", {html: 'Der tüchtige Mitarbeiter dachte für seinen neuen Chef jede Woche unglaublich flink <input type="text" id="answer" name="29b" size="50">', focusID: 'answer'}],
	
	[["pva",30], "FormDE", {html: 'Der alte Mann brach im hohen Alter unter der Last der Jahre ganz plötzlich <input type="text" id="answer" name="30a" size="50">', focusID: 'answer'}],
    [["pvb",30], "FormDE", {html: 'Der gutmütige Mann brach die Packung Vanilleeis für seine gut erzogenen Kinder ganz plötzlich <input type="text" id="answer" name="30b" size="50">', focusID: 'answer'}],
	
	[["pva",31], "FormDE", {html: 'Der technisch begabte Absolvent lud seine ausländischen Gäste auf ein frisches Getränk ganz spontan <input type="text" id="answer" name="31a" size="50">', focusID: 'answer'}],
    [["pvb",31], "FormDE", {html: 'Der technisch begabte Absolvent lud die große Datei im Verlauf des Nachmittags ganz spontan <input type="text" id="answer" name="31b" size="50">', focusID: 'answer'}],

	[["pva",32], "FormDE", {html: 'Das brave Kleinkind stieß nach dem Stillen an der Brust fast schlafend <input type="text" id="answer" name="32a" size="50">', focusID: 'answer'}],
    [["pvb",32], "FormDE", {html: 'Das brave Kleinkind stieß nach dem Stillen die leere Flasche fast schlafend <input type="text" id="answer" name="32b" size="50">', focusID: 'answer'}],
	
	[["pva",33], "FormDE", {html: 'Der eingeladene Hauptredner sagte seinen geplanten Vortrag wegen einer schweren Kehlkopfentzündung nur sehr zögerlich <input type="text" id="answer" name="33a" size="50">', focusID: 'answer'}],
    [["pvb",33], "FormDE", {html: 'Der eingeladene Hauptredner sagte seine geplante Teilnahme trotz des großzügigen Honorars nur sehr zögerlich <input type="text" id="answer" name="33b" size="50">', focusID: 'answer'}],
	
	[["pva",34], "FormDE", {html: 'Der ordentliche Professor fuhr mit seinem Vortrag trotz regelmäßiger Störungen immer ordnungsgemäß <input type="text" id="answer" name="34a" size="50">', focusID: 'answer'}],
    [["pvb",34], "FormDE", {html: 'Der ordentliche Buchhalter fuhr seinen zuverlässigen Computer bei der Arbeit immer ordnungsgemäß <input type="text" id="answer" name="34b" size="50">', focusID: 'answer'}],
	
	[["pva",35], "FormDE", {html: 'Der beliebte Messdiener blies die Kerzen auf dem Altar nach der Messe stets sehr gewissenhaft <input type="text" id="answer" name="35a" size="50">', focusID: 'answer'}],
    [["pvb",35], "FormDE", {html: 'Der beliebte Messdiener blies den Staub auf dem Altar vor der Messe stets sehr gewissenhaft <input type="text" id="answer" name="35b" size="50">', focusID: 'answer'}],
	
	[["pva",36], "FormDE", {html: 'Der grimmige Hausbesitzer hielt die frechen Vögel von seinem Balkon wie immer erfolgreich <input type="text" id="answer" name="36a" size="50">', focusID: 'answer'}],
    [["pvb",36], "FormDE", {html: 'Der eifrige Polizeibeamte hielt sich für den Einsatz am Nachmittag wie immer erfolgreich <input type="text" id="answer" name="36b" size="50">', focusID: 'answer'}],
	
	[["pva",37], "FormDE", {html: 'Die zuverlässige Sekretärin gab die großen Summen für längere Geschäftsreisen nur ungern <input type="text" id="answer" name="37a" size="50">', focusID: 'answer'}],
    [["pvb",37], "FormDE", {html: 'Die zuverlässige Sekretärin gab die gesammelten Einnahmen aus dem Kuchenverkauf nur ungern <input type="text" id="answer" name="37b" size="50">', focusID: 'answer'}],
	
	[["pva",38], "FormDE", {html: 'Der geheime Plan flog wegen unerwarteter Zuhörer trotz guter Vorbereitung ziemlich schnell <input type="text" id="answer" name="38a" size="50">', focusID: 'answer'}],
    [["pvb",38], "FormDE", {html: 'Der blaue Wellensittich flog der älteren Dame an einem Sonntagnachmittag ziemlich schnell <input type="text" id="answer" name="38b" size="50">', focusID: 'answer'}],
	
	[["pva",39], "FormDE", {html: 'Die optimistische Laiendarstellerin stellte die beliebte Königin als tragische Heldin sehr selbstbewusst <input type="text" id="answer" name="39a" size="50">', focusID: 'answer'}],
    [["pvb",39], "FormDE", {html: 'Die optimistische Bühnenbildnerin stellte die beliebte Statue für die Vorstellung sehr selbstbewusst <input type="text" id="answer" name="39b" size="50">', focusID: 'answer'}],
	
	[["pva",40], "FormDE", {html: 'Der faule Schüler schob seine langweiligen Hausaufgaben trotz mehrerer Ermahnungen ganz spontan <input type="text" id="answer" name="40a" size="50">', focusID: 'answer'}],
    [["pvb",40], "FormDE", {html: 'Der kluge Chirurg schob einen schwer betroffenen Patienten als Notfall ganz spontan <input type="text" id="answer" name="40b" size="50">', focusID: 'answer'}],

	[["pva",41], "FormDE", {html: 'Der nette Verkäufer räumte die neue Ware in das Regal gekonnt und flink <input type="text" id="answer" name="41a" size="50">', focusID: 'answer'}],
    [["pvb",41], "FormDE", {html: 'Der kleine Junge räumte sein unordentliches Zimmer mit großer Freude gekonnt und flink <input type="text" id="answer" name="41b" size="50">', focusID: 'answer'}],
	
	[["pva",42], "FormDE", {html: 'Das neue Hinterrad drehte beim anstrengenden Bergauffahren trotz aller Vorsichtsmaßnahmen stets und ständig <input type="text" id="answer" name="42a" size="50">', focusID: 'answer'}],
    [["pvb",42], "FormDE", {html: 'Der Amazon-Echo Lautsprecher drehte die Lautstärke an dem verregneten Abend stets und ständig <input type="text" id="answer" name="42b" size="50">', focusID: 'answer'}],
	
	[["pva",43], "FormDE", {html: 'Der spartanische Kontakt riss wegen der Distanz zum Leidwesen aller wenig überraschend <input type="text" id="answer" name="43a" size="50">', focusID: 'answer'}],
    [["pvb",43], "FormDE", {html: 'Der heftige Orkan riss den maroden Schuppen in der Nacht wenig überraschend <input type="text" id="answer" name="43b" size="50">', focusID: 'answer'}],
	
	[["pva",44], "FormDE", {html: 'Der geübte Fahrer raste an dem Publikum mit seinem Ferrari so schnell wie möglich <input type="text" id="answer" name="44a" size="50">', focusID: 'answer'}],
    [["pvb",44], "FormDE", {html: 'Der geübte Fahrer raste nach dem Unfall mit seinem Ferrari so schnell wie möglich <input type="text" id="answer" name="44b" size="50">', focusID: 'answer'}],
	
	[["pva",45], "FormDE", {html: 'Die nette Schneiderin nähte den verschnörkelten Flicken ohne Bezahlung sehr sorgfältig <input type="text" id="answer" name="45a" size="50">', focusID: 'answer'}],
    [["pvb",45], "FormDE", {html: 'Die nette Schneiderin nähte den auffälligen Knopf ohne Bezahlung sehr sorgfältig <input type="text" id="answer" name="45b" size="50">', focusID: 'answer'}],
	
	[["pva",46], "FormDE", {html: 'Der verantwortungsvolle Gruppenleiter regte eine Veränderung der Gewohnheiten nach vielen erfolglosen Versuchen hin und wieder <input type="text" id="answer" name="46a" size="50">', focusID: 'answer'}],
    [["pvb",46], "FormDE", {html: 'Der verantwortungsvolle Gruppenleiter regte sich bei seiner geduldigen Frau nach der Versammlung hin und wieder <input type="text" id="answer" name="46b" size="50">', focusID: 'answer'}],
	
	[["pva",47], "FormDE", {html: 'Die ältere Dame schüttete ohne Absicht ein wenig von ihrem Getränk ziemlich ungeschickt <input type="text" id="answer" name="47a" size="50">', focusID: 'answer'}],
    [["pvb",47], "FormDE", {html: 'Die ältere Dame schüttete das ekelhafte Getränk nach dem gemeinsamen Abendessen ziemlich ungeschickt <input type="text" id="answer" name="47b" size="50">', focusID: 'answer'}],
	
	[["pva",48], "FormDE", {html: 'Der neue Film spielte den erfolgreichen Produzenten unerwartet viel Geld letztendlich doch noch <input type="text" id="answer" name="48a" size="50">', focusID: 'answer'}],
    [["pvb",48], "FormDE", {html: 'Die liebe Mutter spielte ihrem kleinen Kind eine alte Kassette letztendlich doch noch <input type="text" id="answer" name="48b" size="50">', focusID: 'answer'}],
	
	[["pva",49], "FormDE", {html: 'Der müde Lehrer bereitete seinen planmäßigen Unterricht am Vortag ziemlich unengagiert <input type="text" id="answer" name="49a" size="50">', focusID: 'answer'}],
    [["pvb",49], "FormDE", {html: 'Die müde Köchin bereitete das Gericht für die Feier ziemlich unengagiert <input type="text" id="answer" name="49b" size="50">', focusID: 'answer'}],
	
	[["pva",50], "FormDE", {html: 'Der zuständige Modeschöpfer fasste das exquisite Kleid wegen seiner Erfahrung ganz anders <input type="text" id="answer" name="50a" size="50">', focusID: 'answer'}],
    [["pvb",50], "FormDE", {html: 'Einer der Schüler fasste den anspruchsvollen Text im heutigen Unterricht ganz anders <input type="text" id="answer" name="50b" size="50">', focusID: 'answer'}],
	
	[["pva",51], "FormDE", {html: 'Der belesene Historiker forschte die Regionen von seinen letzten Reisen mehrere Monate <input type="text" id="answer" name="51a" size="50">', focusID: 'answer'}],
    [["pvb",51], "FormDE", {html: 'Der belesene Historiker forschte über die Familie und ihre Vorfahren mehrere Monate <input type="text" id="answer" name="51b" size="50">', focusID: 'answer'}],
	
	[["pva",52], "FormDE", {html: 'Das ausgefallene Kleid machte bei den Herren auf Anhieb so einiges <input type="text" id="answer" name="52a" size="50">', focusID: 'answer'}],
    [["pvb",52], "FormDE", {html: 'Der intrigante Mann machte seinem erfolgreichen Bruder auf Anhieb so einiges <input type="text" id="answer" name="52b" size="50">', focusID: 'answer'}],
	
	[["pva",53], "FormDE", {html: 'Der nette Chef wies den fahrigen Angestellten auf die Regeln freundlich aber bestimmt <input type="text" id="answer" name="53a" size="50">', focusID: 'answer'}],
    [["pvb",53], "FormDE", {html: 'Der strenge Auftraggeber wies den nervösen Bewerber aufgrund seines Verhaltens freundlich aber bestimmt <input type="text" id="answer" name="53b" size="50">', focusID: 'answer'}],
	
	[["pva",54], "FormDE", {html: 'Die flinke Schülerin schlug das Buch an der richtigen Seite rein zufällig <input type="text" id="answer" name="54a" size="50">', focusID: 'answer'}],
    [["pvb",54], "FormDE", {html: 'Die genervte Mutter schlug das offenstehende Fenster mit voller Kraft rein zufällig <input type="text" id="answer" name="54b" size="50">', focusID: 'answer'}],
	
	[["pva",55], "FormDE", {html: 'Der pflichtbewusste Ticketverkäufer ließ von der Sache trotz guter Gründe erst viel später <input type="text" id="answer" name="55a" size="50">', focusID: 'answer'}],
    [["pvb",55], "FormDE", {html: 'Der pflichtbewusste Ticketverkäufer ließ die wartenden Besucher trotz guter Gründe erst viel später <input type="text" id="answer" name="55b" size="50">', focusID: 'answer'}],
	
	[["pva",56], "FormDE", {html: 'Die vielen Gäste aßen dem tüchtigen Wirt die gefüllte Vorratskammer nun endgültig <input type="text" id="answer" name="56a" size="50">', focusID: 'answer'}],
    [["pvb",56], "FormDE", {html: 'Die vielen Gäste aßen dem tüchtigen Wirt die angesammelten Vorräte nun endgültig <input type="text" id="answer" name="56b" size="50">', focusID: 'answer'}],
	
	[["pva",57], "FormDE", {html: 'Die engagierte Biolehrerin schaute den zerstörten Baum wegen des Vandalismus sehr genau <input type="text" id="answer" name="57a" size="50">', focusID: 'answer'}],
    [["pvb",57], "FormDE", {html: 'Die engagierte Biolehrerin schaute der ganzen Klasse auf dem Rückweg sehr genau <input type="text" id="answer" name="57b" size="50">', focusID: 'answer'}],
	
	[["pva",58], "FormDE", {html: 'Die zweifelnde Sportlerin warf den gesamten Ballast dank ihres Mentaltrainers völlig befreiend <input type="text" id="answer" name="58a" size="50">', focusID: 'answer'}],
    [["pvb",58], "FormDE", {html: 'Der kopflastige Chef warf die stinkende Bananenschale während des Teammeetings völlig befreiend <input type="text" id="answer" name="58b" size="50">', focusID: 'answer'}],
	
	[["pva",59], "FormDE", {html: 'Die dreiste Verkäuferin brannte mit den gesamten Tageseinnahmen wegen ihrer Geldnot ganz spontan <input type="text" id="answer" name="59a" size="50">', focusID: 'answer'}],
    [["pvb",59], "FormDE", {html: 'Der alte Pferdezüchter brannte das markante Zeichen auf der trocknenden Tierhaut ganz spontan <input type="text" id="answer" name="59b" size="50">', focusID: 'answer'}],
	
	[["pva",60], "FormDE", {html: 'Der gewählte Abgeordnete stimmte über den Gesetzesentwurf während der Tagung sehr entschlossen <input type="text" id="answer" name="60a" size="50">', focusID: 'answer'}],
    [["pvb",60], "FormDE", {html: 'Der treue Diener stimmte seinem herrischen Chef in jeder Situation sehr entschlossen <input type="text" id="answer" name="60b" size="50">', focusID: 'answer'}],
	
	[["pva",61], "FormDE", {html: 'Der routinierte Redner blendete seine aufsteigende Nervosität wegen der Präsentation gerade noch rechtzeitig <input type="text" id="answer" name="61a" size="50">', focusID: 'answer'}],
    [["pvb",61], "FormDE", {html: 'Der erfahrene Regisseur blendete das fragwürdige Interview für die Zuschauer gerade noch rechtzeitig <input type="text" id="answer" name="61b" size="50">', focusID: 'answer'}],
	
	[["pva",62], "FormDE", {html: 'Der observierende Ermittler hörte die verdächtige Wohnung seit vielen Monaten still und heimlich <input type="text" id="answer" name="62a" size="50">', focusID: 'answer'}],
    [["pvb",62], "FormDE", {html: 'Der neugierige Nachbar hörte bei dem Telefonat seines neuen Mitbewohners still und heimlich <input type="text" id="answer" name="62b" size="50">', focusID: 'answer'}],
	
	[["pva",63], "FormDE", {html: 'Die aufmerksame Erzieherin las die heruntergefallenen Murmeln wegen der Rutschgefahr ganz schnell <input type="text" id="answer" name="63a" size="50">', focusID: 'answer'}],
    [["pvb",63], "FormDE", {html: 'Der geübte Erntehelfer las die schönen Äpfel für die Weiterverarbeitung ganz schnell <input type="text" id="answer" name="63b" size="50">', focusID: 'answer'}],
	
	[["pva",64], "FormDE", {html: 'Das beliebte Frühlingsfest fand in diesem Jahr nach der Walpurgisnacht anders als erwartet <input type="text" id="answer" name="64a" size="50">', focusID: 'answer'}],
    [["pvb",64], "FormDE", {html: 'Der engagierte Sozialarbeiter fand keine guten Bedingungen für die Häftlinge anders als erwartet <input type="text" id="answer" name="64b" size="50">', focusID: 'answer'}],
	
	[["pva",65], "FormDE", {html: 'Die erfolgreiche Nationalmannschaft schied bei der Weltmeisterschaft in einer spannenden Vorrunde ganz überraschend <input type="text" id="answer" name="65a" size="50">', focusID: 'answer'}],
    [["pvb",65], "FormDE", {html: 'Der junge Patient schied bei einer Routineoperation trotz des hohen Versorgungsstandards ganz überraschend <input type="text" id="answer" name="65b" size="50">', focusID: 'answer'}],
	
	[["pva",66], "FormDE", {html: 'Die schwangere Frau trieb ihr erstes Kind aufgrund eines Gendefekts nur gezwungenermaßen <input type="text" id="answer" name="66a" size="50">', focusID: 'answer'}],
    [["pvb",66], "FormDE", {html: 'Der strenge Gerichtsvollzieher trieb das fehlende Geld für seine Kunden nur gezwungenermaßen <input type="text" id="answer" name="66b" size="50">', focusID: 'answer'}],
	
	[["pva",67], "FormDE", {html: 'Das schwerverletzte Bein starb durch eine Blutvergiftung nach der Operation zum Leidwesen aller <input type="text" id="answer" name="67a" size="50">', focusID: 'answer'}],
    [["pvb",67], "FormDE", {html: 'Der seltene Feld-Ahorn starb trotz aller Gegenmaßnahmen im letzten Jahrhundert zum Leidwesen aller <input type="text" id="answer" name="67b" size="50">', focusID: 'answer'}],
	
	[["pva",68], "FormDE", {html: 'Die leidenschaftliche Hobbyköchin schreckte die gekochten Eier mit kaltem Wasser ganz schnell <input type="text" id="answer" name="68a" size="50">', focusID: 'answer'}],
    [["pvb",68], "FormDE", {html: 'Der schlafende Mann schreckte bei dem Knall durch einen Böller ganz schnell <input type="text" id="answer" name="68b" size="50">', focusID: 'answer'}],
	
	[["pva",69], "FormDE", {html: 'Der alte Computer wertete die große Datenmenge zum Erstaunen der Programmierer ganz plötzlich <input type="text" id="answer" name="69a" size="50">', focusID: 'answer'}],
    [["pvb",69], "FormDE", {html: 'Das nahe Gleis wertete das unbebaute Grundstück zum Erstaunen der Investoren ganz plötzlich <input type="text" id="answer" name="69b" size="50">', focusID: 'answer'}],
	
	[["pva",70], "FormDE", {html: 'Der ängstliche Junge tauchte den kleinen Zeh beim jährlichen Schwimmausflug wirklich kurz <input type="text" id="answer" name="70a" size="50">', focusID: 'answer'}],
    [["pvb",70], "FormDE", {html: 'Der mysteriöse Fremde tauchte in der Menge während des Jahrmarkts wirklich kurz <input type="text" id="answer" name="70b" size="50">', focusID: 'answer'}],
	
	[["pva",71], "FormDE", {html: 'Der neugewählte Papst sprach den Bischof aufgrund seiner treuen Dienste reiflich überlegt <input type="text" id="answer" name="71a" size="50">', focusID: 'answer'}],
    [["pvb",71], "FormDE", {html: 'Die erfahrene Familienrichterin sprach dem verzweifelten Vater das alleinige Sorgerecht reiflich überlegt <input type="text" id="answer" name="71b" size="50">', focusID: 'answer'}],
	
	[["pva",72], "FormDE", {html: 'Die neue Eigentümerin ritt das weitläufige Gut wegen des anstehenden Unwetters fast galoppierend <input type="text" id="answer" name="72a" size="50">', focusID: 'answer'}],
    [["pvb",72], "FormDE", {html: 'Die sogenannte Pferdeflüsterin ritt der restlichen Gruppe aus Lust und Laune fast galoppierend <input type="text" id="answer" name="72b" size="50">', focusID: 'answer'}],
	
	[["pva",73], "FormDE", {html: 'Das ungestüme Kind rannte die gebrechliche Dame trotz ihrer leuchtenden Jacke ausgesprochen zielstrebig <input type="text" id="answer" name="73a" size="50">', focusID: 'answer'}],
    [["pvb",73], "FormDE", {html: 'Das ungestüme Kind rannte der aufgebrachten Tagesmutter trotz der altbekannten Regeln ausgesprochen zielstrebig <input type="text" id="answer" name="73b" size="50">', focusID: 'answer'}],
	
	[["pva",74], "FormDE", {html: 'Das teure Textverarbeitungsprogramm rückte den markierten Text wegen eines Programmierfehlers nicht korrekt <input type="text" id="answer" name="74a" size="50">', focusID: 'answer'}],
    [["pvb",74], "FormDE", {html: 'Die gezogene Wartenummer rückte in der Liste wegen eines Programmierfehlers nicht korrekt <input type="text" id="answer" name="74b" size="50">', focusID: 'answer'}],
	
	[["pva",75], "FormDE", {html: 'Die interessierte Kundin handelte einen guten Vertrag in einem langen Gespräch sehr mühselig <input type="text" id="answer" name="75a" size="50">', focusID: 'answer'}],
    [["pvb",75], "FormDE", {html: 'Die interessierte Kundin handelte den aktuellen Preis in einem langen Gespräch sehr mühselig <input type="text" id="answer" name="75b" size="50">', focusID: 'answer'}],
	
	[["pva",76], "FormDE", {html: 'Der gealterte Philosoph horchte bei der Erwähnung des Namens wegen der merkwürdigen Verhältnisse ein wenig verwirrt <input type="text" id="answer" name="76a" size="50">', focusID: 'answer'}],
    [["pvb",76], "FormDE", {html: 'Der gealterte Beamte horchte die unscheinbare Familie wegen der merkwürdigen Verhältnisse am Nachmittag ein wenig verwirrt <input type="text" id="answer" name="76b" size="50">', focusID: 'answer'}],
	
	[["pva",77], "FormDE", {html: 'Die rebellische Tochter kratzte ihren außergewöhnlichen Namen über mehrere Tage immer wieder <input type="text" id="answer" name="77a" size="50">', focusID: 'answer'}],
    [["pvb",77], "FormDE", {html: 'Die energische Hausfrau kratzte den widerspenstigen Schmutz über mehrere Tage immer wieder <input type="text" id="answer" name="77b" size="50">', focusID: 'answer'}],
	
	[["pva",78], "FormDE", {html: 'Der tyrannische Direktor forderte all seinen Schülern hervorragende Leistungen beim Test wie angekündigt <input type="text" id="answer" name="78a" size="50">', focusID: 'answer'}],
    [["pvb",78], "FormDE", {html: 'Der zornige Butler forderte die nervigen Gäste zum Verlassen des Hauses wie angekündigt <input type="text" id="answer" name="78b" size="50">', focusID: 'answer'}],
	
	[["pva",79], "FormDE", {html: 'Die unerfahrene Nachhilfelehrerin fragte das gelernte Wissen bei den Schülern sehr interessiert <input type="text" id="answer" name="79a" size="50">', focusID: 'answer'}],
    [["pvb",79], "FormDE", {html: 'Die unerfahrene Erzieherin fragte bei den Eltern wegen mangelnder Informationen sehr interessiert <input type="text" id="answer" name="79b" size="50">', focusID: 'answer'}],
	
	[["pva",80], "FormDE", {html: 'Der tüchtige Handwerker feilte das anspruchsvolle Muster auf den Kleiderschrank sehr sorgfältig <input type="text" id="answer" name="80a" size="50">', focusID: 'answer'}],
    [["pvb",80], "FormDE", {html: 'Der inspirierte Schulsprecher feilte seine letzte Rede wegen ihrer Bedeutung sehr sorgfältig <input type="text" id="answer" name="80b" size="50">', focusID: 'answer'}],
	
	[["pva",81], "FormDE", {html: 'Die überglückliche Frau hatte ihren gerade erhaltenen Führerschein bei einer Verkehrskontrolle doch tatsächlich <input type="text" id="answer" name="81a" size="50">', focusID: 'answer'}],
    [["pvb",81], "FormDE", {html: 'Die irritierte Frau hatte das Verhalten ihres Freundes trotz vieler Versprechen doch tatsächlich <input type="text" id="answer" name="81b" size="50">', focusID: 'answer'}],
	
	[["pva",82], "FormDE", {html: 'Der mürrische Aufseher ging die lange Liste dem Alphabet nach möglichst ruhig <input type="text" id="answer" name="82a" size="50">', focusID: 'answer'}],
    [["pvb",82], "FormDE", {html: 'Der neurotische Mieter ging immer nur nachts wegen seiner Ängstlichkeit möglichst ruhig <input type="text" id="answer" name="82b" size="50">', focusID: 'answer'}],
	
	[["pva",83], "FormDE", {html: 'Die selbstbewusste Architektin dichtete das schräge Fenster wegen seiner Position sehr geschickt <input type="text" id="answer" name="83a" size="50">', focusID: 'answer'}],
    [["pvb",83], "FormDE", {html: 'Der berühmte Lyriker dichtete dem amtierenden König die peinlichen Ereignisse sehr geschickt <input type="text" id="answer" name="83b" size="50">', focusID: 'answer'}],
	
	[["pva",84], "FormDE", {html: 'Das weite Feld lag wegen seiner Größe seit vielen Jahren kaum bemerkt <input type="text" id="answer" name="84a" size="50">', focusID: 'answer'}],
    [["pvb",84], "FormDE", {html: 'Der neue Stift lag zum freien Ausprobieren seit einigen Stunden kaum bemerkt <input type="text" id="answer" name="84b" size="50">', focusID: 'answer'}],
	
	[["pva",85], "FormDE", {html: 'Der naive Freund kaufte seiner neuen Partnerin die ausgeklügelte Lüge ganz vertrauensvoll <input type="text" id="answer" name="85a" size="50">', focusID: 'answer'}],
    [["pvb",85], "FormDE", {html: 'Der coole Teenager kaufte seinem besten Kumpel das teure Smartphone ganz vertrauensvoll <input type="text" id="answer" name="85b" size="50">', focusID: 'answer'}],
	
	[["pva",86], "FormDE", {html: 'Die ambitionierte Frau warf dem seriösen Mann ein schweres Verbrechen geradezu gelassen <input type="text" id="answer" name="86a" size="50">', focusID: 'answer'}],
    [["pvb",86], "FormDE", {html: 'Das ambitionierte Mädchen warf den neugierigen Mitschüler während des Spiels geradezu gelassen <input type="text" id="answer" name="86b" size="50">', focusID: 'answer'}],
	
	[["pva",87], "FormDE", {html: 'Der geladene Stargast lenkte vom eigentlichen Thema an diesem Abend nur sehr ungern <input type="text" id="answer" name="87a" size="50">', focusID: 'answer'}],
    [["pvb",87], "FormDE", {html: 'Der sture Firmenchef lenkte nach den Arbeitnehmerstreiks in der Vergangenheit nur sehr ungern <input type="text" id="answer" name="87b" size="50">', focusID: 'answer'}],
	
	[["pva",88], "FormDE", {html: 'Die ehemalige Vorsitzende trat den anonymen Alkoholikern aus eigenem Antrieb heimlich und unbemerkt <input type="text" id="answer" name="88a" size="50">', focusID: 'answer'}],
    [["pvb",88], "FormDE", {html: 'Die übereifrige Journalistin trat während des Privatgesprächs aus reiner Neugier heimlich und unbemerkt <input type="text" id="answer" name="88b" size="50">', focusID: 'answer'}],
	
	[["pva",89], "FormDE", {html: 'Der wütende Anwalt brach die geforderten Verhandlungen nach einem Streit wenig bedacht <input type="text" id="answer" name="89a" size="50">', focusID: 'answer'}],
    [["pvb",89], "FormDE", {html: 'Der wütende Freund brach die marode Tür nach einem Streit wenig bedacht <input type="text" id="answer" name="89b" size="50">', focusID: 'answer'}],
	
	[["pva",90], "FormDE", {html: 'Die trotzige Detektivin deckte das gehütete Geheimnis durch ihr enormes Wissen schon früh <input type="text" id="answer" name="89c" size="50">', focusID: 'answer'}],
    [["pvb",90], "FormDE", {html: 'Die warmherzige Großmutter deckte ihre geliebte Enkelin mit teuren orientalischen Tüchern schon früh <input type="text" id="answer" name="89d" size="50">', focusID: 'answer'}],
	
	[["pva",91], "FormDE", {html: 'Die geübte Fahrerin hing in einem Stau wegen eines Unfalls merklich gestresst <input type="text" id="answer" name="90a" size="50">', focusID: 'answer'}],
    [["pvb",91], "FormDE", {html: 'Die gutmütige Ehefrau hing die geblümten Vorhänge nach einem Telefonat merklich gestresst <input type="text" id="answer" name="90b" size="50">', focusID: 'answer'}],

	[["pva",92], "FormDE", {html: 'Der verunsicherte Förderer stieg nach dem öffentlichen Skandal aus dem Sponsorenvertrag wie bereits bekannt <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",92], "FormDE", {html: 'Der älteste Fußballverein stieg nach einer harten Saison in die 2. Liga wie bereits bekannt <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",93], "FormDE", {html: 'Der energische Politiker griff seine wirklich mächtigen Gegner während der Debatte ziemlich häufig <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",93], "FormDE", {html: 'Der gerechte Vater griff im Streit seiner Kinder wegen seiner Prinzipien ziemlich häufig <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],

	[["pva",94], "FormDE", {html: 'Die entspannte Bewohnerin nahm am bunten Geschehen trotz der Einschränkungen wie immer <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",94], "FormDE", {html: 'Die entspannte Besitzerin nahm das negative Gutachten trotz anderer Meinungen wie immer <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",95], "FormDE", {html: 'Der redsame Verkäufer wickelte den lukrativen Kaufvertrag dank seiner Überredungskunst schnell und gekonnt <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",95], "FormDE", {html: 'Der redsame Schneider wickelte den exquisiten Stoff auf der Rolle schnell und gekonnt <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",96], "FormDE", {html: 'Der einfühlsame Freund baute seine beste Freundin nach dem Schicksalsschlag sehr gern <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",96], "FormDE", {html: 'Der fleißige Mitarbeiter baute die vielen Überstunden vor dem Urlaub sehr gern <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",97], "FormDE", {html: 'Das zusätzliche Gehalt stand dem fleißigen Mitarbeiter laut des unterzeichneten Vertrags schon lange <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",97], "FormDE", {html: 'Die unabhängige Stiftung stand der traumatisierten Veteranin in der schwierigen Zeit schon lange <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",98], "FormDE", {html: 'Die bestohlene Frau zeigte den dreisten Diebstahl bei der Polizei sehr entschlossen <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",98], "FormDE", {html: 'Die gewandete Rednerin zeigte sehr triftige Argumente bei der Podiumsdiskussion sehr entschlossen <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",99], "FormDE", {html: 'Der abgelenkte Fahrer wich dem betrunkenen Geisterfahrer wegen der Sichtverhältnisse völlig überfordert <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",99], "FormDE", {html: 'Der neue Stadtrat wich vom geplanten Kurs wegen der Fehlkalkulationen völlig überfordert <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",100], "FormDE", {html: 'Der talentierte Künstler bildete von dem Model die lieblichen Rundungen sehr akribisch <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",100], "FormDE", {html: 'Der stadtbekannte Goldschmied bildete seinen neuen Lehrling in der Schmiedekunst sehr akribisch <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",101], "FormDE", {html: 'Die rücksichtsvolle Politesse sah unter den besonderen Umständen von einem Strafzettel ganz überraschend <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",101], "FormDE", {html: 'Der allwissende Professor sah nach der wichtigen Frage von seinem Studenten ganz überraschend <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",102], "FormDE", {html: 'Der erfahrene Lehrer leitete seine jungen Schüler zum leserlichen Schreiben zügig und gekonnt <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",102], "FormDE", {html: 'Der kluge Mitschüler leitete die schwierige Formel mit seinem Wissen zügig und gekonnt <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	
	[["pva",103], "FormDE", {html: 'Der selbstbewusste Techniker schloss das neue Telefon an seinem ersten Arbeitstag sehr vorschriftsmäßig <input type="text" id="answer" name="90c" size="50">', focusID: 'answer'}],
    [["pvb",103], "FormDE", {html: 'Der selbstbewusste Hausmeister schloss die knarrende Tür im Verlauf des Tages sehr vorschriftsmäßig <input type="text" id="answer" name="90d" size="50">', focusID: 'answer'}],
	

	["filler","FormDE",{html:'Trotz seiner heimlichen Machenschaften wurde der Präsident vom Volk <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //1
	["filler","FormDE",{html:'Ausgerechnet an einem verregneten Morgen hatte das neue Schuljahr <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //2
	["filler","FormDE",{html:'Erst in der sehr langen Schlange wurde von der Lehrerin beschämend <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //3
	["filler","FormDE",{html:'Bei der Anhörung hatte die sehr vertrauenserweckende Zeugin <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //4
	["filler","FormDE",{html:'Nach der Fertigstellung der neuen Kirche wurde an den Sonntagen wieder gemeinsam <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //5
	["filler","FormDE",{html:'Vom hochrangigen Ministerium wurde der Botschafterin unerwartet eine Beförderung <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //6
	["filler","FormDE",{html:'In dem sehr gut organisierten Waisenhaus wurden die Kinder gründlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //7
	["filler","FormDE",{html:'Im Sommer haben die herrlich duftenden Rosen wieder prächtig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //8
	["filler","FormDE",{html:'Auf dem Bügelbrett wurden die durch das Waschen entstandenen Falten sorgfältig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //9
	["filler","FormDE",{html:'Im stillen Wartezimmer dämpfte er seine <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //10
	["filler","FormDE",{html:'Nach der letzten Absage hatte er lange <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //11
	["filler","FormDE",{html:'Die poetische Studentin hatte einen schönen Text <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //12
	["filler","FormDE",{html:'In dem angesagten Laden kam die stylisch geschminkte Assistentin eifrig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //13
	["filler","FormDE",{html:'Vom Sofa wurde der große Rotweinfleck hastig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //14
	["filler","FormDE",{html:'Den Medien zufolge wurde die Millionärstochter unbemerkt <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //15
	["filler","FormDE",{html:'Von dem innovativen Mediendesigner wurde ein Cover <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //16
	["filler","FormDE",{html:'In den sorgfältig erhobenen Studienergebnissen ergab sich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //17
	["filler","FormDE",{html:'Auf dem Weg zu dem begehrten Gipfel wurde ein Basislager <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //18
	["filler","FormDE",{html:'Nach dem harten Winter waren die Vorräte komplett <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //19
	["filler","FormDE",{html:'Bei einem Großeinsatz versuchte der mutige Pilot das Feuer zu <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //20
	["filler","FormDE",{html:'Nach dem Unterrichtsende hatte der zerstreute Dozent vergessen zu <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //21
	["filler","FormDE",{html:'Auf der Feier wurde der mit viel Liebe gebackene Kuchen gierig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //22
	["filler","FormDE",{html:'Trotz der Baumschutzverordnung hatte der Mann heimlich Bäume <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //23
	["filler","FormDE",{html:'Mit der Zeit fehlte ihr der treue Freund aus <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //24
	["filler","FormDE",{html:'Mit einer Gewürzmühle wurde das vegetarische Essen <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //25
	["filler","FormDE",{html:'In der Garage versuchte der Mann das Loch im Schlauch zu <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //26
	["filler","FormDE",{html:'Die Katze floh aus dem Wohnzimmer, wo die Putzfrau mit dem Staubsauger <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //27
	["filler","FormDE",{html:'In der Schule wurde der Junge so gut gefördert, dass er mit 14 Jahren bereits <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //28
	["filler","FormDE",{html:'Der Boxer hatte seinen stärksten Konkurrenten <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //29
	["filler","FormDE",{html:'Nach dem sehr leckeren Abendessen hatte sich der Freund nicht <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //30
	["filler","FormDE",{html:'Die schwierigen finanziellen Zeiten fürchteten <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //31
	["filler","FormDE",{html:'Nach dem Abitur wollte die sprachbegabte Schülerin erstmal von zu Hause <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //32
	["filler","FormDE",{html:'An die Parolen der Partei hatte das naive Volk <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //33
	["filler","FormDE",{html:'Beim Abendessen hatte der Ehemann das leidige Thema wieder <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //34
	["filler","FormDE",{html:'Am Hoteleingang wurden die Besucher von dem Rezeptionisten freundlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //35
	["filler","FormDE",{html:'Beim Lesen eines spannenden Buches hatte die Frau es immer <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //36
	["filler","FormDE",{html:'Mit einem stabilen Schloss versuchte der Radfahrer nun zu <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //37
	["filler","FormDE",{html:'Durch den Mikrochip wurde der vermisste Hund leicht <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //38
	["filler","FormDE",{html:'Aus dem Nachbarland wurde Öl massenhaft <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //39
	["filler","FormDE",{html:'Durch das Radio wurden die in nordöstliche Richtung fahrenden Autofahrer rechtzeitig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //40
	["filler","FormDE",{html:'Aufgrund der Explosion in der Chemieanlage wurden die Atemwege der Mitarbeiter stark <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //41
	["filler","FormDE",{html:'Nach der ganztägigen Wanderung hatte die Haut schrecklich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //42
	["filler","FormDE",{html:'Beim Aufbau der Schrankwand hatte er die Schrauben für die Türen sorgfältig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //43
	["filler","FormDE",{html:'Nach langer Bedenkzeit hatte das vermögende Ehepaar das Traumhaus endlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //44
	["filler","FormDE",{html:'In der Werkstatt hatte der handwerklich begabte Vater die Holzstücke selbst <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //45 
	["filler","FormDE",{html:'Der Freund kam zu spät am Flughafen <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //46
	["filler","FormDE",{html:'Nach der Montage war der Kleiderschrank vollständig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //47
	["filler","FormDE",{html:'Mit dem Einsatz einer Pflegekraft wollte die sehr fürsorgliche Tochter <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //48
	["filler","FormDE",{html:'In der kleinen peruanischen Schule wurde Englisch so gut <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //49
	["filler","FormDE",{html:'In der Bar war die Stimme der unbekannten Sängerin sehr <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //50
	["filler","FormDE",{html:'Dem dankbaren Empfänger wurde das Paket endlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //51
	["filler","FormDE",{html:'Mit einer Karotte wurden die Esel von dem offenen Gatter <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //52
/*	["filler","FormDE",{html:'Die Absolvierung der Weiterbildung hat sich nicht <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //53
	["filler","FormDE",{html:'Mithilfe einer neuen Software wurde das alte Bewerbungsverfahren endlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //54
	["filler","FormDE",{html:'Im Kaufhaus wurde der zum Geburtstag geschenkte Gutschein gleich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //55
	["filler","FormDE",{html:'In einer aufwändigen Aktion wurde das hässliche Graffiti clever <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //56
	["filler","FormDE",{html:'Mit dem hastig unterbreiteten Angebot wollte der Verkäufer eine Konfrontation <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //57
	["filler","FormDE",{html:'Die Anspielungen waren von dem forschen Manager eigentlich nicht böse <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //58
	["filler","FormDE",{html:'In der Wohngemeinschaft wurde ein gemütliches Gästezimmer <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //59
	["filler","FormDE",{html:'Der Maler hatte die übrig gebliebenen Farbreste einfach <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //60
	["filler","FormDE",{html:'Schon seit seiner Kindheit hatte der Bäcker Vollkornbrot lieber als Weißbrot <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //61
	["filler","FormDE",{html:'Der Sohn hatte die schwere Haustür sehr zögerlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //62
	["filler","FormDE",{html:'Während des Spiels wurde die von allen verachtete fremde Mannschaft laut <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //63
	["filler","FormDE",{html:'Nachdem ihre Nichte abgereist war, wurde die Wohnung ordentlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //64
	["filler","FormDE",{html:'Nach ihrer Disputation wurde die Physikerin von dem Komitee <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //65
	["filler","FormDE",{html:'Am nächsten Morgen wurde das vom letzten Abendessen übrig gebliebene Geschirr vollständig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //66
	["filler","FormDE",{html:'Im Stadtzentrum hatte die Königin ihren zahlreichen Untertanen <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //67
	["filler","FormDE",{html:'Der Bär entkam den Jägern trotz der <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //68
	["filler","FormDE",{html:'Der ungezogene Junge erfand eine <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //69
	["filler","FormDE",{html:'Letztes Jahr bargen Rettungshunde viele Verletzte <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //70
	["filler","FormDE",{html:'Der Meinung vieler Experten zufolge können Krokodile nicht <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //71
	["filler","FormDE",{html:'Der Landwirt züchtete Pferde und Kühe auf seiner <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //72
	["filler","FormDE",{html:'Bis zum Ende der Besprechung wurden die wichtigsten Fragen immer noch nicht <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //73
	["filler","FormDE",{html:'Sie hatte ein rotes Band um die Schachtel <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //74
	["filler","FormDE",{html:'Die Kinder falteten die Papierbögen nach der <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //75
	["filler","FormDE",{html:'Nach mehreren Stunden wurde der mit Sorge erwartete Statusbericht immer noch nicht <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //76
	["filler","FormDE",{html:'Nach langen Vorbereitungen wurde das exklusive Geschäft endlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //77
	["filler","FormDE",{html:'Der Schraubdeckel konnte nicht <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //78
	["filler","FormDE",{html:'Die Frau wurde von den Missgeschicken aus ihrer Jugendzeit <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //79
	["filler","FormDE",{html:'In dem Film ging es um einen <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //80
	["filler","FormDE",{html:'Die Putzfrau reinigte ungern das stark verschmutzte <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //81
	["filler","FormDE",{html:'Als die Freunde an dem beliebten See ankamen, wurden die Schlafsäcke hastig <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //82
	["filler","FormDE",{html:'Auf dem Grill wurde das eingelegte Gemüse <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //83
	["filler","FormDE",{html:'In den schwerflüssigen Teig wurde noch etwas Milch <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //84
	["filler","FormDE",{html:'Die neu errichteten Wohnheime wurden von der Kollegin als sehr gut <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //85
	["filler","FormDE",{html:'Aus seiner Wohnung war der Mann den ganzen Tag lang <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //86
	["filler","FormDE",{html:'Auf Wunsch wurden die vielfältigen Muster gerne <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //87
	["filler","FormDE",{html:'Sie lichteten den Anker und segelten <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //88
	["filler","FormDE",{html:'Am Wochenende zuvor hatte der noch aktive Vulkan viel Lava <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //89
	["filler","FormDE",{html:'Um 10 Uhr wurde der gut besuchte Tanzwettbewerb pünktlich <input type="text" id="answer" name="filler" size="50">', focusID: 'answer'}], //90 
*/

	["part2", "FormDE", {html: '<div class="box"><p text-align: center>Nun kommen wir zu <b>Teil 2</b>:</p><p text-align: center>Bitte hebe unter jeder möglichen Satzvervollständigung den Schieberegler so hoch an, wie er die Wahrscheinlichkeit widerspiegelt, dass <b>Du</b> dieses Wort im gegebenen Kontext verwenden würdest. Zum Beispiel:</p><p style="text-align:center"><img width="600" height="450" class="center" src="data:image/png;base64,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" /></p></div>'}],

    [["awa",[901,1]], "ScaleArray", {html: "<p class='ContextSen'>Die erfahrenen Expeditionsleiter setzten den Wissenschaftler wegen seines Versagens sehr entschlossen...</p>", labels:['ab','aus','fort','hin','um','vor','zusammen']}],
    [["awb",[901,1]], "ScaleArray", {html: "<p class='ContextSen'>Die erfahrenen Wissenschaftler setzten ihre Experimente trotz des Versagens sehr entschlossen...</p>", labels:['ab','aus','fort','hin','um','vor','zusammen']}],
	
	[["awa",[902,2]], "ScaleArray", {html: "<p class='ContextSen'>Die bekannte Forscherin legte das kostbare Fossil in der Ausgrabungsstätte besonders behutsam...</p>", labels:[ 'ab', 'frei', 'hin', 'nieder', 'offen', 'vor', 'weg']}],
    [["awb",[902,2]], "ScaleArray", {html: "<p class='ContextSen'>Die bekannte Forscherin legte das kostbare Buch von ihrem Mann besonders behutsam...</p>", labels:['ab', 'frei', 'hin', 'nieder', 'offen', 'vor', 'weg']}],
	
	[["awa",[903,3]], "ScaleArray", {html: "<p class='ContextSen'>Die gemeine Bande hing dem unschuldigen Mann eine schreckliche Straftat völlig skrupellos...</p>", labels:[ 'ab', 'an', 'auf', 'vor', 'weg', 'zu', 'zusammen']}],
    [["awb",[903,3]], "ScaleArray", {html: "<p class='ContextSen'>Die gemeine Tante hing das schreckliche Porträt von ihrem Mann völlig skrupellos...</p>", labels:[ 'ab', 'an', 'auf', 'vor', 'weg', 'zu', 'zusammen']}],

	[["awa",[904,4]], "ScaleArray", {html: "<p class='ContextSen'>Die fürsorgliche Mutter klebte einen Teil der Wand für die Malerarbeiten überaus sorgfältig...</p>", labels:[ 'ab', 'an', 'auf', 'ein', 'fest', 'um', 'weg']}],
    [["awb",[904,4]], "ScaleArray", {html: "<p class='ContextSen'>Die freundliche Tante klebte ein kleines Bild für ihren jungen Neffen überaus sorgfältig...</p>", labels:[ 'ab', 'an', 'auf', 'ein', 'fest', 'um', 'weg']}],
	
	[["awa",[905,5]], "ScaleArray", {html: "<p class='ContextSen'>Der erfolgreiche Künstler fing das neue Projekt trotz des Zeitdrucks sehr motiviert...</p>", labels:[ 'ab', 'an', 'auf', 'ein', 'um', 'vor', 'weg']}],
    [["awb",[905,5]], "ScaleArray", {html: "<p class='ContextSen'>Der beliebte Spieler fing den lauten Applaus nach dem Sieg sehr motiviert...</p>", labels:[ 'ab', 'an', 'auf', 'ein', 'um', 'vor', 'weg']}],
	
	[["awa",[906,6]], "ScaleArray", {html: "<p class='ContextSen'>Der alte Mann biss von dem harten Brot während des Frühstücks laut krachend...</p>", labels:[ 'ab', 'an', 'durch', 'entzwei', 'heraus', 'herunter', 'vorbei']}],
    [["awb",[906,6]], "ScaleArray", {html: "<p class='ContextSen'>Der alte Mann biss während der besinnlichen Weihnachtsfeier die harte Nuss laut krachend...</p>", labels:[ 'ab', 'an', 'durch', 'entzwei', 'heraus', 'herunter', 'vorbei']}],
		
	[["awa",[907,7]], "ScaleArray", {html: "<p class='ContextSen'>Der listige Schüler schrieb von einem arglosen Klassenkameraden während des Tests heimlich und unbemerkt...</p>", labels:[ 'ab', 'auf', 'dazu', 'herum', 'mit', 'nieder', 'vor']}],
    [["awb",[907,7]], "ScaleArray", {html: "<p class='ContextSen'>Der listige Schüler schrieb die Vergehen seiner Mitschüler während der Pause heimlich und unbemerkt...</p>", labels:[ 'ab', 'auf', 'dazu', 'herum', 'mit', 'nieder', 'vor']}],
	
	[["awa",[908,8]], "ScaleArray", {html: "<p class='ContextSen'>Der neue Angestellte packte das bekannte Problem trotz guter Intentionen eher unbeholfen...</p>", labels:[ 'an', 'aus', 'ein', 'mit', 'um', 'vor', 'weg']}],
    [["awb",[908,8]], "ScaleArray", {html: "<p class='ContextSen'>Der weitgereiste Gast packte das Geschenk im Verlauf des Abends eher unbeholfen...</p>", labels:[ 'an', 'aus', 'ein', 'mit', 'um', 'vor', 'weg']}],

	[["awa",[909,9]], "ScaleArray", {html: "<p class='ContextSen'>Die freundliche Köchin rieb den hartnäckigen Schmutz mit einem Lappen völlig problemlos...</p>", labels:[ 'ab', 'auf', 'ein', 'mit', 'nach', 'vor', 'zu']}],
    [["awb",[909,9]], "ScaleArray", {html: "<p class='ContextSen'>Die freundliche Schusterin rieb die flüssige Scheuermilch mit einem Schwamm völlig problemlos...</p>", labels:[ 'ab', 'auf', 'ein', 'mit', 'nach', 'vor', 'zu']}],
	
	[["awa",[910,10]], "ScaleArray", {html: "<p class='ContextSen'>Der gutmütige Bürgermeister stach das schwere Fass auf dem Dorffest äußerst fröhlich...</p>", labels:[ 'ab', 'an', 'aus', 'ein', 'nach', 'vor', 'zu']}],
    [["awb",[910,10]], "ScaleArray", {html: "<p class='ContextSen'>Die hilfsbereite Tochter stach hübsche Muster mit einer dünnen Nadel äußerst fröhlich...</p>", labels:[ 'ab', 'an', 'aus', 'ein', 'nach', 'vor', 'zu']}],
	
	[["awa",[911,11]], "ScaleArray", {html: "<p class='ContextSen'>Der unsichere Antragsteller füllte das notwendige Formular in der Pause sehr vorsichtig...</p>", labels:[ 'an', 'auf', 'aus', 'ein', 'mit', 'um', 'zu']}],
    [["awb",[911,11]], "ScaleArray", {html: "<p class='ContextSen'>Der reiche Gastgeber füllte das kalte Getränk für den Eingeladenen sehr vorsichtig...</p>", labels:[ 'an', 'auf', 'aus', 'ein', 'mit', 'um', 'zu']}],
	
	[["awa",[912,12]], "ScaleArray", {html: "<p class='ContextSen'>Der unbeliebte Magier gab mit seinen Talenten außerhalb einer Vorstellung besonders raffiniert...</p>", labels:[ 'ab', 'an', 'durch', 'her', 'um', 'vor', 'weg']}],
    [["awb",[912,12]], "ScaleArray", {html: "<p class='ContextSen'>Der schnelle Junge gab den kleinen Filzball während des Spiels besonders raffiniert...</p>", labels:[ 'ab', 'an', 'durch', 'her', 'um', 'vor', 'weg']}],
	
	[["awa",[913,13]], "ScaleArray", {html: "<p class='ContextSen'>Das neue Buch quoll nach dem Fall in die Badewanne wegen des heißen Wassers schneller als gedacht...</p>", labels:[ 'auf', 'hervor', 'hoch', 'her', 'über', 'um', 'weg']}],
    [["awb",[913,13]], "ScaleArray", {html: "<p class='ContextSen'>Das heiße Wasser quoll während der Zubereitung der gefüllten Nudeln wegen der großen Hitze schneller als gedacht...</p>", labels:[ 'auf', 'hervor', 'hoch', 'her', 'über', 'um', 'weg']}],
	
	[["awa",[914,14]], "ScaleArray", {html: "<p class='ContextSen'>Der liebe Vater brachte den notwendigen Mut für das Gespräch nicht besonders erfolgreich...</p>", labels:[ 'auf', 'bei', 'hervor', 'nahe', 'näher', 'vor', 'weg']}],
    [["awb",[914,14]], "ScaleArray", {html: "<p class='ContextSen'>Der liebe Vater brachte seinen eigenen Kindern die wichtigsten Tugenden nicht besonders erfolgreich...</p>", labels:[ 'auf', 'bei', 'hervor', 'nahe', 'näher', 'vor', 'weg']}],
	
	[["awa",[915,15]], "ScaleArray", {html: "<p class='ContextSen'>Die ruhige Spaziergängerin hob den Stein als Andenken an die schöne Zeit fast unbemerkt...</p>", labels:[ 'an', 'auf', 'hervor', 'mit', 'näher', 'um', 'vor']}],
    [["awb",[915,15]], "ScaleArray", {html: "<p class='ContextSen'>Die leitende Angestellte hob die strenge Regel für ihre hoch geschätzten Mitarbeiter fast unbemerkt...</p>", labels:[ 'an', 'auf', 'hervor', 'mit', 'näher', 'um', 'vor']}],
	
	[["awa",[916,16]], "ScaleArray", {html: "<p class='ContextSen'>Der genervte Elektriker schloss das lose Kabel trotz der nächtlichen Stunde vorbildlich und gewissenhaft...</p>", labels:[ 'an', 'aus', 'ein', 'mit', 'nach', 'über', 'vor']}],
    [["awb",[916,16]], "ScaleArray", {html: "<p class='ContextSen'>Die wissenschaftliche Hilfskraft schloss den ausgewählten Datenpunkt bei seiner statistischen Analyse vorbildlich und gewissenhaft...</p>", labels:[ 'an', 'aus', 'ein', 'mit', 'nach', 'über', 'vor']}],
	
	[["awa",[917,17]], "ScaleArray", {html: "<p class='ContextSen'>Die verängstigte Patientin rief die zuständige Arztpraxis wegen ihrer fraglichen Verletzung jede Woche...</p>", labels:[ 'an', 'auf', 'ab', 'ein', 'mit', 'vor', 'zu']}],
    [["awb",[917,17]], "ScaleArray", {html: "<p class='ContextSen'>Die verängstigte Studentin rief die erhobenen Daten an einem alten Computer jede Woche...</p>", labels:[ 'an', 'auf', 'ab', 'ein', 'mit', 'vor', 'zu']}],
	
	[["awa",[918,18]], "ScaleArray", {html: "<p class='ContextSen'>Das kleine Mädchen sprach den unaufmerksamen Eltern alle blasphemische Schimpfwörter laut und deutlich...</p>", labels:[ 'an', 'aus', 'frei', 'heilig', 'hervor', 'mit', 'nach']}],
    [["awb",[918,18]], "ScaleArray", {html: "<p class='ContextSen'>Die große Gemeinde sprach die reumütige Frau wegen ihrer Handlungen laut und deutlich...</p>", labels:[ 'an', 'aus', 'frei', 'heilig', 'hervor', 'mit', 'nach']}],
	
	[["awa",[919,19]], "ScaleArray", {html: "<p class='ContextSen'>Der ehrgeizige Schüler nahm den äußerst geringen Erlös vom Kuchenverkauf sichtlich frustriert...</p>", labels:[ 'an', 'ein', 'her', 'hin', 'nach', 'vor', 'zurück' ]}],
    [["awb",[919,19]], "ScaleArray", {html: "<p class='ContextSen'>Der strenge Kritiker nahm alle Kommentare nach einer weiteren Präsentation sichtlich frustriert...</p>", labels:[ 'an', 'ein', 'her', 'hin', 'nach', 'vor', 'zurück' ]}],
	
	[["awa",[920,20]], "ScaleArray", {html: "<p class='ContextSen'>Die neugierige Tante deckte das alte Geheimnis während eines informativen Gesprächs behutsam und verantwortungsvoll...</p>", labels:[ 'ab', 'auf', 'ein', 'voll', 'hin', 'nach', 'zu']}],
    [["awb",[920,20]], "ScaleArray", {html: "<p class='ContextSen'>Der eifrige Bauarbeiter deckte das große Loch während eines langen Arbeitstages behutsam und verantwortungsvoll...</p>", labels:[ 'ab', 'auf', 'ein', 'voll', 'hin', 'nach', 'zu']}],

	[["awa",[921,21]], "ScaleArray", {html: "<p class='ContextSen'>Die gesunde Fußballerin löste ihre verletzte Mitspielerin während eines wichtigen Spiels schneller als gedacht...</p>", labels:[ 'ab', 'an', 'auf', 'aus', 'ein', 'nach', 'zu']}],
    [["awb",[921,21]], "ScaleArray", {html: "<p class='ContextSen'>Der unparteiische Rat löste die unbekannte Gruppe während einer wichtigen Sitzung schneller als gedacht...</p>", labels:[ 'ab', 'an', 'auf', 'aus', 'ein', 'nach', 'zu']}],
	
	[["awa",[922,22]], "ScaleArray", {html: "<p class='ContextSen'>Der inspirierte Künstler bildete die dickliche Frau in der Skizze sehr gewissenhaft...</p>", labels:[ 'ab', 'aus', 'mit', 'nach', 'um', 'vor', 'weiter']}],
    [["awb",[922,22]], "ScaleArray", {html: "<p class='ContextSen'>Der inspirierte Künstler bildete den fleißigen Studenten in einer Akademie sehr gewissenhaft...</p>", labels:[ 'ab', 'aus', 'mit', 'nach', 'um', 'vor', 'weiter']}],
	
	[["awa",[923,23]], "ScaleArray", {html: "<p class='ContextSen'>Der intelligente Chef riet dem entschlossenen Mann von seinem Vorhaben sehr eindringlich...</p>", labels:[ 'ab', 'an', 'aus', 'nach', 'um', 'vor', 'zu']}],
    [["awb",[923,23]], "ScaleArray", {html: "<p class='ContextSen'>Der intelligente Chef riet dem entschlossenen Mann sein konzipiertes Vorhaben sehr eindringlich...</p>", labels:[ 'ab', 'an', 'aus', 'nach', 'um', 'vor', 'zu']}],
	
	[["awa",[924,24]], "ScaleArray", {html: "<p class='ContextSen'>Der gelehrte Mitarbeiter glich seinen möglicherweise fatalen Fehler nach der Revision nur ungern...</p>", labels:[ 'ab', 'an', 'aus', 'nach', 'um', 'vor', 'zu']}],
    [["awb",[924,24]], "ScaleArray", {html: "<p class='ContextSen'>Der gelehrte Mitarbeiter glich beide Versionen des Textes nach der Revision nur ungern...</p>", labels:[ 'ab', 'an', 'aus', 'nach', 'um', 'vor', 'zu']}],
	
	[["awa",[925,25]], "ScaleArray", {html: "<p class='ContextSen'>Die zuversichtliche Großmutter fror die hellen Brötchen trotz des vollen Eisfachs lange Zeit...</p>", labels:[ 'ab', 'an', 'aus', 'durch', 'ein', 'nach', 'zu']}],
    [["awb",[925,25]], "ScaleArray", {html: "<p class='ContextSen'>Der abgelegene See fror im letzten Winter wegen der schweren Kälte lange Zeit...</p>", labels:[ 'ab', 'an', 'aus', 'durch', 'ein', 'nach', 'zu']}],
	
	[["awa",[926,26]], "ScaleArray", {html: "<p class='ContextSen'>Die junge Ärztin schaltete die empfindlichen Geräte auf den automatischen Modus präventiv und wohlüberlegt...</p>", labels:[ 'ab', 'an', 'aus', 'ein', 'um', 'vor', 'zu']}],
    [["awb",[926,26]], "ScaleArray", {html: "<p class='ContextSen'>Die gewissenhafte Angestellte schaltete die Alarmlage des Geschäfts wegen des Stromausfalls präventiv und wohlüberlegt...</p>", labels:[ 'ab', 'an', 'aus', 'ein', 'um', 'vor', 'zu']}],
	
	[["awa",[927,27]], "ScaleArray", {html: "<p class='ContextSen'>Die fleißige Lehrerin griff auf ihre Vorkenntnisse in schwierigen Situationen immer wieder...</p>", labels:[ 'an', 'auf', 'ein', 'mit', 'vor', 'zu', 'zurück' ]}],
    [["awb",[927,27]], "ScaleArray", {html: "<p class='ContextSen'>Die aufgeregte Rednerin griff das kontroverse Thema in der Diskussion immer wieder...</p>", labels:[ 'an', 'auf', 'ein', 'mit', 'vor', 'zu', 'zurück' ]}],
	
	[["awa",[928,28]], "ScaleArray", {html: "<p class='ContextSen'>Der erfahrene Vorstandsvorsitzende trat von seiner wichtigen Position nach jahrelanger Arbeit ganz nervös...</p>", labels:[ 'ab', 'an', 'auf', 'bei', 'vor', 'zu', 'zurück' ]}],
    [["awb",[928,28]], "ScaleArray", {html: "<p class='ContextSen'>Der junge Schauspieler trat in der dritten Szene bei donnerndem Applaus ganz nervös...</p>", labels:[ 'ab', 'an', 'auf', 'bei', 'vor', 'zu', 'zurück' ]}],
	
	[["awa",[929,29]], "ScaleArray", {html: "<p class='ContextSen'>Der kleine Junge dachte sich in dem Gespräch viele Lügen unglaublich flink...</p>", labels:[ 'aus', 'dazu', 'mit', 'nach', 'um', 'vor', 'weiter', 'zusammen' ]}],
    [["awb",[929,29]], "ScaleArray", {html: "<p class='ContextSen'>Der tüchtige Mitarbeiter dachte für seinen neuen Chef jede Woche unglaublich flink...</p>", labels:[ 'aus', 'dazu', 'mit', 'nach', 'um', 'vor', 'weiter', 'zusammen' ]}],
	
	[["awa",[930,30]], "ScaleArray", {html: "<p class='ContextSen'>Der alte Mann brach im hohen Alter unter der Last der Jahre ganz plötzlich...</p>", labels:[ 'an', 'auf', 'mit', 'nach', 'um', 'vor', 'zusammen' ]}],
    [["awb",[930,30]], "ScaleArray", {html: "<p class='ContextSen'>Der gutmütige Mann brach die Packung Vanilleeis für seine gut erzogenen Kinder ganz plötzlich...</p>", labels:[ 'an', 'auf', 'mit', 'nach', 'um', 'vor', 'zusammen' ]}],
	
	[["awa",[931,31]], "ScaleArray", {html: "<p class='ContextSen'>Der technisch begabte Absolvent lud seine ausländischen Gäste auf ein frisches Getränk ganz spontan...</p>", labels:[ 'ab', 'ein', 'hoch', 'nach', 'runter', 'vor', 'zusammen' ]}],
    [["awb",[931,31]], "ScaleArray", {html: "<p class='ContextSen'>Der technisch begabte Absolvent lud die große Datei im Verlauf des Nachmittags ganz spontan...</p>", labels:[ 'ab', 'ein', 'hoch', 'nach', 'runter', 'vor', 'zusammen' ]}],

	[["awa",[932,32]], "ScaleArray", {html: "<p class='ContextSen'>Das brave Kleinkind stieß nach dem Stillen an der Brust fast schlafend...</p>", labels:[ 'ab', 'auf', 'fort', 'nach', 'um', 'weg', 'vor']}],
    [["awb",[932,32]], "ScaleArray", {html: "<p class='ContextSen'>Das brave Kleinkind stieß nach dem Stillen die leere Flasche fast schlafend...</p>", labels:[ 'ab', 'auf', 'fort', 'nach', 'um', 'weg', 'vor']}],
	
	[["awa",[933,33]], "ScaleArray", {html: "<p class='ContextSen'>Der eingeladene Hauptredner sagte seinen geplanten Vortrag wegen einer schweren Kehlkopfentzündung nur sehr zögerlich...</p>", labels:[ 'ab', 'an', 'auf', 'fort', 'nach', 'um', 'zu']}],
    [["awb",[933,33]], "ScaleArray", {html: "<p class='ContextSen'>Der eingeladene Hauptredner sagte seine geplante Teilnahme trotz des großzügigen Honorars nur sehr zögerlich...</p>", labels:[ 'ab', 'an', 'auf', 'fort', 'nach', 'um', 'zu']}],
	
	[["awa",[934,34]], "ScaleArray", {html: "<p class='ContextSen'>Der ordentliche Professor fuhr mit seinem Vortrag trotz regelmäßiger Störungen immer ordnungsgemäß...</p>", labels:[ 'ab', 'fort', 'hoch', 'runter', 'um', 'weiter', 'weg']}],
    [["awb",[934,34]], "ScaleArray", {html: "<p class='ContextSen'>Der ordentliche Buchhalter fuhr seinen zuverlässigen Computer bei der Arbeit immer ordnungsgemäß...</p>", labels:[ 'ab', 'fort', 'hoch', 'runter', 'um', 'weiter', 'weg']}],
	
	[["awa",[935,35]], "ScaleArray", {html: "<p class='ContextSen'>Der beliebte Messdiener blies die Kerzen auf dem Altar nach der Messe stets sehr gewissenhaft...</p>", labels:[ 'an', 'auf', 'aus', 'weg', 'um', 'runter', 'vor']}],
    [["awb",[935,35]], "ScaleArray", {html: "<p class='ContextSen'>Der beliebte Messdiener blies den Staub auf dem Altar vor der Messe stets sehr gewissenhaft...</p>", labels:[ 'an', 'auf', 'aus', 'weg', 'um', 'runter', 'vor']}],
	
	[["awa",[936,36]], "ScaleArray", {html: "<p class='ContextSen'>Der grimmige Hausbesitzer hielt die frechen Vögel von seinem Balkon wie immer erfolgreich...</p>", labels:[ 'ab', 'bereit', 'fern', 'frei', 'um', 'vor', 'zu']}],
    [["awb",[936,36]], "ScaleArray", {html: "<p class='ContextSen'>Der eifrige Polizeibeamte hielt sich für den Einsatz am Nachmittag wie immer erfolgreich...</p>", labels:[ 'ab', 'bereit', 'fern', 'frei', 'um', 'vor', 'zu']}],
	
	[["awa",[937,37]], "ScaleArray", {html: "<p class='ContextSen'>Die zuverlässige Sekretärin gab die großen Summen für längere Geschäftsreisen nur ungern...</p>", labels:[ 'ab', 'aus', 'bekannt', 'frei', 'um', 'weg', 'zurück' ]}],
    [["awb",[937,37]], "ScaleArray", {html: "<p class='ContextSen'>Die zuverlässige Sekretärin gab die gesammelten Einnahmen aus dem Kuchenverkauf nur ungern...</p>", labels:[ 'ab', 'aus', 'bekannt', 'frei', 'um', 'weg', 'zurück' ]}],
	
	[["awa",[938,38]], "ScaleArray", {html: "<p class='ContextSen'>Der geheime Plan flog wegen unerwarteter Zuhörer trotz guter Vorbereitung ziemlich schnell...</p>", labels:[ 'an', 'auf', 'aus', 'davon', 'fort', 'um', 'weg']}],
    [["awb",[938,38]], "ScaleArray", {html: "<p class='ContextSen'>Der blaue Wellensittich flog der älteren Dame an einem Sonntagnachmittag ziemlich schnell...</p>", labels:[ 'an', 'auf', 'aus', 'davon', 'fort', 'um', 'weg']}],
	
	[["awa",[939,39]], "ScaleArray", {html: "<p class='ContextSen'>Die optimistische Laiendarstellerin stellte die beliebte Königin als tragische Heldin sehr selbstbewusst...</p>", labels:[ 'an', 'auf', 'dar', 'fort', 'hin', 'vor', 'weg']}],
    [["awb",[939,39]], "ScaleArray", {html: "<p class='ContextSen'>Die optimistische Bühnenbildnerin stellte die beliebte Statue für die Vorstellung sehr selbstbewusst...</p>", labels:[ 'an', 'auf', 'dar', 'fort', 'hin', 'vor', 'weg']}],
	
	[["awa",[940,40]], "ScaleArray", {html: "<p class='ContextSen'>Der faule Schüler schob seine langweiligen Hausaufgaben trotz mehrerer Ermahnungen ganz spontan...</p>", labels:[ 'ab', 'auf', 'dazwischen', 'ein', 'hin', 'vor', 'weg']}],
    [["awb",[940,40]], "ScaleArray", {html: "<p class='ContextSen'>Der kluge Chirurg schob einen schwer betroffenen Patienten als Notfall ganz spontan...</p>", labels:[ 'ab', 'auf', 'dazwischen', 'ein', 'hin', 'vor', 'weg']}],

	[["awa",[941,41]], "ScaleArray", {html: "<p class='ContextSen'>Der nette Verkäufer räumte die neue Ware in das Regal gekonnt und flink...</p>", labels:[ 'auf', 'ein', 'leer', 'nach', 'um', 'vor', 'weg']}],
    [["awb",[941,41]], "ScaleArray", {html: "<p class='ContextSen'>Der kleine Junge räumte sein unordentliches Zimmer mit großer Freude gekonnt und flink...</p>", labels:[ 'auf', 'ein', 'leer', 'nach', 'um', 'vor', 'weg']}],
	
	[["awa",[942,42]], "ScaleArray", {html: "<p class='ContextSen'>Das neue Hinterrad drehte beim anstrengenden Bergauffahren trotz aller Vorsichtsmaßnahmen stets und ständig...</p>", labels:[ 'ab', 'auf', 'auseinander', 'durch', 'ein', 'hoch', 'um']}],
    [["awb",[942,42]], "ScaleArray", {html: "<p class='ContextSen'>Der Amazon-Echo Lautsprecher drehte die Lautstärke an dem verregneten Abend stets und ständig...</p>", labels:[ 'ab', 'auf', 'auseinander', 'durch', 'ein', 'hoch', 'um']}],
	
	[["awa",[943,43]], "ScaleArray", {html: "<p class='ContextSen'>Der spartanische Kontakt riss wegen der Distanz zum Leidwesen aller wenig überraschend...</p>", labels:[ 'ab', 'auseinander', 'ein', 'entzwei', 'fort', 'los', 'zusammen' ]}],
    [["awb",[943,43]], "ScaleArray", {html: "<p class='ContextSen'>Der heftige Orkan riss den maroden Schuppen in der Nacht wenig überraschend...</p>", labels:[ 'ab', 'auseinander', 'ein', 'entzwei', 'fort', 'los', 'zusammen' ]}],
	
	[["awa",[944,44]], "ScaleArray", {html: "<p class='ContextSen'>Der geübte Fahrer raste an dem Publikum mit seinem Ferrari so schnell wie möglich...</p>", labels:[ 'bei', 'fort', 'ein', 'herum', 'vorbei', 'weg', 'weiter']}],
    [["awb",[944,44]], "ScaleArray", {html: "<p class='ContextSen'>Der geübte Fahrer raste nach dem Unfall mit seinem Ferrari so schnell wie möglich...</p>", labels:[ 'bei', 'fort', 'ein', 'herum', 'vorbei', 'weg', 'weiter']}],
	
	[["awa",[945,45]], "ScaleArray", {html: "<p class='ContextSen'>Die nette Schneiderin nähte den verschnörkelten Flicken ohne Bezahlung sehr sorgfältig...</p>", labels:[ 'an', 'auf', 'ein', 'fest', 'vorbei', 'weg', 'zurück' ]}],
    [["awb",[945,45]], "ScaleArray", {html: "<p class='ContextSen'>Die nette Schneiderin nähte den auffälligen Knopf ohne Bezahlung sehr sorgfältig...</p>", labels:[ 'an', 'auf', 'ein', 'fest', 'vorbei', 'weg', 'zurück' ]}],
	
	[["awa",[946,46]], "ScaleArray", {html: "<p class='ContextSen'>Der verantwortungsvolle Gruppenleiter regte eine Veränderung der Gewohnheiten nach erfolglosen Versuchen hin und wieder...</p>", labels:[ 'ab', 'an', 'auf', 'fest', 'vorbei', 'weg', 'zu']}],
    [["awb",[946,46]], "ScaleArray", {html: "<p class='ContextSen'>Der verantwortungsvolle Gruppenleiter regte sich bei seiner Frau nach der Versammlung hin und wieder...</p>", labels:[ 'ab', 'an', 'auf', 'fest', 'vorbei', 'weg', 'zu']}],
	
	[["awa",[947,47]], "ScaleArray", {html: "<p class='ContextSen'>Die ältere Dame schüttete ohne Absicht ein wenig von ihrem Getränk ziemlich ungeschickt...</p>", labels:[ 'ab', 'an', 'aus', 'fest', 'mit', 'um', 'weg']}],
    [["awb",[947,47]], "ScaleArray", {html: "<p class='ContextSen'>Die ältere Dame schüttete das ekelhafte Getränk nach dem gemeinsamen Abendessen ziemlich ungeschickt...</p>", labels:[ 'ab', 'an', 'aus', 'fest', 'mit', 'um', 'weg']}],
	
	[["awa",[948,48]], "ScaleArray", {html: "<p class='ContextSen'>Der neue Film spielte den erfolgreichen Produzenten unerwartet viel Geld letztendlich doch noch...</p>", labels:[ 'ab', 'an', 'ein', 'mit', 'nach', 'vor', 'zu']}],
    [["awb",[948,48]], "ScaleArray", {html: "<p class='ContextSen'>Die liebe Mutter spielte ihrem kleinen Kind eine alte Kassette letztendlich doch noch...</p>", labels:[ 'ab', 'an', 'ein', 'mit', 'nach', 'vor', 'zu']}],
	
	[["awa",[949,49]], "ScaleArray", {html: "<p class='ContextSen'>Der müde Lehrer bereitete seinen planmäßigen Unterricht am Vortag ziemlich unengagiert...</p>", labels:[ 'ab', 'an', 'ein', 'mit', 'nach', 'vor', 'zu']}],
    [["awb",[949,49]], "ScaleArray", {html: "<p class='ContextSen'>Die müde Köchin bereitete das Gericht für die Feier ziemlich unengagiert...</p>", labels:[ 'ab', 'an', 'ein', 'mit', 'nach', 'vor', 'zu']}],
	
	[["awa",[950,50]], "ScaleArray", {html: "<p class='ContextSen'>Der zuständige Modeschöpfer fasste das exquisite Kleid wegen seiner Erfahrung ganz anders...</p>", labels:[ 'ab', 'an', 'auf', 'mit', 'nach', 'vor', 'zusammen' ]}],
    [["awb",[950,50]], "ScaleArray", {html: "<p class='ContextSen'>Einer der Schüler fasste den anspruchsvollen Text im heutigen Unterricht ganz anders...</p>", labels:[ 'ab', 'an', 'auf', 'mit', 'nach', 'vor', 'zusammen' ]}],
	
	[["awa",[951,51]], "ScaleArray", {html: "<p class='ContextSen'>Der belesene Historiker forschte die Regionen von seinen letzten Reisen mehrere Monate...</p>", labels:[ 'ab', 'aus', 'ein', 'mit', 'nach', 'vor', 'weiter']}],
    [["awb",[951,51]], "ScaleArray", {html: "<p class='ContextSen'>Der belesene Historiker forschte über die Familie und ihre Vorfahren mehrere Monate...</p>", labels:[ 'ab', 'aus', 'ein', 'mit', 'nach', 'vor', 'weiter']}],
	
	[["awa",[952,52]], "ScaleArray", {html: "<p class='ContextSen'>Das ausgefallene Kleid machte bei den Herren auf Anhieb so einiges...</p>", labels:[ 'ab', 'aus', 'her', 'mit', 'nach', 'vor', 'weiter']}],
    [["awb",[952,52]], "ScaleArray", {html: "<p class='ContextSen'>Der intrigante Mann machte seinem erfolgreichen Bruder auf Anhieb so einiges...</p>", labels:[ 'ab', 'aus', 'her', 'mit', 'nach', 'vor', 'weiter']}],
	
	[["awa",[953,53]], "ScaleArray", {html: "<p class='ContextSen'>Der nette Chef wies den fahrigen Angestellten auf die Regeln freundlich aber bestimmt...</p>", labels:[ 'ab', 'ein', 'hin', 'mit', 'nach', 'zu', 'zurecht']}],
    [["awb",[953,53]], "ScaleArray", {html: "<p class='ContextSen'>Der strenge Auftraggeber wies den nervösen Bewerber aufgrund seines Verhaltens freundlich aber bestimmt...</p>", labels:[ 'ab', 'ein', 'hin', 'mit', 'nach', 'zu', 'zurecht']}],
	
	[["awa",[954,54]], "ScaleArray", {html: "<p class='ContextSen'>Die flinke Schülerin schlug das Buch an der richtigen Seite rein zufällig...</p>", labels:[ 'auf', 'ein', 'hin', 'mit', 'nach', 'zu', 'zurecht']}],
    [["awb",[954,54]], "ScaleArray", {html: "<p class='ContextSen'>Die genervte Mutter schlug das offenstehende Fenster mit voller Kraft rein zufällig...</p>", labels:[ 'auf', 'ein', 'hin', 'mit', 'nach', 'zu', 'zurecht']}],
	
	[["awa",[955,55]], "ScaleArray", {html: "<p class='ContextSen'>Der pflichtbewusste Ticketverkäufer ließ von der Sache trotz guter Gründe erst viel später...</p>", labels:[ 'ab', 'dar', 'durch', 'ein', 'nach', 'vor', 'zu']}],
    [["awb",[955,55]], "ScaleArray", {html: "<p class='ContextSen'>Der pflichtbewusste Ticketverkäufer ließ die wartenden Besucher trotz guter Gründe erst viel später...</p>", labels:[ 'ab', 'dar', 'durch', 'ein', 'nach', 'vor', 'zu']}],
	
	[["awa",[956,56]], "ScaleArray", {html: "<p class='ContextSen'>Die vielen Gäste aßen dem tüchtigen Wirt die gefüllte Vorratskammer nun endgültig...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'leer', 'vor', 'weg']}],
    [["awb",[956,56]], "ScaleArray", {html: "<p class='ContextSen'>Die vielen Gäste aßen dem tüchtigen Wirt die angesammelten Vorräte nun endgültig...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'leer', 'vor', 'weg']}],
	
	[["awa",[957,57]], "ScaleArray", {html: "<p class='ContextSen'>Die engagierte Biolehrerin schaute den zerstörten Baum wegen des Vandalismus sehr genau...</p>", labels:[ 'an', 'durch', 'hin', 'hinterher', 'nach', 'weg', 'zu']}],
    [["awb",[957,57]], "ScaleArray", {html: "<p class='ContextSen'>Die engagierte Biolehrerin schaute der ganzen Klasse auf dem Rückweg sehr genau...</p>", labels:[ 'an', 'durch', 'hin', 'hinterher', 'nach', 'weg', 'zu']}],
	
	[["awa",[958,58]], "ScaleArray", {html: "<p class='ContextSen'>Die zweifelnde Sportlerin warf den gesamten Ballast dank ihres Mentaltrainers völlig befreiend...</p>", labels:[ 'ab', 'durch', 'hinaus', 'hinter', 'raus', 'weg', 'zu']}],
    [["awb",[958,58]], "ScaleArray", {html: "<p class='ContextSen'>Der kopflastige Chef warf die stinkende Bananenschale während des Teammeetings völlig befreiend...</p>", labels:[ 'ab', 'durch', 'hinaus', 'hinter', 'raus', 'weg', 'zu']}],
	
	[["awa",[959,59]], "ScaleArray", {html: "<p class='ContextSen'>Die dreiste Verkäuferin brannte mit den gesamten Tageseinnahmen wegen ihrer Geldnot ganz spontan...</p>", labels:[ 'ab', 'durch', 'ein', 'hinter', 'raus', 'rein', 'zu']}],
    [["awb",[959,59]], "ScaleArray", {html: "<p class='ContextSen'>Der alte Pferdezüchter brannte das markante Zeichen auf der trocknenden Tierhaut ganz spontan...</p>", labels:[ 'ab', 'durch', 'ein', 'hinter', 'raus', 'rein', 'zu']}],
	
	[["awa",[960,60]], "ScaleArray", {html: "<p class='ContextSen'>Der gewählte Abgeordnete stimmte über den Gesetzesentwurf während der Tagung sehr entschlossen...</p>", labels:[ 'ab', 'bei', 'ein', 'hin', 'raus', 'um', 'zu']}],
    [["awb",[960,60]], "ScaleArray", {html: "<p class='ContextSen'>Der treue Diener stimmte seinem herrischen Chef in jeder Situation sehr entschlossen...</p>", labels:[ 'ab', 'bei', 'ein', 'hin', 'raus', 'um', 'zu']}],
	
	[["awa",[961,61]], "ScaleArray", {html: "<p class='ContextSen'>Der routinierte Redner blendete seine aufsteigende Nervosität wegen der Präsentation gerade noch rechtzeitig...</p>", labels:[ 'ab', 'aus', 'ein', 'hin', 'über', 'um', 'zurück' ]}],
    [["awb",[961,61]], "ScaleArray", {html: "<p class='ContextSen'>Der erfahrene Regisseur blendete das fragwürdige Interview für die Zuschauer gerade noch rechtzeitig...</p>", labels:[ 'ab', 'aus', 'ein', 'hin', 'über', 'um', 'zurück' ]}],
	
	[["awa",[962,62]], "ScaleArray", {html: "<p class='ContextSen'>Der observierende Ermittler hörte die verdächtige Wohnung seit vielen Monaten still und heimlich...</p>", labels:[ 'ab', 'an', 'ein', 'mit', 'über', 'um', 'zu']}],
    [["awb",[962,62]], "ScaleArray", {html: "<p class='ContextSen'>Der neugierige Nachbar hörte bei dem Telefonat seines neuen Mitbewohners still und heimlich...</p>", labels:[ 'ab', 'an', 'ein', 'mit', 'über', 'um', 'zu']}],
	
	[["awa",[963,63]], "ScaleArray", {html: "<p class='ContextSen'>Die aufmerksame Erzieherin las die heruntergefallenen Murmeln wegen der Rutschgefahr ganz schnell...</p>", labels:[ 'ab', 'auf', 'aus', 'durch', 'ein', 'um', 'vor']}],
    [["awb",[963,63]], "ScaleArray", {html: "<p class='ContextSen'>Der geübte Erntehelfer las die schönen Äpfel für die Weiterverarbeitung ganz schnell...</p>", labels:[ 'ab', 'auf', 'aus', 'durch', 'ein', 'um', 'vor']}],
	
	[["awa",[964,64]], "ScaleArray", {html: "<p class='ContextSen'>Das beliebte Frühlingsfest fand in diesem Jahr nach der Walpurgisnacht anders als erwartet...</p>", labels:[ 'an', 'bei', 'heraus', 'statt', 'vor', 'weg', 'wieder']}],
    [["awb",[964,64]], "ScaleArray", {html: "<p class='ContextSen'>Der engagierte Sozialarbeiter fand keine guten Bedingungen für die Häftlinge anders als erwartet...</p>", labels:[ 'an', 'bei', 'heraus', 'statt', 'vor', 'weg', 'wieder']}],
	
	[["awa",[965,65]], "ScaleArray", {html: "<p class='ContextSen'>Die erfolgreiche Nationalmannschaft schied bei der Weltmeisterschaft in einer spannenden Vorrunde ganz überraschend...</p>", labels:[ 'ab', 'aus', 'dahin', 'hin', 'vor', 'weg', 'zusammen' ]}],
    [["awb",[965,65]], "ScaleArray", {html: "<p class='ContextSen'>Der junge Patient schied bei einer Routineoperation trotz des hohen Versorgungsstandards ganz überraschend...</p>", labels:[ 'ab', 'aus', 'dahin', 'hin', 'vor', 'weg', 'zusammen' ]}],
	
	[["awa",[966,66]], "ScaleArray", {html: "<p class='ContextSen'>Die schwangere Frau trieb ihr erstes Kind aufgrund eines Gendefekts nur gezwungenermaßen...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'vor', 'weg', 'zusammen' ]}],
    [["awb",[966,66]], "ScaleArray", {html: "<p class='ContextSen'>Der strenge Gerichtsvollzieher trieb das fehlende Geld für seine Kunden nur gezwungenermaßen...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'vor', 'weg', 'zusammen' ]}],
	
	[["awa",[967,67]], "ScaleArray", {html: "<p class='ContextSen'>Das schwerverletzte Bein starb durch eine Blutvergiftung nach der Operation zum Leidwesen aller...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'vor', 'weg', 'zusammen' ]}],
    [["awb",[967,67]], "ScaleArray", {html: "<p class='ContextSen'>Der seltene Feld-Ahorn starb trotz aller Gegenmaßnahmen im letzten Jahrhundert zum Leidwesen aller...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'vor', 'weg', 'zusammen' ]}],
	
	[["awa",[968,68]], "ScaleArray", {html: "<p class='ContextSen'>Die leidenschaftliche Hobbyköchin schreckte die gekochten Eier mit kaltem Wasser ganz schnell...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'hoch', 'weg', 'zusammen' ]}],
    [["awb",[968,68]], "ScaleArray", {html: "<p class='ContextSen'>Der schlafende Mann schreckte bei dem Knall durch einen Böller ganz schnell...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'hoch', 'weg', 'zusammen' ]}],
	
	[["awa",[969,69]], "ScaleArray", {html: "<p class='ContextSen'>Der alte Computer wertete die große Datenmenge zum Erstaunen der Programmierer ganz plötzlich...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'hoch', 'weg', 'zusammen' ]}],
    [["awb",[969,69]], "ScaleArray", {html: "<p class='ContextSen'>Das nahe Gleis wertete das unbebaute Grundstück zum Erstaunen der Investoren ganz plötzlich...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'hoch', 'weg', 'zusammen' ]}],
	
	[["awa",[970,70]], "ScaleArray", {html: "<p class='ContextSen'>Der ängstliche Junge tauchte den kleinen Zeh beim jährlichen Schwimmausflug wirklich kurz...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'über', 'unter', 'zusammen' ]}],
    [["awb",[970,70]], "ScaleArray", {html: "<p class='ContextSen'>Der mysteriöse Fremde tauchte in der Menge während des Jahrmarkts wirklich kurz...</p>", labels:[ 'ab', 'auf', 'aus', 'ein', 'über', 'unter', 'zusammen' ]}],
	
	[["awa",[971,71]], "ScaleArray", {html: "<p class='ContextSen'>Der neugewählte Papst sprach den Bischof aufgrund seiner treuen Dienste reiflich überlegt...</p>", labels:[ 'an', 'ab', 'aus', 'frei', 'heilig', 'nach', 'zu']}],
    [["awb",[971,71]], "ScaleArray", {html: "<p class='ContextSen'>Die erfahrene Familienrichterin sprach dem verzweifelten Vater das alleinige Sorgerecht reiflich überlegt...</p>", labels:[ 'an', 'ab', 'aus', 'frei', 'heilig', 'nach', 'zu']}],
	
	[["awa",[972,72]], "ScaleArray", {html: "<p class='ContextSen'>Die neue Eigentümerin ritt das weitläufige Gut wegen des anstehenden Unwetters fast galoppierend...</p>", labels:[ 'an', 'ab', 'davon', 'ein', 'nach', 'vor', 'weg']}],
    [["awb",[972,72]], "ScaleArray", {html: "<p class='ContextSen'>Die sogenannte Pferdeflüsterin ritt der restlichen Gruppe aus Lust und Laune fast galoppierend...</p>", labels:[ 'an', 'ab', 'davon', 'ein', 'nach', 'vor', 'weg']}],
	
	[["awa",[973,73]], "ScaleArray", {html: "<p class='ContextSen'>Das ungestüme Kind rannte die gebrechliche Dame trotz ihrer leuchtenden Jacke ausgesprochen zielstrebig...</p>", labels:[ 'an', 'ab', 'davon', 'ein', 'nach', 'um', 'weg']}],
    [["awb",[973,73]], "ScaleArray", {html: "<p class='ContextSen'>Das ungestüme Kind rannte der aufgebrachten Tagesmutter trotz der altbekannten Regeln ausgesprochen zielstrebig...</p>", labels:[ 'an', 'ab', 'davon', 'ein', 'nach', 'um', 'weg']}],
	
	[["awa",[974,74]], "ScaleArray", {html: "<p class='ContextSen'>Das teure Textverarbeitungsprogramm rückte den markierten Text wegen eines Programmierfehlers nicht korrekt...</p>", labels:[ 'an', 'ab', 'davon', 'ein', 'nach', 'vor', 'weiter']}],
    [["awb",[974,74]], "ScaleArray", {html: "<p class='ContextSen'>Die gezogene Wartenummer rückte in der Liste wegen eines Programmierfehlers nicht korrekt...</p>", labels:[ 'an', 'ab', 'davon', 'ein', 'nach', 'vor', 'weiter']}],
	
	[["awa",[975,75]], "ScaleArray", {html: "<p class='ContextSen'>Die interessierte Kundin handelte einen guten Vertrag in einem langen Gespräch sehr mühselig...</p>", labels:[ 'an', 'ab', 'aus', 'ein', 'herunter', 'hoch', 'runter']}],
    [["awb",[975,75]], "ScaleArray", {html: "<p class='ContextSen'>Die interessierte Kundin handelte den aktuellen Preis in einem langen Gespräch sehr mühselig...</p>", labels:[ 'an', 'ab', 'aus', 'ein', 'herunter', 'hoch', 'runter']}],
	
	[["awa",[976,76]], "ScaleArray", {html: "<p class='ContextSen'>Der gealterte Philosoph horchte bei der Erwähnung des Namens wegen der merkwürdigen Verhältnisse ein wenig verwirrt...</p>", labels:[ 'an', 'ab', 'auf', 'aus', 'bei', 'weg', 'zu']}],
    [["awb",[976,76]], "ScaleArray", {html: "<p class='ContextSen'>Der gealterte Beamte horchte die unscheinbare Familie wegen der merkwürdigen Verhältnisse am Nachmittag ein wenig verwirrt...</p>", labels:[ 'an', 'ab', 'auf', 'aus', 'bei', 'weg', 'zu']}],
	
	[["awa",[977,77]], "ScaleArray", {html: "<p class='ContextSen'>Die rebellische Tochter kratzte ihren außergewöhnlichen Namen über mehrere Tage immer wieder...</p>", labels:[ 'ab', 'auf', 'ein', 'herunter', 'um', 'weg', 'zu']}],
    [["awb",[977,77]], "ScaleArray", {html: "<p class='ContextSen'>Die energische Hausfrau kratzte den widerspenstigen Schmutz über mehrere Tage immer wieder...</p>", labels:[ 'ab', 'auf', 'ein', 'herunter', 'um', 'weg', 'zu']}],
	
	[["awa",[978,78]], "ScaleArray", {html: "<p class='ContextSen'>Der tyrannische Direktor forderte all seinen Schülern hervorragende Leistungen beim Test wie angekündigt...</p>", labels:[ 'an', 'ab', 'auf', 'herbei', 'um', 'weg', 'zu']}],
    [["awb",[978,78]], "ScaleArray", {html: "<p class='ContextSen'>Der zornige Butler forderte die nervigen Gäste zum Verlassen des Hauses wie angekündigt...</p>", labels:[ 'an', 'ab', 'auf', 'herbei', 'um', 'weg', 'zu']}],
	
	[["awa",[979,79]], "ScaleArray", {html: "<p class='ContextSen'>Die unerfahrene Nachhilfelehrerin fragte das gelernte Wissen bei den Schülern sehr interessiert...</p>", labels:[ 'an', 'ab', 'aus', 'herum', 'nach', 'weiter', 'zu']}],
    [["awb",[979,79]], "ScaleArray", {html: "<p class='ContextSen'>Die unerfahrene Erzieherin fragte bei den Eltern wegen mangelnder Informationen sehr interessiert...</p>", labels:[ 'an', 'ab', 'aus', 'herum', 'nach', 'weiter', 'zu']}],
	
	[["awa",[980,80]], "ScaleArray", {html: "<p class='ContextSen'>Der tüchtige Handwerker feilte das anspruchsvolle Muster auf den Kleiderschrank sehr sorgfältig...</p>", labels:[ 'an', 'ab', 'aus', 'durch', 'nach', 'weiter', 'zurecht']}],
    [["awb",[980,80]], "ScaleArray", {html: "<p class='ContextSen'>Der inspirierte Schulsprecher feilte seine letzte Rede wegen ihrer Bedeutung sehr sorgfältig...</p>", labels:[ 'an', 'ab', 'aus', 'durch', 'nach', 'weiter', 'zurecht']}],
	
	[["awa",[981,81]], "ScaleArray", {html: "<p class='ContextSen'>Die überglückliche Frau hatte ihren gerade erhaltenen Führerschein bei einer Verkehrskontrolle doch tatsächlich...</p>", labels:[ 'an', 'bereit', 'dabei', 'durch', 'leid', 'satt', 'über']}],
    [["awb",[981,81]], "ScaleArray", {html: "<p class='ContextSen'>Die irritierte Frau hatte das Verhalten ihres Freundes trotz vieler Versprechen doch tatsächlich...</p>", labels:[ 'an', 'bereit', 'dabei', 'durch', 'leid', 'satt', 'über']}],
	
	[["awa",[982,82]], "ScaleArray", {html: "<p class='ContextSen'>Der mürrische Aufseher ging die lange Liste dem Alphabet nach möglichst ruhig...</p>", labels:[ 'aus', 'davon', 'durch', 'fort', 'heim', 'raus', 'über']}],
    [["awb",[982,82]], "ScaleArray", {html: "<p class='ContextSen'>Der neurotische Mieter ging immer nur nachts wegen seiner Ängstlichkeit möglichst ruhig...</p>", labels:[ 'aus', 'davon', 'durch', 'fort', 'heim', 'raus', 'über']}],
	
	[["awa",[983,82]], "ScaleArray", {html: "<p class='ContextSen'>Die selbstbewusste Architektin dichtete das schräge Fenster wegen seiner Position sehr geschickt...</p>", labels:[ 'ab', 'an', 'durch', 'fort', 'heim', 'nach', 'um']}],
    [["awb",[983,82]], "ScaleArray", {html: "<p class='ContextSen'>Der berühmte Lyriker dichtete dem amtierenden König die peinlichen Ereignisse sehr geschickt...</p>", labels:[ 'ab', 'an', 'durch', 'fort', 'heim', 'nach', 'um']}],
	
	[["awa",[984,84]], "ScaleArray", {html: "<p class='ContextSen'>Das weite Feld lag wegen seiner Größe seit vielen Jahren kaum bemerkt...</p>", labels:[ 'aus', 'bereit', 'bloß', 'brach', 'nach', 'offen', 'um']}],
    [["awb",[984,84]], "ScaleArray", {html: "<p class='ContextSen'>Der neue Stift lag zum freien Ausprobieren seit einigen Stunden kaum bemerkt...</p>", labels:[ 'aus', 'bereit', 'bloß', 'brach', 'nach', 'offen', 'um']}],
	
	[["awa",[985,85]], "ScaleArray", {html: "<p class='ContextSen'>Der naive Freund kaufte seiner neuen Partnerin die ausgeklügelte Lüge ganz vertrauensvoll...</p>", labels:[ 'ab', 'bereit', 'ein', 'hin', 'nach', 'weg', 'zu']}],
    [["awb",[985,85]], "ScaleArray", {html: "<p class='ContextSen'>Der coole Teenager kaufte seinem besten Kumpel das teure Smartphone ganz vertrauensvoll...</p>", labels:[ 'ab', 'bereit', 'ein', 'hin', 'nach', 'weg', 'zu']}],
	
	[["awa",[986,86]], "ScaleArray", {html: "<p class='ContextSen'>Die ambitionierte Frau warf dem seriösen Mann ein schweres Verbrechen geradezu gelassen...</p>", labels:[ 'ab', 'aus', 'ein', 'hinaus', 'nach', 'raus', 'vor']}],
    [["awb",[986,86]], "ScaleArray", {html: "<p class='ContextSen'>Das ambitionierte Mädchen warf den neugierigen Mitschüler während des Spiels geradezu gelassen...</p>", labels:[ 'ab', 'aus', 'ein', 'hinaus', 'nach', 'raus', 'vor']}],
	
	[["awa",[987,87]], "ScaleArray", {html: "<p class='ContextSen'>Der geladene Stargast lenkte vom eigentlichen Thema an diesem Abend nur sehr ungern...</p>", labels:[ 'ab', 'bei', 'ein', 'herum', 'nach', 'um', 'weiter']}],
    [["awb",[987,87]], "ScaleArray", {html: "<p class='ContextSen'>Der sture Firmenchef lenkte nach den Arbeitnehmerstreiks in der Vergangenheit nur sehr ungern...</p>", labels:[ 'ab', 'bei', 'ein', 'herum', 'nach', 'um', 'weiter']}],
	
	[["awa",[988,88]], "ScaleArray", {html: "<p class='ContextSen'>Die ehemalige Vorsitzende trat den anonymen Alkoholikern aus eigenem Antrieb heimlich und unbemerkt...</p>", labels:[ 'an', 'bei', 'ein', 'heran', 'hinzu', 'näher', 'nieder']}],
    [["awb",[988,88]], "ScaleArray", {html: "<p class='ContextSen'>Die übereifrige Journalistin trat während des Privatgesprächs aus reiner Neugier heimlich und unbemerkt...</p>", labels:[ 'an', 'bei', 'ein', 'heran', 'hinzu', 'näher', 'nieder']}],
	
	[["awa",[989,89]], "ScaleArray", {html: "<p class='ContextSen'>Der wütende Anwalt brach die geforderten Verhandlungen nach einem Streit wenig bedacht...</p>", labels:[ 'an', 'ab', 'auf', 'durch', 'ein', 'nahe', 'nieder']}],
    [["awb",[989,89]], "ScaleArray", {html: "<p class='ContextSen'>Der wütende Freund brach die marode Tür nach einem Streit wenig bedacht...</p>", labels:[ 'an', 'ab', 'auf', 'durch', 'ein', 'nahe', 'nieder']}],
	
	[["awa",[990,90]], "ScaleArray", {html: "<p class='ContextSen'>Die trotzige Detektivin deckte das gehütete Geheimnis durch ihr enormes Wissen schon früh...</p>", labels:[ 'an', 'ab', 'auf', 'durch', 'ein', 'um', 'zu']}],
    [["awb",[990,90]], "ScaleArray", {html: "<p class='ContextSen'>Die warmherzige Großmutter deckte ihre geliebte Enkelin mit teuren orientalischen Tüchern schon früh...</p>", labels:[ 'an', 'ab', 'auf', 'durch', 'ein', 'um', 'zu']}],
	
	[["awa",[991,91]], "ScaleArray", {html: "<p class='ContextSen'>Die geübte Fahrerin hing in einem Stau wegen eines Unfalls merklich gestresst...</p>", labels:[ 'an', 'ab', 'auf', 'aus', 'ein', 'fest', 'herunter']}],
    [["awb",[991,91]], "ScaleArray", {html: "<p class='ContextSen'>Die gutmütige Ehefrau hing die geblümten Vorhänge nach einem Telefonat merklich gestresst...</p>", labels:[ 'an', 'ab', 'auf', 'aus', 'ein', 'fest', 'herunter']}],

	[["awa",[992,92]], "ScaleArray", {html: "<p class='ContextSen'>Der verunsicherte Förderer stieg nach dem öffentlichen Skandal aus dem Sponsorenvertrag wie bereits bekannt...</p>", labels:[ 'an', 'ab', 'auf', 'aus', 'ein', 'runter', 'um']}],
    [["awb",[992,92]], "ScaleArray", {html: "<p class='ContextSen'>Der älteste Fußballverein stieg nach einer harten Saison in die 2. Liga wie bereits bekannt...</p>", labels:[ 'an', 'ab', 'auf', 'aus', 'ein', 'runter', 'um']}],
	
	[["awa",[993,93]], "ScaleArray", {html: "<p class='ContextSen'>Der energische Politiker griff seine wirklich mächtigen Gegner während der Debatte ziemlich häufig...</p>", labels:[ 'an', 'ab', 'auf', 'durch', 'ein', 'über', 'um']}],
    [["awb",[993,93]], "ScaleArray", {html: "<p class='ContextSen'>Der gerechte Vater griff im Streit seiner Kinder wegen seiner Prinzipien ziemlich häufig...</p>", labels:[ 'an', 'ab', 'auf', 'durch', 'ein', 'über', 'um']}],

	[["awa",[994,94]], "ScaleArray", {html: "<p class='ContextSen'>Die entspannte Bewohnerin nahm am bunten Geschehen trotz der Einschränkungen wie immer...</p>", labels:[ 'an', 'ab', 'hin', 'ein', 'nach', 'teil', 'um']}],
    [["awb",[994,94]], "ScaleArray", {html: "<p class='ContextSen'>Die entspannte Besitzerin nahm das negative Gutachten trotz anderer Meinungen wie immer...</p>", labels:[ 'an', 'ab', 'hin', 'ein', 'nach', 'teil', 'um']}],
	
	[["awa",[995,95]], "ScaleArray", {html: "<p class='ContextSen'>Der redsame Verkäufer wickelte den lukrativen Kaufvertrag dank seiner Überredungskunst schnell und gekonnt...</p>", labels:[ 'an', 'ab', 'aus', 'ein', 'nach', 'teil', 'um']}],
    [["awb",[995,95]], "ScaleArray", {html: "<p class='ContextSen'>Der redsame Schneider wickelte den exquisiten Stoff auf der Rolle schnell und gekonnt...</p>", labels:[ 'an', 'ab', 'aus', 'ein', 'nach', 'teil', 'um']}],
	
	[["awa",[996,96]], "ScaleArray", {html: "<p class='ContextSen'>Der einfühlsame Freund baute seine beste Freundin nach dem Schicksalsschlag sehr gern...</p>", labels:[ 'an', 'ab', 'auf', 'ein', 'nach', 'um', 'zu']}],
    [["awb",[996,96]], "ScaleArray", {html: "<p class='ContextSen'>Der fleißige Mitarbeiter baute die vielen Überstunden vor dem Urlaub sehr gern...</p>", labels:[ 'an', 'ab', 'auf', 'ein', 'nach', 'um', 'zu']}],
	
	[["awa",[997,97]], "ScaleArray", {html: "<p class='ContextSen'>Das zusätzliche Gehalt stand dem fleißigen Mitarbeiter laut des unterzeichneten Vertrags schon lange...</p>", labels:[ 'an', 'ab', 'bei', 'ein', 'nahe', 'um', 'zu']}],
    [["awb",[997,97]], "ScaleArray", {html: "<p class='ContextSen'>Die unabhängige Stiftung stand der traumatisierten Veteranin in der schwierigen Zeit schon lange...</p>", labels:[ 'an', 'ab', 'bei', 'ein', 'nahe', 'um', 'zu']}],
	
	[["awa",[998,98]], "ScaleArray", {html: "<p class='ContextSen'>Die bestohlene Frau zeigte den dreisten Diebstahl bei der Polizei sehr entschlossen...</p>", labels:[ 'an', 'ab', 'auf', 'ein', 'nahe', 'vor', 'zu']}],
    [["awb",[998,98]], "ScaleArray", {html: "<p class='ContextSen'>Die gewandete Rednerin zeigte sehr triftige Argumente bei der Podiumsdiskussion sehr entschlossen...</p>", labels:[ 'an', 'ab', 'auf', 'ein', 'nahe', 'vor', 'zu']}],
	
	[["awa",[999,99]], "ScaleArray", {html: "<p class='ContextSen'>Der abgelenkte Fahrer wich dem betrunkenen Geisterfahrer wegen der Sichtverhältnisse völlig überfordert...</p>", labels:[ 'an', 'ab', 'aus', 'auseinander', 'ein', 'zu', 'zurück' ]}],
    [["awb",[999,99]], "ScaleArray", {html: "<p class='ContextSen'>Der neue Stadtrat wich vom geplanten Kurs wegen der Fehlkalkulationen völlig überfordert...</p>", labels:[ 'an', 'ab', 'aus', 'auseinander', 'ein', 'zu', 'zurück' ]}],
	
	[["awa",[1000,100]], "ScaleArray", {html: "<p class='ContextSen'>Der talentierte Künstler bildete von dem Model die lieblichen Rundungen sehr akribisch...</p>", labels:[ 'an', 'ab', 'aus', 'bei', 'ein', 'nach', 'weiter']}],
    [["awb",[1000,100]], "ScaleArray", {html: "<p class='ContextSen'>Der stadtbekannte Goldschmied bildete seinen neuen Lehrling in der Schmiedekunst sehr akribisch...</p>", labels:[ 'an', 'ab', 'aus', 'bei', 'ein', 'nach', 'weiter']}],
	
	[["awa",[1001,101]], "ScaleArray", {html: "<p class='ContextSen'>Die rücksichtsvolle Politesse sah unter den besonderen Umständen von einem Strafzettel ganz überraschend...</p>", labels:[ 'ab', 'durch', 'ein', 'nach', 'runter', 'weg', 'weiter']}],
    [["awb",[1001,101]], "ScaleArray", {html: "<p class='ContextSen'>Der allwissende Professor sah nach der wichtigen Frage von seinem Studenten ganz überraschend...</p>", labels:[ 'ab', 'durch', 'ein', 'nach', 'runter', 'weg', 'weiter']}],
	
	[["awa",[1002,102]], "ScaleArray", {html: "<p class='ContextSen'>Der erfahrene Lehrer leitete seine jungen Schüler zum leserlichen Schreiben zügig und gekonnt...</p>", labels:[ 'ab', 'an', 'ein', 'her', 'hin', 'über', 'um']}],
    [["awb",[1002,102]], "ScaleArray", {html: "<p class='ContextSen'>Der kluge Mitschüler leitete die schwierige Formel mit seinem Wissen zügig und gekonnt...</p>", labels:[ 'ab', 'an', 'ein', 'her', 'hin', 'über', 'um']}],
	
	[["awa",[1003,103]], "ScaleArray", {html: "<p class='ContextSen'>Der selbstbewusste Techniker schloss das neue Telefon an seinem ersten Arbeitstag sehr vorschriftsmäßig...</p>", labels:[ 'ab', 'an', 'auf', 'her', 'hin', 'um', 'zu']}],
    [["awb",[1003,103]], "ScaleArray", {html: "<p class='ContextSen'>Der selbstbewusste Hausmeister schloss die knarrende Tür im Verlauf des Tages sehr vorschriftsmäßig...</p>", labels:[ 'ab', 'an', 'auf', 'her', 'hin', 'um', 'zu']}],
	
	["end", "FlashSentence", {s: "Geschafft! Vielen Dank für Ihre Teilnahme."}]
              

];