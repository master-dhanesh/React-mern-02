import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (images.length === 0) FetchImages();
    }, [images]);

    const FetchImages = async () => {
        const { data } = await axios.get(`https://picsum.photos/v2/list`);
        const updatedData = data.map((d) => ({
            _id: d.id,
            url: d.download_url,
        }));
        setImages(updatedData);
    };

    return (
        <div>
            <Create images={images} setImages={setImages} />
            <Show images={images} setImages={setImages} />
        </div>
    );
};

export default App;
