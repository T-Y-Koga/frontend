import React from 'react';

{/* 新規投稿画面へのポップアップ */}

export const NewPost = () => {
    return (
        <div>
            <input type="checkbox" id="pop-up" />
            <div className="new-post-overlay">
                <div className="new-post-window">
                    <label className="close" for="pop-up">✖︎</label>
                    <h4 className="new-post-view">新規投稿画面</h4>
                    <div className="form">
                        <div className="form-item">
                            <p className="form-item-label">新規投稿日</p>
                            <input type="date" className="form-item-input" />
                        </div>
                        <div className="form-item">
                            <p className="form-item-label ismsg">新規投稿内容</p>
                            <textarea className="form-item-textarea"></textarea>
                        </div>
                        <div className="form-btns">
                            <input type="submit" className="form-btn" value="送信する" />
                            <input type="submit" className="form-btn" value="前画面に戻る" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};