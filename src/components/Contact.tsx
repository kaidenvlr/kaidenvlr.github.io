import React from 'react';

const Contact: React.FC = () => {
	return (
		<div className="container contact">
			<h2>Contact</h2>
			<p>Open to offers and collaboration.</p>
			<div className="cta">
				<a className="btn" href="mailto:kaidenvlr@gmail.com">Email</a>
				<a className="btn secondary" href="https://github.com/kaidenvlr" target="_blank" rel="noreferrer">GitHub</a>
				<a className="btn" href="https://t.me/kaidenvlr" target="_blank" rel="noreferrer">Telegram</a>
			</div>
		</div>
	);
};

export default Contact; 