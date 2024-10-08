import Story from "./Story";

import './Stories.css';    

export default function Stories() {
    return (
        <div className='Stories'>
            <Story nome="sleeap" foto='https://picsum.photos/200/300' />
            <Story nome="heitor" foto='https://picsum.photos/200/300' />
            <Story nome="hzinho" foto='https://picsum.photos/200/300' />
            <Story nome="fe" foto='https://picsum.photos/200/300' />
            <Story nome="pereira" foto='https://picsum.photos/200/300' />
        </div>
    );
}