import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
            });
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {/* <Post
                profilePic="https://avatars0.githubusercontent.com/u/11281854?s=460&u=2624345d87ed990594996507f6ed380a2871770a&v=4"
                message="WOW This works!"
                timestamp="This is timestamp"
                username="Oksss"
                image="https://scontent-sjc3-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/106426774_6209547007201_7481970969914066189_n.jpg?_nc_cat=1&_nc_sid=67cdda&_nc_ohc=Q2rr_E1QBv8AX9iWJ2e&_nc_ht=scontent-sjc3-1.xx&oh=57b7e2c04f27788f121f388a66e0b2ad&oe=5F82E5DD"
            /> */}
            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    );
};

export default Feed;
