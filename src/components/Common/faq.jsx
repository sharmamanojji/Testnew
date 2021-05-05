import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import faqbanner from '../../assets/images/faqbanner.jpg';
import Button from '@material-ui/core/Button';
import faqData from './faqData.json';
import './faq.scss';

const FAQ = () => {
	const [visible, setVisible] = useState(1);
	const [showdivcomplete, setShowdivcomplete] = useState(true);
	const [backme, setBackme] = useState(false);
	const [showdiv, setShowdiv] = useState(false);
	const handleClick = () => {
		setShowdivcomplete(false);
		setShowdiv(true);
		setBackme(true);
	};

	const handleOnClick = () => {
		setShowdivcomplete(true);
		setShowdiv(false);
		setBackme(false);
	};
	return (
		<React.Fragment>
			<Paper className={'wrapper-box faq-common-page'}>
				<div className="profileContainer">
					<button class="btn backbtn" hidden={!backme} onClick={handleOnClick}><i class="material-icons">keyboard_backspace</i></button>
					<div className="pagefaq" hidden={!showdivcomplete}>
						<Typography variant="h2">Enim erat convallis</Typography>
						<img src={faqbanner} alt="faqbanner" className="rightbannerimg" />
						<div class="faq_right">
							<ul>
								{faqData.map((item, index) =>
									<li key={item.id} id={item.id}>
										<Button class="btn" color="primary" variant="outlined" onClick={handleClick}>
											<label>{item.listText} </label>
											<i class="material-icons">chevron_right</i>
										</Button>

									</li>
								)}
							</ul>
							<Link to="./" className="viewmorefaq">View More FAQs</Link>
						</div>
					</div>
					{faqData.slice(0, visible).map((item, index) =>
						<div key={item.id} id={item.id} hidden={!showdiv} className="answerquestion">
							<h3>{item.listText}</h3>
							<div className="answer">
								<p>{item.DetailedText1}</p>
								<p>{item.DetailedText2}</p>
								<p>{item.DetailedText3}</p>
							</div>
						</div>
					)}
				</div>
			</Paper>
		</React.Fragment>
	)
}


export default (FAQ);
