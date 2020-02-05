import React from "react";

const HomePage = () => {
	return (
		<React.Fragment>
			<h1 className="h2">Welcome Mr Ratna</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quasi nihil tenetur accusantium et, impedit porro recusandae sit, eligendi modi esse ex odit iure omnis cumque
				unde, amet. Voluptatum, cumque.
			</p>
			<div className="row">
				<div className="col-4">
					<div className="card">
						<div style={{ height: "200px", background: "#555" }} />
						<div className="card-body">
							<h2 className="card-title h4">Card title</h2>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card">
						<div style={{ height: "200px", background: "#555" }} />
						<div className="card-body">
							<h2 className="card-title h4">Card title</h2>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card">
						<div style={{ height: "200px", background: "#555" }} />
						<div className="card-body">
							<h2 className="card-title h4">Card title</h2>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HomePage;
