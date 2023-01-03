import React from "react";
import './styles/ContactPage.css';
import Faq from "react-faq-component";
import { findByLabelText } from "@testing-library/react";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
     rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


function ContactPage(){
    return(
        <div className="background-ContactPage">
            <div className="contact-field">
                <h2 className="contact-title">Contact</h2>
                <p className="contact-points">Contact email</p>
                <input className="input-email"></input>
                <p className="contact-points">Subject </p>
                <input className="contact-subject"></input>
                <p className="contact-points">Meesage </p>
                <input className="contact-message"></input>
                
            </div>
            <div className="faq-field">
                <h2 className="faq-title">FAQ</h2>
                <Faq 
                data={data}
                styles={styles}
                config={config}
                className="faq-content"
                />
            </div>
        </div>
    );

};

export default ContactPage;