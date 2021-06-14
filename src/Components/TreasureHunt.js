import React, {Component} from 'react';

class TreasureHunt extends Component {
    render() {

        if (this.props.data) {

            var realNameMapping = {};
            var thFields = this.props.data.testimonials.map(function (testimonial) {
                realNameMapping[testimonial.gameName] = testimonial.user;
                return <div className="treasure-list-input">
                    <label htmlFor="contactName">{testimonial.gameName} </label>
                    <input type="text" defaultValue="" size="35" id={testimonial.gameName} name="contactName"/>
                </div>

            })
        }

        function submitFunc(e) {
            var divList = e.target.parentElement.children.item(0).children.item(0).children;
            e.target.parentElement.getElementsByClassName("incorrect-response").item(0).classList.add("hide-class");
            e.target.parentElement.getElementsByClassName("correct-response").item(0).classList.add("hide-class");
            var correctValues = true;
            for (let parentElement of divList) {
                if (parentElement.classList.contains("treasure-list-input")) {
                    var treasureElementInput = parentElement.getElementsByTagName("input").item(0);

                    if (treasureElementInput.value !== "" &&
                        treasureElementInput.value.toLowerCase().includes(realNameMapping[treasureElementInput.id].toLowerCase())
                    ) {
                        continue;
                    } else {
                        correctValues = false;
                        break;
                    }

                }
            }
            console.log(correctValues);

            if(!correctValues){
                e.target.parentElement.getElementsByClassName("incorrect-response").item(0).classList.remove("hide-class");
            }
            else{
                e.target.parentElement.getElementsByClassName("correct-response").item(0).classList.remove("hide-class");
            }


        }

        return (
            <section
                id="treasureHunt"
            >
                <div className="text-container">
                    <div className="row">

                        <div className="header-col">
                            <h1 style={{textAlign: "center"}}>
                                <span>Treasure Hunt</span>
                            </h1>
                        </div>
                        <br/>
                        <br/>
                        {thFields}
                    </div>
                </div>
                <button className="submit" onClick={submitFunc}>
                    Submit
                </button>
                <div className="incorrect-response gif-class hide-class">
                    <iframe src="https://giphy.com/embed/kc6o9va9iOYmj7OOYv" width="480" height="204" frameBorder="0"
                            className="giphy-embed" allowFullScreen></iframe>
                    <p><a
                        href="https://giphy.com/gifs/HrithikRoshan-super30-itne-kaise-galat-ho-sakte-how-can-you-be-so-wrong-kc6o9va9iOYmj7OOYv">via
                        GIPHY</a></p>
                </div>

                <div className="correct-response gif-class hide-class">
                    <iframe src="https://giphy.com/embed/Rhf0uSWt1P2TFqVMZK" width="480" height="400" frameBorder="0"
                            className="giphy-embed" allowFullScreen></iframe>
                    <p><a href="https://giphy.com/gifs/Friends-friends-season-9-tv-Rhf0uSWt1P2TFqVMZK">via GIPHY</a></p>
                </div>

            </section>
        )


    }
}

export default TreasureHunt;
