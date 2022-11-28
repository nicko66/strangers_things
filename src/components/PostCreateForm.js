import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import { createPosts } from "../api/api";

const PostCreateForm = ({ token, setPosts}) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    return (
     <form className="ui form" onSubmit={async (event) => {
        event.preventDefault();

        const {error, post} = await createPosts(token, title, description, price, location);

        if (post) {
            post.isCreator = true;
            setPosts((prevPosts) => [...prevPosts, post]);
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            history.push('/posts');
        } else {
            setErrorMessage(error);
        }
    }}>
        <h2>Create Post</h2>

        <div className="field">
            <label htmlFor="title">Title</label>
            <input name="title" type="text" placeholder="title of post" 
            value={title}
            onChange={(event) => setTitle(event.target.value)}></input>
        </div>

        <div className="field">
            <label htmlFor="description">Description</label>
            <input name="description" type="text" placeholder="A description of the post" required autoComplete="off"
                value={description}
                onChange={(event) => setDescription(event.target.value)}></input>
        </div>

        <div className="field">
            <label htmlFor="price">Price</label>
            <input name="price" type="text" placeholder="a price for item" 
            value={price}
            onChange={(event) => setPrice(event.target.value)}></input>

        </div>

        <div className="field">
            <label htmlFor="location">Location</label>
            <input name="location" type="text" placeholder="Where is this post?" autoComplete="off"
                value={location}
                onChange={(event) => setLocation(event.target.value)}></input>
        </div>

        {errorMessage ?
            <p className="ui negative message">{errorMessage}</p>
            : null}

        <button type="submit" className="ui button">Create</button>        
    </form>);
};

export default PostCreateForm;