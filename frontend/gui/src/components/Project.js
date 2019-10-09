import React from 'react';

const Project = (props) => {
    return (
        !props.data.hasImage ? 
        <div className="col-md-6 col-lg-3 grid-item"> 
			<div className="box-masonry"> 
                <div className="box-masonry-text"> 
                    <h4> <a href="/detail/">{props.data.title}</a></h4>
                    <div className="box-masonry-desription">
                    <p>{props.data.description}</p>
                    </div>
                </div>
			</div>
		  </div>



        :

        <div className="col-md-6 col-lg-3 grid-item"> 
            <div className="box-masonry"> 
                <a href="/detail/" title="" className="box-masonry-image with-hover-overlay">
                    <img src={props.data.image} alt="" className="img-fluid" />
                </a>
                <div className="box-masonry-hover-text-header"> 
                    <a href="/detail/" className="tile-link"> </a>
                    <h4>{props.data.title}</h4>
                    <div className="box-masonry-desription">
                        <p>{props.data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;