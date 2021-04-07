import React from 'react';

const Imagen = (props) => {

    const { tags, webformatURL, id } = props.imagen;

    function handleClick(id, e) {
        e.preventDefault();
        console.log(id)

    }
    return (
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 px-1 py-1 ">
            <div className="card ">
                <a onClick={(e) => handleClick(id, e)} >
                    <img src={webformatURL} alt={tags} className="card-img-top" />
                </a>
                <div className="container mx-auto">
                    <div className="row cart-text px-2  py-2">
                        <b> #tags:</b> {tags}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Imagen;