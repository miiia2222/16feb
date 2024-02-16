import { useState } from "react";

function App() {
  const [page1, setPage1] = useState(true);
  return (
    <div>
      {page1 ? (
        <>
          <p className="title alternative">🎉Happy Birthday🎉</p>
          <p className="title alternative">Sona</p>
        </>
      ) : (
        <div className="app">
          <div class="poem">
            <h1>面朝大海，春暖花开</h1>
            <h2>海子</h2>
            <ul>
              <li>从明天起，做一个幸福的人</li>
              <li>喂马，劈柴，周游世界</li>
              <li>从明天起，关心粮食和蔬菜</li>
              <li>我有一所房子，面朝大海，春暖花开</li>
            </ul>
            <p></p>
            <ul>
              <li>从明天起，和每一个亲人通信</li>
              <li>告诉他们我的幸福</li>
              <li>那幸福的闪电告诉我的</li>
              <li>我将告诉每一个人</li>
            </ul>
            <p></p>
            <ul>
              <li>给每一条河每一座山取一个温暖的名字</li>
              <li>陌生人，我也为你祝福</li>
              <li>愿你有一个灿烂的前程</li>
              <li>愿你有情人终成眷属</li>
              <li>愿你在尘世获得幸福</li>
              <li>我只愿面朝大海，春暖花开</li>
            </ul>
          </div>

          <div class="poem">
            <h1 className="EnglishName">
              Looking out to sea, warmed by the spring air
            </h1>
            <h2>
              By Haizi <span className="split">|</span>
              <span>Translated by John Sexton</span>
            </h2>
            <ul>
              <li>Starting tomorrow, I'll be carefree and happy</li>
              <li>Roaming the world, feeding my horse, chopping firewood</li>
              <li>
                Starting tomorrow, I'll need nothing but rice and a few
                vegetables
              </li>
              <li>In my house by the sea, warmed by the spring air</li>
            </ul>
            <p></p>
            <ul>
              <li>Starting tomorrow, I will write to all my loved ones</li>
              <li>To tell them of my happiness</li>
              <li>Of how happiness struck me like a lightning bolt</li>
              <li>I will tell this to each of them</li>
            </ul>
            <p></p>
            <ul>
              <li>I want to rename all the rivers and mountains</li>
              <li>Bring happiness to all strangers</li>
              <li>May they all have a brilliant future</li>
              <li>May all lovers find a way to be together</li>
              <li>And everyone find happiness in their time on earth</li>
              <li>
                All I want is to look out to sea, warmed by the spring air
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="alternative buttonAlternativa">
        <button className="button" onClick={() => setPage1((prev) => !prev)}>
          {page1
            ? "Highly recommend this poem, I think you'll like it"
            : "do you want to go back?"}
        </button>
      </div>
    </div>
  );
}

export default App;
