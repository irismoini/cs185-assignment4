import React, { Component } from 'react';

export class MemoriesInMusic extends Component {
    render() {
        document.title = "Memories In Music";
        return (
            <div>
                <div className="headerForPages">
                    <h1>Music</h1>
                </div>
                <div className="musicExplination">
                    <p>
                        You know what I like, music. I think it's really hard to describe how people feel about music though.
                        But I think what I like about music is that it makes me feel things I wouldn't otherwise, mainly I think
                        it makes me feel human in a way nothing else does. I think I also like how it's other people's stories,
                        and that music expresses the way they feel pretty perfectly. I think it's nice listening to what other
                        people feel and actually feeling what they feel too. I like that it can make me happy or sad. I like that
                        I can just listen and forget myself. I like how it can be interpreted to meet other people's needs. I like
                        how even though I try to explain how I feel about it I can't. I don't think it's indescribable,
                        I just think it's different, and you can never convey the whole picture. I like how it's helped me and helps
                        me. And I like how it's always been something I've known I've liked even when everything else around me is
                        changing. Also, I like how I'm not the only one who feels this way about it, I like how other people can
                        feel these things too.

                    </p>
                </div>

                <div className="videosGrid">

                    <div className="video">
                        <div className="videoWrapping">
                            <iframe height="440" width="440"
                                src="https://www.youtube.com/embed/KhjTa_7Nq6Y">
                            </iframe>
                        </div>
                    </div>

                    <div className="video">
                        <div className="videoWrapping">
                            <iframe height="440" width="440"
                                src="https://www.youtube.com/embed/mhmGwTDpPf0">
                            </iframe>
                        </div>
                    </div>

                    <div className="video">
                        <div className="videoWrapping">
                            <iframe height="440" width="440"
                                src="https://www.youtube.com/embed/_w5jPT8LMF0">
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MemoriesInMusic;