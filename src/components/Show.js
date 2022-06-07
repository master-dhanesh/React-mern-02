import React from "react";

const Show = ({ images, setImages }) => {
    let ImageLists = "Loading...";
    if (images.length > 0) {
        ImageLists = images.map((image) => (
            <div key={image._id} className="w-25 ms-5 mb-5">
                <div
                    className="w-100"
                    style={{
                        height: "250px",
                        backgroundImage: `url(${image.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            </div>
        ));
    }

    return (
        <div className="container mt-3">
            <hr />
            <div className="w-100 d-flex justify-content-start align-items-start flex-wrap">
                {ImageLists}
            </div>
        </div>
    );
};

export default Show;
