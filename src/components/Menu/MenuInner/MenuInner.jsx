/////// hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

////// helpers

////// styles
import "./style.scss";
import { setMenuInner } from "../../../store/reducers/stateSlice";

/////// components

const MenuInner = () => {
  const dispatch = useDispatch();

  const { menuInner } = useSelector((state) => state.stateSlice);

  const choice = (id) => dispatch(setMenuInner(id));

  return (
    <div className="menuInner">
      <div className="menuInner__inner">
        {menuInner?.map((item, index) => (
          <div key={index}>
            <div
              className={`every ${item?.active ? "active" : ""}`}
              onClick={() => choice(item?.id)}
            >
              <div>
                <img src={item?.img} alt="" />
              </div>
              <p>
                {item?.name} [{item?.list?.length || 0}]
              </p>
            </div>
            <div
              className={`listCateg ${
                item?.list?.length ? "expanded" : "collapsed"
              }`}
            >
              {item?.list?.map((subItem, index) => (
                <div key={index}>
                  <p>{subItem?.name}</p>
                  <span>{subItem?.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuInner;
