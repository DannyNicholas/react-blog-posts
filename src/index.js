import React from "react";
import { createRoot } from 'react-dom/client';
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
import bethany from './images/bethany.jpg';
import harry from './images/harry.jpg';
import mel from './images/mel.jpg';
import dan from './images/dan.jpg';

const App = () => {
    return (
        <div className="ui comments">
            <UserCard name='Inventor Colin'>
                <div>
                    Hello my name is Colin and I've invented chocolate flavoured cheese
                </div>
            </UserCard>
            <UserCard name='Danny Nicholas'>
                <SingleComment name='Dan' date='Today at 1.00PM' text='what do you think of this?' picture={dan} />
            </UserCard>
            <UserCard name='Bethany Nicholas'>
                <SingleComment name='Bethany' date='Today at 2.00PM' text='its amazing' picture={bethany} />
            </UserCard>
            <UserCard name='Harry Nicholas'>
                <SingleComment name='Harry' date='Today at 3.00PM' text='wow!' picture={harry} />
            </UserCard>
            <UserCard name='Mel Nicholas'>
                <SingleComment name='Mel' date='Today at 4.00PM' text='well done' picture={mel} />
            </UserCard>
        </div>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);