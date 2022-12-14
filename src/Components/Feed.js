import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {

    const [feed, setFeed] = useState()

    const posts = feed.map((feed) => <Block color={feed}>/Block></Block>);
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const addPost = (color) => {
        setFeed(current => <Block color={color})
    }

    return (
        <div>
            <Menu addPost={addPost}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;