import React, { Fragment, useState } from "react";

import ItemContainer from "../../../Ui/ItemContainer";
import RuneContainer from "../../../Ui/RunesPicker/RuneContainer";

import "./NewBuild.css";

export default function NewBuild(props) {
  const goBack = "<";

  const [curBuild, setCurBuild] = useState({
    starters: ["", "", ""],
    build: [{}, {}, {}, {}, {}, {}],
    firstRunes: [{}, {}, {}, {}],
    secondRunes: [{}, {}],
  });

  const [mainRunesCat, setMainRunesCat] = useState("Domination");
  const [secondRunesCat, setSecondRunesCat] = useState("Domination");

  const handlePickStarter = (item, index) => {
    let base = { ...curBuild };
    base.starters[index] = item;
    setCurBuild(base);
  };

  const handlePickItem = (item, index) => {
    let base = { ...curBuild };
    base.build[index] = item;
    setCurBuild(base);
  };

  const handleMainRunesChange = (e) => {
    setMainRunesCat(e.target.value);
  };

  const handlePickMainRune = (rune, index) => {
    let base = { ...curBuild };
    base.firstRunes[index - 1] = rune;
    setCurBuild(base);
  };

  const handleSubmit = () => {
    props.submit(curBuild);
  };

  return (
    <Fragment>
      <div className="goBack" onClick={() => props.hide(false)}>
        {goBack}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="">Starters</label>
          <div className="item-containers">
            <ItemContainer
              item={curBuild.starters[0]}
              idx={0}
              pick={handlePickStarter}
            />
            <ItemContainer
              item={curBuild.starters[1]}
              idx={1}
              pick={handlePickStarter}
            />
            <ItemContainer
              item={curBuild.starters[2]}
              idx={2}
              pick={handlePickStarter}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Build</label>
          <div className="item-containers">
            <ItemContainer
              item={curBuild.build[0]}
              idx={0}
              pick={handlePickItem}
            />
            <ItemContainer
              item={curBuild.build[1]}
              idx={1}
              pick={handlePickItem}
            />
            <ItemContainer
              item={curBuild.build[2]}
              idx={2}
              pick={handlePickItem}
            />
            <ItemContainer
              item={curBuild.build[3]}
              idx={3}
              pick={handlePickItem}
            />
            <ItemContainer
              item={curBuild.build[4]}
              idx={4}
              pick={handlePickItem}
            />
            <ItemContainer
              item={curBuild.build[5]}
              idx={5}
              pick={handlePickItem}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Main Runes</label>
          <select
            value={secondRunesCat}
            onChange={handleSecondRunesChange}
            id=""
          >
            <option value="Domination">Domination</option>
            <option value="Inspiration">Inspiration</option>
            <option value="Precision">Precision</option>
            <option value="Resolve">Resolve</option>
            <option value="Sorcery">Sorcery</option>
          </select>
          <div className="runes-container">
            <RuneContainer
              rune={curBuild.firstRunes[0]}
              idx={1}
              category={mainRunesCat}
              pick={handlePickMainRune}
              tree={"first"}
            />
            <RuneContainer
              rune={curBuild.firstRunes[1]}
              idx={2}
              category={mainRunesCat}
              pick={handlePickMainRune}
              tree={"first"}
            />
            <RuneContainer
              rune={curBuild.firstRunes[2]}
              idx={3}
              category={mainRunesCat}
              pick={handlePickMainRune}
              tree={"first"}
            />
            <RuneContainer
              rune={curBuild.firstRunes[3]}
              idx={4}
              category={mainRunesCat}
              pick={handlePickMainRune}
              tree={"first"}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Second Runes</label>
          <select value={mainRunesCat} onChange={handleMainRunesChange} id="">
            <option value="Domination">Domination</option>
            <option value="Inspiration">Inspiration</option>
            <option value="Precision">Precision</option>
            <option value="Resolve">Resolve</option>
            <option value="Sorcery">Sorcery</option>
          </select>
          <div className="runes-container">
            <RuneContainer
              rune={curBuild.secondRunes[0]}
              idx={1}
              category={mainRunesCat}
              pick={handlePickMainRune}
              tree={"second"}
            />
            <RuneContainer
              rune={curBuild.secondRunes[1]}
              idx={2}
              category={mainRunesCat}
              pick={handlePickMainRune}
              tree={"second"}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Stat Runes</label>

          <div className="runes-container">
            <RuneContainer
              rune={curBuild.secondRunes[0]}
              idx={1}
              category={mainRunesCat}
              pick={handlePickMainRune}
              tree={"second"}
            />
            <RuneContainer
              rune={curBuild.secondRunes[1]}
              idx={2}
              category={mainRunesCat}
              pick={handlePickMainRune}
              tree={"second"}
            />
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    </Fragment>
  );
}
