import React from 'react';
import './App.css';
import './index.css';
import { IconContext } from 'react-icons'
import { FaHourglass } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { FaPlusCircle } from "react-icons/fa"
// import { IconName } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

import { NewPost } from "./components/module/NewPost";

export const App = () => {
  return (
    <>
    {/* <div className="App"> */}
      {/* ヘッダーの作成 */}
      <header>
        <div className="container">
          <IconContext.Provider value={{ color: 'black', size: '40px' }}>
            <a href="index.html">
                <h1><FaHourglass /> TeamD App</h1>
            </a>
          </IconContext.Provider>
          <div className="header-search">
            <form action="">
                <input type="text" name="" id="" placeholder="入力してください"></input>
                <IconContext.Provider value={{ color: 'black', size: '25px' }}>
                <button><FaSearch /></button>
                </IconContext.Provider>
            </form>
          </div>

          {/* ドロップダウン作成 */}
          <div>
            <ul className="dropdown">
              <li>
                <a href="#">
                  <IconContext.Provider value={{ color: 'black', size: '50px' }}>
                      <BsPersonCircle />
                  </IconContext.Provider>            
                </a>
                <ul>
                    <li><label for="pop-up">新規投稿画面</label></li>
                    {/* <NewPost /> */}

                    <li><a href="#">自分の進捗一覧</a></li>
                    <li><a href="#">プロフィール</a></li>
                    <li><a href="#">ログアウト</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    {/* </div> */}

    <div className="flex">
      <div className="ranking-and-searchbox">
        {/*本日のランキング*/}
        <div className="rankbox">
          <h4>👑　本日のランキング　👑</h4>
          <table>
            <tr>
              <th>No.1</th>
              <th>投稿者　1</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.2</th>
              <th>投稿者　2</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.3</th>
              <th>投稿者　3</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.4</th>
              <th>投稿者　4</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.5</th>
              <th>投稿者　5</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.6</th>
              <th>投稿者　6</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.7</th>
              <th>投稿者　7</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.8</th>
              <th>投稿者　8</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.9</th>
              <th>投稿者　9</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
            <tr>
              <th>No.10</th>
              <th>投稿者　10</th>
              <th>いいね数</th>
              <th>0</th>
            </tr>
          </table>
        </div>

        {/* 過去の投稿検索 */}
        <div className="searchbox">
          <h4>過去の投稿検索</h4>
          <div class="cp_ipselect">
              <select class="cp_sl06" required>
                <option value="" hidden disabled selected></option>
                <option value="1">2022</option>
                <option value="2">2021</option>
                <option value="3">2020</option>
              </select>
                <span class="cp_sl06_highlight"></span>
                <span class="cp_sl06_selectbar"></span>
                <label class="cp_sl06_selectlabel">西暦</label>
          </div>

          <div class="cp_ipselect">
              <select class="cp_sl06" required>
                <option value="" hidden disabled selected></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
                <span class="cp_sl06_highlight"></span>
                <span class="cp_sl06_selectbar"></span>
                <label class="cp_sl06_selectlabel">月</label>
          </div>

          <div class="cp_ipselect">
              <select class="cp_sl06" required>
                <option value="" hidden disabled selected></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
                <span class="cp_sl06_highlight"></span>
                <span class="cp_sl06_selectbar"></span>
                <label class="cp_sl06_selectlabel">日</label>
          </div>
        </div>
      </div>
      
      {/* 新着順　進捗投稿 */}
      <div className="new-arrivals-posts-list">
        <h4>新着順　投稿一覧</h4>
        <div className="new-post">
            <p>投稿者名</p>
            <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
              ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
            </p>
            <ul>
              <li>いいね数</li>
              <li>コメント数</li>
            </ul>
        </div>
        <div className="new-post">
            <p>投稿者名</p>
            <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
              ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
            </p>
            <ul>
              <li>いいね数</li>
              <li>コメント数</li>
            </ul>
        </div>
        <div className="new-post">
            <p>投稿者名</p>
            <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
              ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
            </p>
            <ul>
              <li>いいね数</li>
              <li>コメント数</li>
            </ul>
        </div>
        <div className="new-post">
            <p>投稿者名</p>
            <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
              ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
            </p>
            <ul>
              <li>いいね数</li>
              <li>コメント数</li>
            </ul>
        </div>
        <div className="new-post">
            <p>投稿者名</p>
            <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
              ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
            </p>
            <ul>
              <li>いいね数</li>
              <li>コメント数</li>
            </ul>
        </div>
        <div className="new-post">
            <p>投稿者名</p>
            <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
              ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
            </p>
            <ul>
              <li>いいね数</li>
              <li>コメント数</li>
            </ul>
        </div>
        <div className="new-post">
            <p>投稿者名</p>
            <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
              ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
            </p>
            <ul>
              <li>いいね数</li>
              <li>コメント数</li>
            </ul>
        </div>
        <div className="new-post">
            <p>投稿者名</p>
            <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
              ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
            </p>
            <ul>
              <li>いいね数</li>
              <li>コメント数</li>
            </ul>
        </div>
        {/* 新規投稿ボタンからの投稿画面ポップアップ */}
        {/* 新規投稿ボタン */}
        <label className="new-post-button" for="pop-up"><FaPlusCircle /></label>
            {/* 新規投稿画面へのポップアップ */}
            <NewPost />

      </div>
    </div>

    <div></div>
    <div></div>

  </>
  );
}
