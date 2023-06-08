import thor from "../../img/Thumbnail.svg";
import mjolnir from "../../img/Decoration.svg";

import "./randomCharacter.scss";
import "../../style/button.scss";

const RandomCharacter = () => {
    return (
        <div className="random">
            <div className="random__characters">
                <div className="random__charactersImg">
                    <img src={thor} alt="thor" />
                </div>
                <div className="random__charactersText">
                    <div className="random__charactersText_title">thor</div>
                    <div className="random__charactersText_descr">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</div>
                    <div className="random__charactersText_btns">
                        <div className="btns"><a href="#">HOMEPAGE</a></div>
                        <div className="btns"><a href="#">WIKI</a></div>
                    </div>
                </div>
            </div>
            <div className="random__tryIt">
                <div className="random__tryItText">
                    <p>Random character for today!<br></br> Do you want to get to know him better?</p>
                    <p className="random__tryItText_or">Or choose another one</p>
                    <div className="btns random__tryItBtn">
                        <button>TRY IT</button>
                    </div>
                    <div className="random__tryItImg">
                        <div className="random__tryItImg_mjolnir"><img src={mjolnir} alt="mjolnir" /></div>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default RandomCharacter;