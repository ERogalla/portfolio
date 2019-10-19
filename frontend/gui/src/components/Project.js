import React from 'react';

const Project = (props) => {
    return (
        props.data.image === null ? 
        
        <div className="col-md-6 col-lg-4 grid-item"> 
            <a href="/detail/" className="title-link">
                <div className="box-masonry"> 
                    <div className="box-masonry-text"> 
                        <h4> {props.data.title}</h4>
                        <div className="box-masonry-desription">
                            <p>{props.data.description}</p>
                        </div>
                    </div>
                </div>
            </a>
		</div>

        :

        <div class="col-md-6 col-lg-3 grid-item"> 
			<div class="box-masonry"> 
                <a href="/detail/" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                    <img src={props.data.image} alt="" className="img-fluid" />
                </a>
			    <div class="box-masonry-text"> 
                    <h4> 
                        <a href="/detail/">{props.data.title}</a>
                    </h4>
                    <div class="box-masonry-desription">
                        <p>{props.data.description}</p>
                    </div>
			    </div>
			</div>
        </div>

        
    );
}

export default Project;