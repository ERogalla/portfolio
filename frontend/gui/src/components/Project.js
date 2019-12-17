import React from 'react';

const Project = (props) => {
    return (
        props.data.image === null ? 
        
        <div className="col-md-6 col-lg-4 grid-item"> 
            <div className="box-masonry"> 
                <a href={`/${props.data.slug}`} className="title-link">
                        <div className="box-masonry-text"> 
                            <h4> {props.data.title}</h4>
                            <div className="box-masonry-desription">
                                <p>{props.data.description}</p>
                            </div>
                        </div>
                </a>
            </div>
		</div>

        :

        <div className="col-md-6 col-lg-4 grid-item"> 
			<div className="box-masonry"> 
                <a href={`/${props.data.slug}`} title="" className="box-masonry-image with-hover-overlay with-hover-icon">
                    <img src={props.data.image} alt="" className="img-fluid" />
                </a>
			    <div className="box-masonry-text"> 
                    <h4> 
                        <a href={`/${props.data.slug}`}>{props.data.title}</a>
                    </h4>
                    <div className="box-masonry-desription">
                        <p>{props.data.description}</p>
                    </div>
			    </div>
			</div>
        </div>

        
    );
}

export default Project;