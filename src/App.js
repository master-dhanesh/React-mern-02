import { app } from "./config";
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    listAll,
    ref,
    uploadBytes,
} from "firebase/storage";
import { random } from "nanoid";

const App = () => {
    const storage = getStorage(app);

    const Uploadhandler = async (e) => {
        let imagename =
            Math.floor(Math.random() * 1000) +
            "." +
            e.target.files[0].name.split(".").at(-1);

        const storageRef = await ref(storage, imagename);
        await uploadBytes(storageRef, e.target.files[0]);
        console.log("Image Uploaded");
    };

    const ReadImages = async () => {
        const listRef = await ref(storage);
        const { items } = await listAll(listRef);
        items.forEach(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            console.log(url);
        });
    };

    const DeleteImage = async () => {
        const imageRef = await ref(storage, "165.jpg");
        // const url = await getDownloadURL(imageRef);
        // console.log(url);
        await deleteObject(imageRef);
        console.log("Image Deleted");
    };

    return (
        <div className="container mt-5 ">
            <input
                onChange={Uploadhandler}
                type="file"
                className="form-control w-50 mb-3"
            />

            <button onClick={ReadImages} className="btn btn-primary me-3">
                Read Images
            </button>

            <button onClick={DeleteImage} className="btn btn-danger me-3">
                Delete Image
            </button>
        </div>
    );
};

export default App;
