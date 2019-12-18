import React from 'react';

const Contact = () => {

    return (
        <div className="row">   
            <div className="col-lg-8">
                <div className="content-column-content">
                    <h1>Get in touch</h1>
                    <p className="lead">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then</p>
                    <p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
                    <p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
                    <h4>Drop me a line, maybe?</h4>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline.</p>
                    <form id="contact-form" method="post" action="#" className="contact-form form">
                        <div className="controls">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" required="required" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="surname" id="surname" required="required" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" required="required" className="form-control" />
                            </div>
                            <div className="form-group">
                                <textarea rows="4" name="message" id="message" required="required" className="form-control"></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Send" className="btn btn-outline-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact;